import {log, Forms} from "../../ixfx/dom.js"

const settings = Object.freeze({
  lastEl: document.querySelector(`#last`) as HTMLInputElement,
  log: log(`#log`, {timestamp: true})
});

const extract = (event: KeyboardEvent) => {
  // Pull out some fields from the KeyEvent
  const {altKey, metaKey, ctrlKey, shiftKey, key, code, repeat, type} = event;
  return {altKey, metaKey, ctrlKey, shiftKey, key, code, repeat, type};
};

const toString = (event: KeyboardEvent) => {
  const t = extract(event);
  return `{
    key: ${t.key},
    code: ${t.code},
    altKey: ${t.altKey},
    metaKey: ${t.metaKey},
    ctrlKey: ${t.ctrlKey},
    shiftKey: ${t.shiftKey},
    repeat: ${t.repeat},
    type: ${t.type}
  }`;
};

const setup = () => {
  const {log, lastEl} = settings;

  const chkKeydown = Forms.checkbox(`#evKeydown`);
  const chkKeyup = Forms.checkbox(`#evKeyup`);
  const chkKeypress = Forms.checkbox(`#evKeypress`);

  const handle = (event: KeyboardEvent) => {
    const s = toString(event);
    log.log(s.split(`\n`).join(``));
    lastEl.textContent = s;
  };

  document.addEventListener(`keydown`, (event) => {
    if (!chkKeydown.checked) return;
    handle(event);
  });

  document.addEventListener(`keyup`, (event) => {
    if (!chkKeyup.checked) return;
    handle(event);
  });

  document.addEventListener(`keypress`, (event) => {
    if (!chkKeypress.checked) return;
    handle(event);
  });

  document.querySelector(`#btnLogClear`)?.addEventListener(`click`, () => {
    log.clear();
  });

};
setup();