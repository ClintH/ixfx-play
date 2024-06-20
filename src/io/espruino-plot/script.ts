import { Espruino, StateChangeEvent, IoDataEvent } from "../../ixfx/io.js";
import snarkdown from "./snarkdown.es.js";
import * as Dom from "../../ixfx/dom.js";
import { Plot2, Colour } from "../../ixfx/visual.js";
import Split from "./Split.js";
console.log(`asdf`);
Split([ `#editor`, `#data` ], {
  sizes: [ 50, 50 ],
  direction: `horizontal`,
});

Split([ `#plot`, `#stream` ], {
  sizes: [ 50, 50 ],
  direction: `vertical`,
});

type State = Readonly<{
  board: `puck` | `pico`,
  jsonWarning: boolean
  clearedWelcome: boolean
  p: Espruino.EspruinoDevice | undefined,
  frozen: boolean
}>

let state: State = Object.freeze({
  board: `puck`,
  jsonWarning: false,
  clearedWelcome: false,
  p: undefined,
  frozen: false,
});
const settings = Object.freeze({
  puckIntro: `
Puck.accelOn(12.5);
Puck.on('accel', (a) => {
  Bluetooth.println(JSON.stringify(a));
});`,
  picoIntro: `
setInterval(() => {
  const data = { x: analogRead(A5) };
  USB.println(JSON.stringify(data));
}, 500);`,
  log: Dom.log(`#log`, {
    capacity: 50,
    timestamp: true,
  }),
  plot: new Plot2.Plot(document.querySelector(`#plotCanvas`) as HTMLCanvasElement, {
    autoSize: true,
    axisStrokeColour: Colour.getCssVariable(`fg`),
    axisTextColour: Colour.getCssVariable(`fg`),
    legendTextColour: `white`
  }),
  txtCode: document.querySelector(`#txtCode`) as HTMLTextAreaElement,
  dlgHelp: document.querySelector(`#dlgHelp`) as HTMLDialogElement,
  selBoard: document.querySelector(`#board`) as HTMLSelectElement
});

const onConnected = (connected: boolean) => {
  const { plot } = settings;

  if (connected) {
    plot.clear();
    plot.frozen = false;
    document.querySelector(`#btnConnect`)?.setAttribute(`disabled`, `true`);
    document.querySelector(`#btnSend`)?.removeAttribute(`disabled`);
  } else {
    document.querySelector(`#btnSend`)?.setAttribute(`disabled`, `true`);
    document.querySelector(`#btnConnect`)?.removeAttribute(`disabled`);
  }
};

const onData = (event: IoDataEvent) => {
  const { log, plot } = settings;

  const data = event.data.trim(); // Remove line breaks etc
  console.log(data);
  if (!data.startsWith(`{`) || !data.endsWith(`}`)) {
    if (state.jsonWarning) {
      updateState({ jsonWarning: true });
    } else {
      console.warn(`Plotter expects JSON response. Got: ${ data }`);
      updateState({ jsonWarning: true });
    }
    log.log(data);
    return;
  }

  try {
    const d = JSON.parse(data);
    if (!state.frozen) {
      log.log(data);
      plot.plot(d);
      plot.update();
    }
  } catch (error) {
    console.warn(error);
  }
};

const logWelcome = () => {
  const { log } = settings;
  log.log(`eg: Bluetooth.println(JSON.stringify(v));`);
  log.log(`eg: let v =  { light: Puck.light() };`);
  log.log(
    `Once connected, tap 'Send' to upload code. Code should send back string-formatted JSON to be properly displayed in this playground.`
  );
  log.log(`Power on your Espruino, and tap 'Connect'.`);
};

const connect = async () => {
  const { log, selBoard } = settings;
  let p;

  const boardSel = selBoard.value;
  if (boardSel === `pico` || boardSel === `puck`) {
    updateState({ board: boardSel });
    localStorage.setItem(`board`, boardSel);
  }

  try {
    if (state.board === `puck`) {
      const p = await Espruino.connectBle();
      updateState({ p });
    } else if (state.board === `pico`) {
      const p = await Espruino.serial();
      updateState({ p });
    }

    if (!state.clearedWelcome) {
      log.clear();
      updateState({ clearedWelcome: true });
    }
  } catch (error) {
    console.error(error);
  }
};

