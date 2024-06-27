export class Variables {
    _functions = new Map();
    addFunction(name, function_) {
        this._functions.set(name, function_);
    }
    getValue(name) {
        const f = this._functions.get(name);
        if (f !== undefined) {
            return f();
        }
        return 0;
    }
}
//# sourceMappingURL=variables.js.map