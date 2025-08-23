import { Espruino, IoEvents, StateChangeEvent } from "ixfx/io.js";
import { log } from "ixfx/dom.js";
import { forEach } from "ixfx/iterables.js";
import { Stacks } from "ixfx/collections.js";
import { sleep } from "ixfx/flow.js";

const settings = Object.freeze({
  log: log(`#log`, {
    css: `
    .recv { color: hsl(var(--hue-primary), 88%, 96%);}
    .meta { color: hsl(var(--hue-secondary), 0%, 76%);}
    `,
    reverse: true,
  }),
  txtInput: document.querySelector(`#txtInput`) as HTMLInputElement,
  selBoard: document.querySelector(`#board`) as HTMLInputElement
});

type State = Readonly<{
  board: `puck` | `pico`,
  espruino: Espruino.EspruinoDevice | undefined,
  history: Stacks.IStackMutable<string>,
  historyIndex: number
}>

let state: State = Object.freeze({
  board: `puck`,
  espruino: undefined,
  history: Stacks.mutable<string>(),
  historyIndex: 0,
});

const inputSel = () => {
  const { txtInput } = settings;
  txtInput.focus();
  txtInput.setSelectionRange(0, txtInput.value.length);
};

const inputSet = (what: string) => {
  const { txtInput } = settings;
  txtInput.value = what;
  txtInput.setSelectionRange(0, txtInput.value.length);
};

const setDisconnected = (disconnected: boolean) => {
  const { txtInput } = settings;
  if (disconnected) {
    document.body.classList.add(`disconnected`);
    txtInput.setAttribute(`disabled`, `true`);
    document.querySelector(`#btnSend`)?.setAttribute(`disabled`, `true`);
    document.querySelector(`#btnConnect`)?.removeAttribute(`disabled`);
    document.querySelector(`#btnDisconnect`)?.setAttribute(`disabled`, `true`);
  } else {
    document.body.classList.remove(`disconnected`);
    txtInput.removeAttribute(`disabled`);
    document.querySelector(`#btnSend`)?.removeAttribute(`disabled`);
    document.querySelector(`#btnConnect`)?.setAttribute(`disabled`, `true`);
    document.querySelector(`#btnDisconnect`)?.removeAttribute(`disabled`);
    inputSel();
  }
};

const send = async (what?: string) => {
  const { log, txtInput } = settings;
  const { espruino, history } = state;
  if (espruino === undefined) {
    console.warn(`No Espruino instance`);
    return;
  }
  if (what === undefined) what = txtInput.value;
  if (what.endsWith(`;`)) what = what.slice(0, Math.max(0, what.length - 1));

  // Only add to history if it is different
  if (history.peek !== what) history.push(what);
  updateState({
    history,
    historyIndex: history.data.length - 1,
  });
  log.log(`> ${ what }`)?.classList.add(`sent`);

  try {
    const result = await espruino.eval(what, {
      timeoutMs: 2000,
      assumeExclusive: true,
      debug: false,
    });
    log.log(`< ${ result }`)?.classList.add(`recv`);
  } catch (error) {
    console.log(error);
    log.error(error);
  }
  inputSel();
};

document.querySelector(`#btnDemo`)?.addEventListener(`click`, async () => {
  const { log } = settings;
  const { espruino } = state;
  const demosPuck = `
  // https://www.espruino.com/Puck.js
  // LED on/off
  LED1.set()
  LED1.reset()
  // Read button state
  BTN.read()
  // Read magnetometer
  Puck.mag()
  // Read accelerometer
  Puck.accel()
  // Read light sensor
  Puck.light()
  // Read temperature
  E.getTemperature()`;

  const demosPico = `
  // http://www.espruino.com/Pico
  // LED on/off
  LED1.set()
  LED1.reset()
  // Read analog pin 5
  analogRead(A5)
  // Read button state
  digitalRead(BTN)
  `;

  const demos = state.board === `pico` ? demosPico : demosPuck;

  const connected = !(espruino === undefined || !espruino.isConnected);
  if (!connected) {
    log.log(`// Connect to an Espruino to run this for real`);
  }

  const run = async (demo: string) => {
    if (!demo) return;;
    demo = demo.trim();
    if (
      demo.startsWith(`//`) ||
      espruino === undefined ||
      !espruino.isConnected
    ) {
      const element = log.log(demo);
      element?.classList.add(`meta`);
    } else {
      return send(demo + `\n`);
      //await sleep(100);
    }
    return;
  }

  for await (const demo of demos.trim().split(`\n`)) {
    await run(demo);
    await sleep(connected ? 1000 : 400);
  }
  // await forEach(
  //   demos.trim().split(`\n`),
  //   run,
  //   { interval: connected ? 1000 : 400 }
  // );
});

document.querySelector(`#btnSend`)?.addEventListener(`click`, () => send());

document.querySelector(`#btnDisconnect`)?.addEventListener(`click`, () => {
  const { espruino } = state;
  if (espruino === undefined) return;
  espruino.disconnect();
});

document.querySelector(`#btnConnect`)?.addEventListener(`click`, async () => {
  const { log, selBoard } = settings;

  const boardSel = selBoard.value;
  if (boardSel === `pico` || boardSel === `puck`) {
    updateState({ board: boardSel });
    localStorage.setItem(`board`, boardSel);
  }

  try {
    if (state.board === `puck`) {
      const espruino = await Espruino.connectBle({ debug: false });
      updateState({ espruino });
    } else if (state.board === `pico`) {
      const espruino = await Espruino.serial();
      updateState({ espruino });
    }
  } catch (error) {
    log.error(error);
  }
});

const setup = () => {
  const { txtInput, selBoard } = settings;
  setDisconnected(true);

  txtInput.addEventListener(`keyup`, (event) => {
    const { history } = state;
    let { historyIndex } = state;
    if (event.key === `ArrowUp` || event.key === `ArrowDown`) {
      if (event.key === `ArrowUp`) {
        historyIndex = Math.max(0, historyIndex - 1);
      } else if (event.key === `ArrowDown`) {
        historyIndex = Math.min(history.data.length - 1, historyIndex + 1);
      }
      updateState({ historyIndex });
      inputSet(history.data[ historyIndex ]);
      event.preventDefault();
    } else if (event.key === `Enter`) {
      send();
      event.preventDefault();
    }
  });

  const defaultBoard = localStorage.getItem(`board`);
  if (defaultBoard === `pico` || defaultBoard === `puck`) {
    selBoard.value = defaultBoard;
    updateState({ board: defaultBoard });
  }
};
setup();

function onEspruinoChange(event: StateChangeEvent<any>) {
  const { log } = settings;

  log.log(`State: ${ event.newState }`)?.classList.add(`meta`);
  if (event.newState === `connected`) {
    setDisconnected(false);
  } else {
    setDisconnected(true);
  }
}
/**
 * Update state
 */
function updateState(s: Partial<State>) {
  const previousEspruino = state.espruino;

  state = Object.freeze({
    ...state,
    ...s,
  });

  if (s.espruino) {
    if (previousEspruino) {
      previousEspruino.removeEventListener(`change`, onEspruinoChange);
    }

    s.espruino.addEventListener(`change`, onEspruinoChange);
    setDisconnected(false);
  }
}
