import * as C from "@ixfx/components";
C.init();
import { PlotElement } from "@ixfx/components/charts/plot";
import { movingAverage } from "ixfx/numbers.js";
import { Colour } from "ixfx/visual.js";
import * as M from 'meyda';

type Field = {
  title: string
  id: string
  showAs?: `decimal` | `integer` | `float32`,
  group: `time` | `spectral` | `perceptual`
}

type ArrayFieldState = {
  id: string
  type: `array`
}

type NumberFieldState = {
  type: `number`,
  averager: (v: number) => number
  id: string
  range: {
    min: number, max: number
  }
  lastValue: number
  lastAverage: number
}
type FieldState = NumberFieldState | ArrayFieldState;

const settings = {
  movingAverageSamples: 30,
  fields: {
    rms: { title: `RMS`, group: `time`, id: `rms`, showAs: `decimal` },
    zcr: { title: `Zero crossing`, showAs: `integer`, group: `time`, id: `zcr` },
    energy: { title: `Energy`, showAs: `integer`, group: `time`, id: `energy` },
    //amplitudeSpectrum: { title: `Amplitude Spectrum`, group: `spectral`, id: `amplitudeSpectrum` },
    powerSpectrum: { title: `Power Spectrum`, group: `spectral`, id: `powerSpectrum`, showAs: `float32` },
    spectralCentroid: { title: `Centroid`, group: `spectral`, showAs: `integer`, id: `spectralCentroid` },
    spectralFlatness: { title: `Flatness`, group: `spectral`, showAs: `decimal`, id: `spectralFlatness` },
    spectralFlux: { title: `Flux`, group: `spectral`, showAs: `decimal`, id: `spectralFlux` },
    spectralSlope: { title: `Slope`, group: `spectral`, showAs: `decimal`, id: `spectralSlope` },
    spectralRolloff: { title: `Rolloff`, group: `spectral`, showAs: `integer`, id: `spectralRolloff` },
    spectralSpread: { title: `Spread`, group: `spectral`, showAs: `integer`, id: `spectralSpread` },
    spectralSkewness: { title: `Skewness`, group: `spectral`, showAs: `decimal`, id: `spectralSkewness` },
    spectralKurtosis: { title: `Kurtosis`, group: `spectral`, showAs: `integer`, id: `spectralKurtosis` },
    //spectralCrest: { title: `Crest`, group: `spectral`, showAs: `integer`, id: `spectralCrest` },
    chroma: { title: `Chroma`, group: `spectral`, showAs: `float32`, id: `chroma` },
    loudness: { title: `Loudness`, group: `perceptual`, showAs: `float32`, id: `loudness` },
    perceptualSharpness: { title: `Perceptual Sharpness`, group: `perceptual`, showAs: `decimal`, id: `perceptualSharpness` },
    mfcc: { title: `Mel-Frequency Cepstral Coefficients`, group: `perceptual`, showAs: `float32`, id: `mfcc` },


  } as Record<string, Field>,
  fgColour: Colour.resolveCss(`--fg`)
}

const fieldStates = new Map<string, FieldState>();


const onData = (event: M.MeydaFeaturesObject) => {
  const { fields } = settings;
  for (const [ key, value ] of Object.entries(event)) {
    const f = (fields as any)[ key ] as Field | undefined;
    if (!f) continue;
    let currentState = fieldStates.get(key);
    if (typeof value === `object` && f.id === `loudness`) {
      handleValue(value.specific, f, currentState);

    } else {
      handleValue(value, f, currentState);

    }
  }
};

function createNumberFieldState(id: string): NumberFieldState {
  return {
    id,
    type: `number`,
    averager: movingAverage(settings.movingAverageSamples),
    range: { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER },
    lastValue: 0,
    lastAverage: 0
  }
}

function createArrayFieldState(id: string): ArrayFieldState {
  return {
    id,
    type: `array`
  }
}

function createFieldState(field: Field): FieldState {
  let showAs = field.showAs;
  if (!showAs) {
    if (field.group === `spectral`) showAs = `float32`;
    showAs = `decimal`;
  }
  if (showAs === `float32`) return createArrayFieldState(field.id);
  return createNumberFieldState(field.id);
}

function updateNumber(s: FieldState, v: number) {
  if (s.type === `number`) {
    if (Number.isNaN(v)) return s;
    if (!Number.isFinite(v)) return s;

    const avg = s.averager(v);
    s.lastAverage = avg;
    s.lastValue = v;
    s.range = {
      max: Math.max(s.range.max, v),
      min: Math.min(s.range.min, v)
    }
  }
  return s;
}

