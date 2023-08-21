import { pc, setHtml } from "../../util.js";
import { round } from '../../ixfx/numbers.js';
const settings = {
    rounder: round(2),
    penEl: document.getElementById(`penArea`),
    helpEl: document.getElementById(`helpArea`),
    eventKeys: `width height pointerType tiltX tiltY twist tangentialPressure pointerId x y movementX movementY`.split(` `)
};
const updatePointer = (ev) => {
    const { eventKeys, rounder } = settings;
    const { shiftKey, metaKey, ctrlKey } = ev;
    eventKeys.forEach(k => {
        const el = document.getElementById(k);
        if (el !== null) {
            // @ts-ignore
            const v = ev[k];
            if (typeof v === `number`) {
                el.innerText = rounder(v).toString();
            }
            else {
                el.innerText = v;
            }
        }
    });
    const keys = [];
    if (shiftKey)
        keys.push(`shift`);
    if (metaKey)
        keys.push(`meta`);
    if (ctrlKey)
        keys.push(`ctrl`);
    const keyStr = keys.map(k => `<kbd>${k}</kbd>`).join(` `);
    setHtml(`keys`, keyStr);
    setHtml(`pressure`, pc(ev.pressure));
    // @ts-ignore
    const altAngle = ev.altitudeAngle ?? 0;
    // @ts-ignore
    const aziAngle = ev.azimuthAngle ?? 0;
    setHtml(`altitudeAngle`, rounder(altAngle));
    setHtml(`azimuthAngle`, rounder(aziAngle));
};
const setup = () => {
    const { penEl, helpEl } = settings;
    if (!penEl)
        return;
    penEl.addEventListener(`pointermove`, ev => {
        updatePointer(ev);
    });
    penEl.addEventListener(`pointerenter`, ev => {
    });
    penEl.addEventListener(`pointerleave`, ev => {
    });
    penEl.addEventListener(`pointercancel`, ev => {
    });
    penEl.addEventListener(`pointerover`, ev => {
    });
    penEl.addEventListener(`pointerdown`, ev => {
    });
    penEl.addEventListener(`pointerup`, ev => {
    });
    document.getElementById(`btnHelpClose`)?.addEventListener(`click`, () => {
        if (helpEl)
            helpEl.style.display = `none`;
    });
    document.getElementById(`btnHelpShow`)?.addEventListener(`click`, () => {
        if (helpEl)
            helpEl.style.display = `block`;
    });
};
setup();
//# sourceMappingURL=script.js.map