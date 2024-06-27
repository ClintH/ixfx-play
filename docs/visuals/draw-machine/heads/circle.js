export const draw = (d, c) => {
    d.dot(c, {
        radius: c.radius,
        fillStyle: `hsl(${c.hue * 360},100%,60%)`
    });
};
//# sourceMappingURL=circle.js.map