function handleValue(v: Float32Array | number | number[], field: Field, fieldState: FieldState | undefined) {
  if (!fieldState) {
    fieldState = createFieldState(field);
  }
  const { sectionEl, plotEl, statsEl } = getElementsForField(field);

  if (!sectionEl) return;
  if (sectionEl.classList.contains(`frozen`)) return;

  if (typeof v === `number`) {
    updateNumber(fieldState, v);
  }

  const showAs = field.showAs ?? `float32`;
  if (plotEl) {
    if (showAs === `float32`) {
      let arr: number[];
      if (v instanceof Float32Array) {
        arr = Array.from(v);
      } else {
        arr = v as number[];
      }
      plotEl.clearData();
      //plotEl.plotSeries(arr, ``);
      plotEl.setRawValues(arr, ``, true);
    } else {
      if (typeof v === `number` && !Number.isNaN(v) && Number.isFinite(v)) {
        plotEl.appendRawValues(v, ``, true);
      }
    }
  } else {
    console.warn(`No plot element for: ${ field.id }`);
  }

  if (statsEl && fieldState) {
    statsEl.innerHTML = getStatsForField(fieldState, field);
  }
  fieldStates.set(field.id, fieldState);

}

const formatFloat = (v: number) => v.toPrecision(2);
const formatInteger = (v: number) => Math.floor(v).toString();

function getElementsForField(field: Field) {
  const sectionEl = document.querySelector(`#section-${ field.id }`);
  if (!sectionEl) {
    console.warn(`Section element not found: #section-${ field.id }`);
    return { sectionEl: undefined, plotEl: undefined, statsEl: undefined }
  }
  const plotEl = sectionEl.querySelector(`ixfx-plot-element`);
  const statsEl = sectionEl.querySelector(`.stats`);
  return { sectionEl, plotEl, statsEl };
}

function getStatsForField(fieldState: FieldState, field: Field): string {
  const f = field.showAs === `integer` ? formatInteger : formatFloat;
  if (fieldState.type === `number`) {
    const range = fieldState.range;
    return `${ f(range.min) } - ${ f(range.max) }<br />Avg: ${ f(fieldState.lastAverage) } <br />Value: ${ f(fieldState.lastValue) }`
  }
  return ``;
}

// function handleTimeDomain(v: number, field: Field, fieldState: FieldState | undefined) {
//   if (!fieldState) {
//     fieldState = createFieldState(field);
//   }
//   const { sectionEl, plotEl, statsEl } = getElementsForField(field);
//   if (!sectionEl) return;
//   if (sectionEl.classList.contains(`frozen`)) return;

//   fieldState = updateNumber(fieldState, v);

//   if (plotEl) {
//     const plot = plotEl as PlotElement;
//     plot.plot(v);
//     plot.draw();
//   }


//   if (statsEl && fieldState) {
//     statsEl.innerHTML = getStatsForField(fieldState, field);
//   }

//   fieldStates.set(field.id, fieldState);
// }

async function initAudio() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const a = await navigator.mediaDevices.getUserMedia({ audio: true });
  const ctx = new AudioContext();

  const source = ctx.createMediaStreamSource(a);
  const m = M.default.createMeydaAnalyzer({
    audioContext: ctx,
    source,
    bufferSize: 512,
    featureExtractors: [ ...Object.keys(settings.fields) ], //[ `rms`, `zcr`, `energy`, `powerSpectrum`, `spectralCentroid`, `spectralFlatness`, `spectralSlope`, `spectralRolloff`, `spectralSpread`, `spectralSkewness`, `spectralKurtosis`, `chroma` ],
    inputs: 2,
    callback: onData
  });
  m.start();
  document.querySelector(`#btnStart`)?.remove();
};


// function setupTimeDomain() {
//   const container = document.querySelector(`#time-domain .container`);
//   for (const b of enumerateTimeDomainFields()) {
//     const s = document.createElement(`section`);
//     const h = document.createElement(`h1`);
//     h.innerText = b.id;
//     const h2 = document.createElement(`h2`);
//     h2.innerText = b.title;
//     const p = document.createElement(`ixfx-plot-element`);
//     p.colourGenerator = (_series) => settings.fgColour;

//     p.id = `plot-${ b.id }`;
//     s.id = `section-${ b.id }`;
//     p.hideLegend = true;

