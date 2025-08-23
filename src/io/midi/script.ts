import * as Dom from "ixfx/dom.js";
import { Midi } from "ixfx/io.js";
import { debounce } from "ixfx/flow.js";

const updatePortSelectorsDebounced = debounce(updatePortSelectors, 200);

const settings = Object.freeze({
  inputLastEl: document.getElementById(`inputLast`) as HTMLElement,
  inputLog: Dom.log(`#inputLog`, { timestamp: true }),
  outputLog: Dom.log(`#outputLog`, { timestamp: true }),
  mainLog: Dom.log(`#mainLog`, { timestamp: true }),
  chkEvFilterCc: Dom.Forms.checkbox(`#evFilterCc`),
  chkEvFilterPb: Dom.Forms.checkbox(`#evFilterPb`),
  chkEvFilterNotes: Dom.Forms.checkbox(`#evFilterNotes`),
  chkOutFollow: Dom.Forms.checkbox(`#outFollow`),
  outChannel: Dom.Forms.numeric(`#outChannel`),
  outVelocity: Dom.Forms.numeric(`#outVelocity`),
  outCc: Dom.Forms.numeric(`#outCc`),
  outNote: Dom.Forms.numeric(`#outNote`),
  outNoteDuration: Dom.Forms.numeric(`#outNoteDuration`),
  midi: new Midi.MidiManager()
});

type State = Readonly<{
  inputDeviceSelEl: Dom.Forms.SelectHandler | undefined
  outputDeviceSelEl: Dom.Forms.SelectHandler | undefined
  // inputDevices: MIDIInput[]
  // outputDevices: MIDIOutput[]
  // connectedInputs: MIDIInput[]
  // connectedOutputs: MIDIOutput[]
  // omniInput: boolean
  // omniOutput: boolean
}>

let state: State = {
  inputDeviceSelEl: undefined,
  outputDeviceSelEl: undefined,
  // inputDevices: [],
  // outputDevices: [],
  // connectedInputs: [],
  // connectedOutputs: [],
  // omniInput: true,
  // omniOutput: true
};


function send(msg: Midi.MidiMessage) {
  const { outputLog, midi } = settings;
  outputLog.log(msg);

  try {
    midi.send(msg);
  } catch (error) {
    outputLog.error(error);

  }
}

// function onMidiStateChange(event: MIDIConnectionEvent) {
//   const { port } = event;
//   if (port === null) return;

//   const isConn = state.connectedInputs.find(i => i.id === port.id);
//   if (isConn) {
//     settings.mainLog.log(`${ port.name } state: ${ port.state } connection: ${ port.connection }`);
//   }
// }


const initMidi = async () => {
  const { midi } = settings;
  if (!navigator.requestMIDIAccess) throw new Error(`MIDI not supported in this browser.`);

  await midi.scan();
  updatePortSelectors();

};

function updatePortSelectors() {

  const { midi } = settings;
  const { inputDeviceSelEl, outputDeviceSelEl } = state;
  let inputOpts = [];
  for (const port of midi.knownInput()) {
    inputOpts.push(port.name ?? `?`);
  }
  inputDeviceSelEl?.setOpts(inputOpts);

  let outputOpts = [];
  for (const port of midi.knownOutput()) {
    outputOpts.push(port.name ?? `?`);
  }
  outputDeviceSelEl?.setOpts(outputOpts);
}

function onMidiMessage(m: Midi.MidiMessage) {
  const { inputLog, chkEvFilterCc, chkEvFilterNotes, chkEvFilterPb, inputLastEl, chkOutFollow } = settings;

  if (!chkEvFilterNotes.checked && (m.command === `noteoff` || m.command === `noteon`)) return;
  if (!chkEvFilterCc.checked && m.command === `cc`) return;
  if (!chkEvFilterPb.checked && m.command === `pitchbend`) return;

  if (chkOutFollow.checked) {
    settings.outChannel.value = m.channel;
    if (m.command === `cc`) {
      settings.outVelocity.value = m.velocity;
      settings.outCc.value = m.note;
    } else if (m.command === `noteoff`) {
      settings.outNote.value = m.note;
    } else if (m.command === `noteon`) {
      settings.outVelocity.value = m.velocity;
      settings.outNote.value = m.note;
    }
  }
  inputLastEl.innerText = JSON.stringify(m);
  inputLog.log(m);
}

