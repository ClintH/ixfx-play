import * as Circle from "./circle.js";
export * from './circle.js';
export const draw = (heads, drawing) => {
    for (const h of heads) {
        switch (h.kind) {
            case `circle`: {
                const c = h;
                Circle.draw(drawing, c);
            }
        }
    }
};
//# sourceMappingURL=index.js.map