const send = () => {
  const { p } = state;
  const { log, plot, txtCode } = settings;
  if (p === undefined) return; // No Espruino

  // @ts-ignore
  const code = txtCode.value.trim();
  const codeWithSuffix =
    code + (state.board === `puck` ? `NRF.on('disconnect',()=>reset());` : ``);
  console.log(code);

  try {
    plot.clear();
    p.writeScript(codeWithSuffix);
    localStorage.setItem(`last-${ state.board }`, code);
  } catch (error) {
    log.error(error);
  }
};

const setup = () => {
  const { log, plot, txtCode, dlgHelp, selBoard } = settings;

  const defaultBoard = localStorage.getItem(`board`);
  if (defaultBoard === `pico` || defaultBoard === `puck`) {
    selBoard.value = defaultBoard;
    updateState({ board: defaultBoard });
  }

  // Setup plotter
  plot.axisX.visible = false;
  plot.axisY.visible = false;

  // Setup UI
  Dom.Forms.textAreaKeyboard(txtCode);

  document.querySelector(`#btnClear`)?.addEventListener(`click`, () => {
    log.clear();
    plot.clear();
  });
  document.querySelector(`#btnHelp`)?.addEventListener(`click`, async (event) => {
    const contentElement = dlgHelp.querySelector(`section`);
    if (!contentElement) return;
    dlgHelp.showModal();
    try {
      let resp = await fetch(`README.md`);
      if (resp.ok) {
        const md = await resp.text();
        contentElement.innerHTML = snarkdown(md);
      } else {
        contentElement.innerHTML = `Could not load help :/`;
        console.log(resp);
      }
    } catch (error) {
      console.log(error);
      contentElement.innerHTML = `Could not load help :/`;
    }
  });
  document.querySelector(`#btnHelpClose`)?.addEventListener(`click`, (event) => {
    dlgHelp.close();
  });

  document.querySelector(`#btnFreeze`)?.addEventListener(`click`, () => {
    updateState({ frozen: !state.frozen });
  });
  document.querySelector(`#btnSend`)?.addEventListener(`click`, send);
  document.querySelector(`#txtCode`)?.addEventListener(`keyup`, event => {
    const keyEvent = event as KeyboardEvent;
    if (keyEvent.key === `Enter` && keyEvent.ctrlKey) {
      send();
    }
  });

  document.querySelector(`#btnConnect`)?.addEventListener(`click`, connect);
  onConnected(false);

  logWelcome();

  selBoard.addEventListener(`change`, (event) => {
    updateInitialCode();
  });
};
setup();
updateInitialCode();

function updateInitialCode() {
  const { txtCode, selBoard } = settings;

  const initialCode =
    selBoard.value === `pico` ? settings.picoIntro : settings.puckIntro;

  // Show last code
  const lastCode = localStorage.getItem(`last-${ state.board }`);
  txtCode.value = lastCode === null ? initialCode.trim() : lastCode;
}

/**
 * Update state
 */
function updateState(s: Partial<State>) {
  const previousEspruino = state.p;

  state = Object.freeze({
    ...state,
    ...s,
  });

  if (s.p) {
    if (previousEspruino) {
      previousEspruino.removeEventListener(`change`, onEspruinoChange);
      previousEspruino.removeEventListener(`data`, onData);
    }

    // Listen for events
    s.p.addEventListener(`change`, onEspruinoChange);
    s.p.addEventListener(`data`, onData);

    if (s.p.isConnected) onConnected(true);
  }
}

function onEspruinoChange(event: StateChangeEvent<any>) {
  const { log } = settings;
  log.log(`${ event.priorState } -> ${ event.newState }`);
  onConnected(event.newState === `connected`);
}

// Test
/*
setInterval(() => {
  const {log, plot} = settings;
  const d = {
    acc: {x: 6995, y: -3834, z: -1644},
    gyro: {x: -35, y: 102, z: 213 * Math.random()}
  }
  if (!plot.frozen) {
    log.log(d);
    plot.plot(d);
    plot.update();
  }
}, 100);
*/
