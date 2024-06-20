import * as Visuals from '../../ixfx/visual.js';
import { scaler } from '../../ixfx/data.js';
import { Oscillators, perSecond } from '../../ixfx/modulation.js';
import { Points, Polar, degreeToRadian, Line, Lines, Point } from '../../ixfx/geometry.js';

export type CanvasSettings = {
  rpm: number
  rpmMax: number
  bgColour: Visuals.Colour.Hsl
  fade: number
}

export type DrawSettings = {
  freq: number
  hideArm: boolean
}

export type ArmSettings = {
  lengthRange: [ min: number, max: number ]
  angleRange: number
  angle: number
  origin: Point
  thickness: number
}

export type ModulateSettings = {
  armLengthFreq: number
  armAngleFreq: number
  drawParam1Freq: number
}

export type State = {
  canvasRotationRadian: number
  armAngle: number
  armEndAbsolute: Point
  scaleBy: number
  lastDraw: number
}

export type SketchSettings = {
  arm: ArmSettings
  canvas: CanvasSettings
  draw: DrawSettings
  mod: ModulateSettings
}