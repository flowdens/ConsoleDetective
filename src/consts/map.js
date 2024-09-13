const GameLocation = require("../classes/GameLocation");
const { furnitures, oldSafe, mausoleum } = require("./furnitureConsts.js");

const library = new GameLocation(
    "City Library",
    "dusty shelves with books covered in cobwebs, an old table with a typewriter",
    furnitures.cityLibrary,
);

const cityMap = [
    new GameLocation(
        "Shop",
        "dusty display cases, shelves full of wares, creaky wooden floors",
        furnitures.shop,
    ),
    new GameLocation(
        "Rickety House", 
        "the facade is destroyed, the windows are boarded up. Inside there are dirty walls and scattered furniture.",
        furnitures.ricketyHouse,
    ),
    new GameLocation(
        "Church",
        "a collapsed dome, dilapidated benches, an altar covered with cobwebs.",
        furnitures.church,
    ),
    new GameLocation(
        "Old Windmill",
        "an abandoned mill with a rickety structure and overgrown meadows around.",
        furnitures.oldWindMill,
    ),
    library,
    new GameLocation(
        "Cementary",
        "ancient gravestones overgrown with bushes and moss",
        furnitures.cementary,
    ),
];

module.exports = { cityMap, library };