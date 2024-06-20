import * as Visuals from '../../ixfx/visual.js';
import { scaler } from '../../ixfx/data.js';
import { Oscillators, perSecond } from '../../ixfx/modulation.js';
import { degreeToRadian } from '../../ixfx/geometry.js';
import { CanvasSettings, DrawSettings, ArmSettings, ModulateSettings, SketchSettings } from './types.js';

const sketchSettingsDefault: SketchSettings = {
  canvas: {
    rpm: 0.01,
    rpmMax: 120,
    bgColour: Visuals.Colour.toHsl(`pink`),
    fade: 0.1
  },
  draw: {
    freq: 200,
    hideArm: false
  },
  arm: {
    lengthRange: [ 0.05, 0.5 ],
    angleRange: 0,
    angle: -90, // -135
    origin: { x: 0.5, y: 1 },
    thickness: 20
  },
  mod: {
    armLengthFreq: 0.1,
    armAngleFreq: 0.15,
    drawParam1Freq: 0.1
  }
}

// const sketchSettingsValidate = (settings: SketchSettings): SketchSettings => {
//   let { canvas, draw, arm, mod } = settings;
//   return { canvas, draw, arm, mod };
// }

export const load = () => {
  return sketchSettingsDefault;
}

