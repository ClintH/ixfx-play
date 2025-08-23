/* eslint-disable indent */
import { Grids, Points } from 'ixfx/geometry.js';
import { Draw } from './draw';
import * as Rx from 'ixfx/rx.js';
import { RxUi } from 'ixfx/ui.js';

export const linePanel = (grid: Grids.GridVisual, drawer: Draw) => {

  let rxForm: ReturnType<typeof RxUi.domForm>;

  let aCell = { x: 0, y: 0 };
  let bCell = { x: 0, y: 0 };

  let lastSetA = false;
  let unsub = () => {}

  const updateFromUi = (data: any) => {
    const aXy = Points.fromString(data[ `a-xy` ] ?? `0,0`);
    const bXy = Points.fromString(data[ `b-xy` ] ?? `0,0`);

    if (Points.isNaN(aXy) || Points.isNaN(bXy)) return;
    aCell = aXy;
    bCell = bXy;
  }

  const go = () => {
    if (drawer) {
      drawer.clearVisited();
    }

    const line = Grids.getLine(aCell, bCell);
    for (const cell of line) {
      drawer.addVisited(cell);
    }
  }

  const mount = (parent: HTMLElement) => {
    parent.innerHTML = `
      <form>
        <label for="a-xy">A (x,y)</label>
        <input id="a-xy" type="text" name="a-xy" value="2,6">
        
        <label for="b-xy">B (x,y)</label>
        <input id="a-xy" type="text" name="b-xy" value="7,2">
        
      <form>
      `
    //const formEl = /** @type HTMLFormElement */(parent.querySelector(`form`));
    // unsub = Rx.From.merged(
    //   Rx.From.eventTrigger(formEl, `change`)
    // ).onValue(value => {
    //   updateFromUi();
    // })

    //getFormData = () => new FormData(formEl);
    rxForm = RxUi.domForm(`form`);
    unsub = rxForm.onValue(value => {
      updateFromUi(value);
      go();
    });
    updateFromUi(rxForm.last());
    go();
  }

  const notify = (name: string, args: any) => {
    switch (name) {
      case `click`: {
        if (!args) args = { x: 0, y: 0 };
        if (lastSetA) {
          bCell = args;
          rxForm.setNamedValue(`b-xy`, `${ bCell.x },${ bCell.y }`);
        } else {
          aCell = args;
          rxForm.setNamedValue(`a-xy`, `${ aCell.x },${ aCell.y }`);
        }
        lastSetA = !lastSetA;
        go();
        break;
      }
      default: {
        console.warn(`visitPanel.notify: ${ name }`);
      }
    }
  }

  const ret = {
    id: `line`,
    label: `Line`,
    dismount: () => {
      unsub();
    },
    mount,
    notify
  }
  return ret;
}
