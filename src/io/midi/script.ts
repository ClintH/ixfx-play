import { Dom } from "@ixfx/bundle"
import * as Midi from './midi.js'

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
  outNoteDuration: Dom.Forms.numeric(`#outNoteDuration`)
});

type State = Readonly<{
  inputDeviceSelEl: Dom.Forms.SelectHandler | undefined
  outputDeviceSelEl: Dom.Forms.SelectHandler | undefined
  inputDevices: MIDIInput[]
  outputDevices: MIDIOutput[]
  connectedInputs: MIDIInput[]
  connectedOutputs: MIDIOutput[]
  omniInput: boolean
  omniOutput: boolean
}>

let state: State = {
  inputDeviceSelEl: undefined,
  outputDeviceSelEl: undefined,
  inputDevices: [],
  outputDevices: [],
  connectedInputs: [],
  connectedOutputs: [],
  omniInput: true,
  omniOutput: true
};

function send(msg: Midi.MidiMessage) {
  const { outputLog } = settings;
  outputLog.log(msg);

  for (const output of state.connectedOutputs) {
    try {
      output.send(Midi.create(msg));
    } catch (error) {
      outputLog.error(error);
    }
  }
}

function onMidiStateChange(event: MIDIConnectionEvent) {
  const { port } = event;
  if (port === null) return;

  const isConn = state.connectedInputs.find(i => i.id === port.id);
  if (isConn) {
    settings.mainLog.log(`${ port.name } state: ${ port.state } connection: ${ port.connection }`);
  }
}

const initMidi = () => {
  const { inputDeviceSelEl, outputDeviceSelEl } = state;
  if (!navigator.requestMIDIAccess) throw new Error(`MIDI not supported in this browser.`);

  navigator.requestMIDIAccess().then(
    (midi) => {
      midi.addEventListener(`statechange`, onMidiStateChange);

      // Get inputs
      const inputs = midi.inputs;
      let inputOpts = [];
      let inputDevices: MIDIInput[] = [];
      for (const i of inputs.values()) {
        inputOpts.push(i.name ?? `?`);
        inputDevices.push(i);
      }

      inputDeviceSelEl?.setOpts(inputOpts);
      updateState({ inputDevices });

      // Get outputs
      const outputs = midi.outputs;
      let outputOpts = [];
      let outputDevices: MIDIOutput[] = [];
      for (const i of outputs.values()) {
        outputOpts.push(i.name ?? `?`);
        outputDevices.push(i);
      }

      outputDeviceSelEl?.setOpts(outputOpts);
      updateState({ outputDevices });


      settings.mainLog.log(`MIDI initialised, ${ inputDevices.length } input(s) and ${ outputDevices.length } output(s) found.`);
      connectOmni(`both`);
    }, (err) => {
      console.log(err);
    });
};

function onMidiMessage(ev: MIDIMessageEvent) {
  const { inputLog, chkEvFilterCc, chkEvFilterNotes, chkEvFilterPb, inputLastEl, chkOutFollow } = settings;
  const data = ev.data;
  if (data === null) return;
  const m = Midi.parse(data);
  if (!m) return;

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

async function setMidiInput(inputs: MIDIInput[]) {
  let { connectedInputs } = state;

  for (const ci of connectedInputs) {
    console.log(`Closing input: ${ ci.name }`);
    await ci.close();
    ci.removeEventListener(`midimessage`, onMidiMessage);
  }

  for (const input of inputs) {
    console.log(`Connecting input: ${ input.name }`);
    input.addEventListener(`midimessage`, onMidiMessage);
    await input.open();
  }
  updateState({ connectedInputs: inputs, omniInput: false });
}

async function setMidiOutput(outputs: MIDIOutput[]) {
  let { connectedOutputs } = state;

  for (const co of connectedOutputs) {
    console.log(`Closing output: ${ co.name }`);
    await co.close();
  }

  for (const output of outputs) {
    console.log(`Connecting output: ${ output.name }`);
    await output.open();
  }
  updateState({ connectedOutputs: outputs, omniOutput: false });
}

function connectOmni(which: `input` | `output` | `both`) {
  if (which === `both` || which === `input`) {
    setMidiInput([]);
    setMidiInput(state.inputDevices);
    updateState({ omniInput: true });
  }
  if (which === `both` || which === `output`) {
    setMidiOutput([]);
    setMidiOutput(state.outputDevices);
    updateState({ omniOutput: true });
  }
}

const setup = () => {
  const inputDeviceSelEl = Dom.Forms.select(`#inputDevice`, (v) => {
    if (v === `Omni`) {
      connectOmni(`input`);
      return;
    }
    const found = state.inputDevices.find(d => d.name === v);
    if (!found) {
      console.warn(`Could not find selected MIDI input`);
      setMidiInput([]);
    } else setMidiInput([ found ]);
  }, { placeholderOpt: `Omni` });

  const outputDeviceSelEl = Dom.Forms.select(`#outputDevice`, (v) => {
    if (v === `Omni`) {
      connectOmni(`output`);
      return;
    }
    const found = state.outputDevices.find(d => d.name === v);
    if (!found) {
      console.warn(`Could not find selected MIDI output`);
      setMidiOutput([]);
    } else setMidiOutput([ found ]);
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