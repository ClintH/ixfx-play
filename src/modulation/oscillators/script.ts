import * as Flow from '@ixfx/flow';
import { Envelopes } from '@ixfx/modulation';
import { PlotElement } from '@ixfx/components/charts/plot';
import * as Numbers from '@ixfx/numbers';
import { LitElement } from 'lit';
const plot = document.querySelector(`#plot`) as any as PlotElement;
plot.plot(0.4);
console.log(plot);