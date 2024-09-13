class GameLocation {
    name;
    description;
    furniture;
    #activeFurniture;

    constructor(name, description, furniture) {
        this.name = name;
        this.description = description;
        this.furniture = furniture;
    }

    get currentFurniture() {
        return this.#activeFurniture;
    }
    
    set currentFurniture(furniture) {
        this.#activeFurniture = furniture;
    }
}

module.exports = GameLocation;
