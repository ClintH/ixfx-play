import * as Flow from 'ixfx/flow.js';
import { Envelopes } from 'ixfx/modulation.js';
import { PlotElement } from '@ixfx/components/charts/plot';
import * as Numbers from 'ixfx/numbers.js';
import { LitElement } from 'lit';
const plot = document.querySelector(`#plot`) as any as PlotElement;
plot.plot(0.4);
console.log(plot);