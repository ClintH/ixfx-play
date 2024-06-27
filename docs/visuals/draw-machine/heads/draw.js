export const drawHeads = (heads, drawing) => {
    for (const h of heads) {
        switch (h.kind) {
            case `circle`: {
                const c = h;
                drawing.circle(c, c.radius, `hsla(${c.hue * 360},50%,50%,0.8)`);
            }
        }
    }
};
//# sourceMappingURL=draw.js.map