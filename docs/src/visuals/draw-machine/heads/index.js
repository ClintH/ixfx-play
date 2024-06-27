export * from './circle.js';
export const draw = (heads, drawing) => {
    for (const h of heads) {
        switch (h.kind) {
            case `circle`: {
                const c = h;
                drawing.circle(c, c.radius, `hsla(${c.hue * 360},50%,50%,0.8)`);
            }
        }
    }
};
//# sourceMappingURL=index.js.map