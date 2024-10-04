/* eslint-disable indent */
import * as Geo from '../../ixfx/geometry.js';
import { Grids } from '../../ixfx/geometry.js';
import { Draw } from './draw.js';
import * as Iter from '../../ixfx/iterables.js'
import * as Rx from '../../ixfx/rx.js';


export const visitPanel = (grid: Geo.Grid, drawer: Draw) => {
  let startCell = { x: 0, y: 0 };


  let rxForm: ReturnType<typeof Rx.From.domForm>;

  let unsub = () => {}

  const visit = async () => {
    if (drawer) {
      drawer.clearVisited();
    }

    if (iteratorController) {
      iteratorController.restart();
    }
  }

  const createIterable = () => {
    const data = rxForm.last();
    const logic = data[ `visit-type` ];
    const reversed = data[ `reverse` ];
    const visitLogic = Grids.Visit.create(logic, {
      start: startCell,
      boundsWrap: `undefined`,
      reversed
    });
    const iter = visitLogic(grid);
    return iter;
  }

  let iteratorController = Iter.iteratorController({
    delay: 50,
    iterator: () => createIterable(),
    onValue: (cell) => {
      if (drawer) {
        drawer.addVisited(cell);
      }
      return true;
    }
  })

  const mount = (parent: HTMLElement) => {
    parent.innerHTML = `
      <form>
        <label for="visit-type">Logic</label>
        <select name="visit-type" id="visit-type">
          <option>row</option>
          <option>random</option>
          <option>random-contiguous</option>
          <option>neighbours</option>
          <option>column</option>
          <option>breadth</option>
          <option>depth</option>
        </select>
        
        <label for="reverse">Reverse</label>
        <input name="reverse" type="checkbox" value="true" id="reverse">
      </form>
      `

    rxForm = Rx.From.domForm(`form`);
    unsub = rxForm.onValue(value => {
      visit();
    });
    // unsub = Rx.From.merged(
    //   Rx.From.eventTrigger(`#visit-type`, `change`),
    // ).onValue(value => {
    //   visit();
    // })
  }

  const notify = (name: string, args: any) => {
    switch (name) {
      case `click`: {
        if (!args) args = { x: 0, y: 0 };
        startCell = args;
        visit();
        break;
      }
      default: {
        console.warn(`visitPanel.notify: ${ name }`);
      }
    }
  }
  return {
    id: `visit`,
    label: `Visit`,
    dismount: () => {
      iteratorController.cancel();
      unsub();
    },
    mount,
    notify
  }
}
