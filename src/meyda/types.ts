export type Field = {
  title: string
  id: string
  showAs?: `decimal` | `integer` | `float32`,
  group: `time` | `spectral` | `perceptual`
}

export type ArrayFieldState = {
  id: string
  type: `array`
}

export type NumberFieldState = {
  type: `number`,
  averager: (v: number) => number
  id: string
  range: {
    min: number, max: number
  }
  lastValue: number
  lastAverage: number
}
export type FieldState = NumberFieldState | ArrayFieldState;
