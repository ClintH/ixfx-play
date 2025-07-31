import { pc, setHtml } from "../../util.js";
import { round } from '@ixfx/numbers';
import { Plot } from '@ixfx/visual';
import { scaler } from "@ixfx/numbers";

const settings = {
  tiltScale: scaler(-90, 90, -1, 1),
  tiltPlot: Plot.BipolarView.init(`#plotTilt`, {
    yAxisBottomNegative: false,
    bgColour: `transparent`,
    axisColour: `greenyellow`,
    whiskerColour: `white`,
    labelColour: `--fg`,
    displayLastValues: 50,
  }),
  rounder: round(2),
  penEl: document.querySelector(`#penArea`) as HTMLElement,
  helpEl: document.querySelector(`#helpArea`) as HTMLElement,
  eventKeys: `width height pointerType tiltX tiltY twist tangentialPressure pointerId x y movementX movementY`.split(` `)
} as const;

const updatePointer = (event: PointerEvent) => {
  const { eventKeys, rounder, tiltPlot, tiltScale } = settings;
  const { shiftKey, metaKey, ctrlKey } = event;

  for (const k of eventKeys) {
    const element = document.querySelector(`#${ k }`);
    if (element !== null) {
      // @ts-ignore
      const v = event[ k ];
      element.textContent = typeof v === `number` ? rounder(v).toString() : v;
    }
  }

  const keys = [];
  if (shiftKey) keys.push(`shift`);
  if (metaKey) keys.push(`meta`);
  if (ctrlKey) keys.push(`ctrl`);
  const keyString = keys.map(k => `<kbd>${ k }</kbd>`).join(` `);


  setHtml(`keys`, keyString);
  setHtml(`pressure`, pc(event.pressure));

  // @ts-ignore
  const altAngle = event.altitudeAngle ?? 0;
  // @ts-ignore
  const aziAngle = event.azimuthAngle ?? 0;
  setHtml(`altitudeAngle`, rounder(altAngle));
  setHtml(`azimuthAngle`, rounder(aziAngle));
  tiltPlot(tiltScale(event.tiltX), tiltScale(event.tiltY));
};

const setup = () => {
  const { penEl, helpEl } = settings;
  if (!penEl) return;


  penEl.addEventListener(`pointermove`, event => {
    updatePointer(event);
  });

  penEl.addEventListener(`pointerenter`, event => {});

  penEl.addEventListener(`pointerleave`, event => {});

  penEl.addEventListener(`pointercancel`, event => {});

  penEl.addEventListener(`pointerover`, event => {});

  penEl.addEventListener(`pointerdown`, event => {});

  penEl.addEventListener(`pointerup`, event => {});

  document.querySelector(`#btnHelpClose`)?.addEventListener(`click`, () => {
    if (helpEl) helpEl.style.display = `none`;
  });

  document.querySelector(`#btnHelpShow`)?.addEventListener(`click`, () => {
    if (helpEl) helpEl.style.display = `block`;
  });

};
setup();