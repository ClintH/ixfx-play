import { Points, Lines } from '../../ixfx/geometry.js';
import * as Modulation from '../../ixfx/modulation.js';
import { frequencyTimer } from "../../ixfx/flow.js";
import { scale, wrap } from "../../ixfx/data.js";
const angleComputer = (settings) => {
    const { angleMin, angleMax } = settings;
    const sine = Modulation.Oscillators.sine(frequencyTimer(0.002));
    return () => {
        const r = sine.next();
        if (!r.value)
            return 0;
        return scale(r.value, 0, 1, angleMin, angleMax);
    };
};
const fromGenerator = (gen, offset = 0) => {
    return () => {
        const r = gen.next();
        if (!r.value)
            return offset;
        return wrap(r.value + offset);
    };
};
const lengthComputer = (settings) => {
    const { lengthMin, lengthMax } = settings;
    const sine = Modulation.Oscillators.sine(frequencyTimer(0.1));
    return () => {
        //return lengthMax;
        const r = sine.next();
        if (!r.value)
            return 0;
        return scale(r.value, 0, 1, lengthMin, lengthMax);
    };
};
const createUpdater = (line) => {
    const settings = line.settings;
    const compute = {
        angle: angleComputer(settings),
        length: lengthComputer(settings),
        hue: fromGenerator(Modulation.Oscillators.sine(0.01))
    };
    return (state, scaler) => {
        let s = {
            angle: compute.angle(),
            length: scaler.size(compute.length()),
            hue: compute.hue(),
            origin: scaler.pos(state.origin)
        };
        const { a, b } = Lines.fromPivot(s.origin, s.length, s.angle, settings.pivot);
        return {
            ...state, lineA: a, lineB: b, hue: s.hue
        };
    };
};
const getHeads = (line) => {
    const { drawHeads } = line.settings;
    const s = line.state;
    const a = s.lineA;
    const b = s.lineB;
    const heads = [];
    for (let index = 0; index < drawHeads; index++) {
        let position = index * (1 / (drawHeads - 1));
        if (Number.isNaN(position))
            position = 0;
        const pos = Lines.interpolate(position, a, b);
        const hue = wrap(s.hue + (s.hue * position));
        heads.push({ kind: `circle`, position, hue, radius: 10, ...pos });
    }
    return heads;
};
export const draw = (context, line, scaler) => {
    const { state, settings } = line;
    const { lineA, lineB } = state;
    context.save();
    context.strokeStyle = settings.strokeStyle;
    context.lineCap = `round`;
    context.lineWidth = settings.lineWidth;
    context.beginPath();
    context.moveTo(lineA.x, lineA.y);
    context.lineTo(lineB.x, lineB.y);
    context.stroke();
    context.closePath();
    context.restore();
};
// const drawHead = (drawing: D.Drawing, line: LineThingData, scaler: ThingScaler) => {
//   const { heads } = line.state;
//   drawHeads(heads, drawing);
//   //context.filter = `blur(10px)`;
//   // for (const h of heads) {
//   //   D.drawCircle(context, h, h.radius, `hsla(${ h.hue * 360 },50%,50%,0.8)`);
//   // }
// }
export const create = () => {
    const data = {
        type: `line`,
        state: {
            origin: {
                x: 0.5,
                y: 0.5,
            },
            lineA: Points.Empty,
            lineB: Points.Empty,
            angle: 0,
            length: 0.4,
            hue: 0
        },
        settings: {
            lineWidth: 10,
            pivot: 0.3,
            strokeStyle: `black`,
            angleMax: 0,
            angleMin: 90,
            lengthMax: 0.8,
            lengthMin: 0.01,
            drawHeads: 2,
            headStyle: `circle`
        }
    };
    return {
        ...data,
        draw,
        getHeads,
        createStateComputer: createUpdater
    };
};
//# sourceMappingURL=line-thing.js.map