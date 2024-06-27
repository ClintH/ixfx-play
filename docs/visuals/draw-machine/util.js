import { debounce } from "../../ixfx/flow";
/**
 * Invokes `callback` with value of HTML element when it changes
 */
function inputChangeDebounce(id, callback) {
    const element = document.querySelector(`#${id}`);
    if (!element)
        throw new Error(`${id} not found`);
    const debouncer = debounce((event) => {
        callback(element.value);
    }, 500);
    element?.addEventListener(`input`, event => {
        debouncer(event);
    });
}
function handleError(ex, headline) {
    const errorElement = document.querySelector(`#error`);
    if (!errorElement)
        return;
    errorElement.classList.remove(`hidden`);
    errorElement.innerHTML = `<h1>Error with ${headline}</h1><p>${ex}</p>`;
}
function clearError() {
    const errorElement = document.querySelector(`#error`);
    if (!errorElement)
        return;
    if (errorElement.classList.contains(`hidden`))
        return;
    errorElement.innerHTML = ``;
    errorElement.classList.add(`hidden`);
}
const evaluateExpression = (txt, contextLabel) => {
    try {
        // @ts-ignore
        window.r = state.randomSource;
        let distance = eval(txt);
        clearError();
        return distance;
    }
    catch (error) {
        handleError(error, contextLabel);
    }
};
//# sourceMappingURL=util.js.map