// async function setMidiInput(inputs: MIDIInput[]) {
//   let { connectedInputs } = state;

//   for (const ci of connectedInputs) {
//     console.log(`Closing input: ${ ci.name }`);
//     await ci.close();
//     ci.removeEventListener(`midimessage`, onMidiMessage);
//   }

//   for (const input of inputs) {
//     console.log(`Connecting input: ${ input.name }`);
//     input.addEventListener(`midimessage`, onMidiMessage);
//     await input.open();
//   }
//   updateState({ connectedInputs: inputs, omniInput: false });
// }

// async function setMidiOutput(outputs: MIDIOutput[]) {
//   let { connectedOutputs } = state;

//   for (const co of connectedOutputs) {
//     console.log(`Closing output: ${ co.name }`);
//     await co.close();
//   }

//   for (const output of outputs) {
//     console.log(`Connecting output: ${ output.name }`);
//     await output.open();
//   }
//   updateState({ connectedOutputs: outputs, omniOutput: false });
// }

const setup = () => {
  const { midi, mainLog } = settings;
  midi.addEventListener(`message`, event => {
    onMidiMessage(event);
  });
  midi.addEventListener(`open`, event => {
    mainLog.log(`Opened: ${ event.port.name } (${ event.port.type })`);
  });
  midi.addEventListener(`close`, event => {
    mainLog.log(`Closed: ${ event.port.name } (${ event.port.type })`);
  });

  midi.addEventListener(`deviceConnected`, event => {
    console.log(`deviceConnected ${ event.port.name }`);
    updatePortSelectorsDebounced();
  });

  midi.addEventListener(`deviceDisconnected`, event => {
    console.log(`deviceDisconnected ${ event.port.name }`);
    updatePortSelectorsDebounced();
  });

  const inputDeviceSelEl = Dom.Forms.select(`#inputDevice`, (v) => {
    if (v === `Omni`) {
      midi.setOmniInput(true);
      return;
    }
    midi.setOmniInput(false);

    const found = midi.findKnownPort(d => d.name === v && d.type === `input`);
    if (!found) {
      console.warn(`Could not find selected MIDI input: ${ v }`);
    } else {
      midi.open(found, true);
    }
  }, { placeholderOpt: `Omni` });

  const outputDeviceSelEl = Dom.Forms.select(`#outputDevice`, (v) => {
    if (v === `Omni`) {
      midi.setOmniOutput(true);
      return;
    }
    midi.setOmniOutput(false);

    const found = midi.findKnownPort(d => d.name === v && d.type === `output`);
    if (!found) {
      console.warn(`Could not find selected MIDI output: ${ v }`);
    } else {
      midi.open(found, true);
    }
  }, { placeholderOpt: `Omni` });

  updateState({ inputDeviceSelEl, outputDeviceSelEl });


  Dom.Forms.button(`#btnInputLogClear`, () => {
    settings.inputLog.clear();
  })

  Dom.Forms.button(`#btnOutputLogClear`, () => {
    settings.outputLog.clear();
  })
  Dom.Forms.button(`#btnSendCc`, () => {
    const msg: Midi.MidiMessage = {
      command: `cc`,
      channel: settings.outChannel.value,
      velocity: settings.outVelocity.value,
      note: settings.outCc.value
    }
    send(msg);
  });
  Dom.Forms.button(`#btnSendNote`, () => {
    const msgOn: Midi.MidiMessage = {
      command: `noteon`,
      channel: settings.outChannel.value,
      velocity: settings.outVelocity.value,
      note: settings.outNote.value
    }
    const msgOff: Midi.MidiMessage = {
      command: `noteoff`,
      channel: settings.outChannel.value,
      velocity: 0,
      note: settings.outNote.value
    }
    send(msgOn);
    setTimeout(() => {
      send(msgOff);
    }, settings.outNoteDuration.value)
  });

};
setup();

try {
  initMidi();

} catch (error) {
  settings.mainLog.error(error);
}

function updateState(s: Partial<State>) {
  state = Object.freeze({
    ...state,
    ...s
  });
}