const Furniture = require("../classes/Furniture");
const hints = require("./hintConsts.js");

const oldSafe = new Furniture("Old safe", hints.oldKey);
const mausoleum = new Furniture("Mausoleum in Greek style");

const furnitures = {
	shop: Object.freeze([
        new Furniture("Cash register"),
        new Furniture("Dusty shelf", hints.oldNote),
        new Furniture("Display cases"),
    ]),
    ricketyHouse: Object.freeze([
        new Furniture("Closet", hints.diary),
        new Furniture("Family portret"),
        new Furniture("Sofa"),
    ]),
    church: Object.freeze([
        new Furniture("Benches", hints.cross),
        new Furniture("Dirty window"),
        new Furniture("Altar"),
    ]),
    oldWindMill: Object.freeze([
        new Furniture("Vintage equipment"),
        new Furniture("Bag of flour"),
        new Furniture("Floorboards", hints.map),
    ]),
    cityLibrary: Object.freeze([
        new Furniture("Book shelfs"),
        oldSafe,
        new Furniture("Librarian's desk"),
    ]),
    cementary: Object.freeze([
        mausoleum,
        new Furniture("Stone"),
        new Furniture("Angel statue"),
    ]),
};

module.exports = { furnitures, oldSafe, mausoleum };
