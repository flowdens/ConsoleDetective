class Furniture {
    name;
    hint;

    constructor(name, hint) {
        this.name = name;
        this.hint = hint;
    }

    takeHint() {
        this.hint = null;
    }
}

module.exports = Furniture;