//     const stats = document.createElement(`div`);
//     stats.classList.add(`stats`);
//     stats.innerHTML = `Min: ? Max: ? Average: ?`;
//     s.append(h);
//     s.append(h2);
//     s.append(p);
//     s.append(stats);

//     s.addEventListener(`click`, () => {
//       s.classList.toggle(`frozen`);
//     })
//     container?.append(s);
//   }
// }

function setupContainer(fields: Generator<Field>, parentElQuery: string) {
  const container = document.querySelector(`${ parentElQuery } .container`);
  for (const b of fields) {
    const s = document.createElement(`section`);
    const h = document.createElement(`h1`);
    h.innerText = b.id;
    const h2 = document.createElement(`h2`);
    h2.innerText = b.title;
    const p = document.createElement(`ixfx-plot-element`);
    p.setDrawDebounce(40);
    p.primaryAxis.bounds = `auto-persistent`;

    p.seriesColourGenerate = (_series) => settings.fgColour;
    const showAs = b.showAs ?? `float32`;
    if (showAs === `float32`) {
      //p.streaming = false;
      p.renderStyle = `bar`;

    } else {
      p.setSeriesFormatting(``, {
        dot: {
          radius: 3, gapWidth: 0
        }
      })
      p.seriesDefault = {
        limit: 100,
      };
    }
    p.id = `plot-${ b.id }`;
    s.id = `section-${ b.id }`;
    p.hideLegend = true;

    s.append(h);
    s.append(h2);
    s.append(p);
    if (showAs !== `float32`) {
      const stats = document.createElement(`div`);
      stats.classList.add(`stats`);
      stats.innerHTML = `Min: ? Max: ? Average: ?`;

      s.append(stats);
    }

    s.addEventListener(`click`, () => {
      s.classList.toggle(`frozen`);
    })
    container?.append(s);
  }

}

// function addStates(states: TimeDomainFieldState[]) {
//   let current = state.timeDomainFields;
//   let newStates = [];
//   for (const c of current) {
//     if (states.find(s => s.id === c.id)) {
//       continue;
//     }
//     newStates.push(c);
//   }
//   for (const s of states) {
//     newStates.push(s);
//   }
//   updateState({ timeDomainFields: newStates });
// }

function setup() {
  setupContainer(enumerateSpectralFields(), `#spectral`);
  setupContainer(enumerateTimeDomainFields(), `#time-domain`);
  setupContainer(enumeratePerceptualFields(), `#perceptual`);

  document.querySelector(`#btnStart`)?.addEventListener(`click`, (event) => {
    initAudio();
    (event.target as HTMLElement).remove();

  });

  document.querySelector(`#btnReset`)?.addEventListener(`click`, (event) => {
    fieldStates.clear();
    for (const el of document.querySelectorAll(`ixfx-plot-element`)) {
      el.clear();
    }
  });


  document.querySelector(`#btnFreeze`)?.addEventListener(`click`, (event) => {
    fieldStates.clear();
    for (const el of document.querySelectorAll(`section`)) {
      el.classList.toggle(`frozen`);

    }
  });

  document.querySelector(`#plotSpeed`)?.addEventListener(`change`, event => {
    const speed = Math.floor((event.target as HTMLInputElement).valueAsNumber);
    for (const el of document.querySelectorAll(`ixfx-plot-element`)) {
      el.setDrawDebounce(speed);
    }
    console.log(`Speed: ${ speed }`);
  })
}

// function* enumeratePlots(group:`time`|`spectral`|`all`) {
//   for (const b of settings.timeDomain) {
//     const p = document.querySelector(`ixfx-plot-element`) as PlotElement;
//     yield p;
//   }
// }

function* enumeratePerceptualFields(): Generator<Field> {
  for (const [ key, value ] of Object.entries(settings.fields)) {
    if (value.group === `perceptual`) yield value;
  }
}

function* enumerateTimeDomainFields(): Generator<Field> {
  for (const [ key, value ] of Object.entries(settings.fields)) {
    if (value.group === `time`) yield value;
  }
}

function* enumerateSpectralFields(): Generator<Field> {
  for (const [ key, value ] of Object.entries(settings.fields)) {
    if (value.group === `spectral`) yield value;
  }
}

setup();
initAudio();

// function updateState(s: Partial<State>) {

//   state = Object.freeze({
//     ...state,
//     ...s,
//   });
// }
