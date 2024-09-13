//todo save and load game from file feature
//todo fetch books from api feature

const rl = require("readline-sync");

const { cityMap, library } = require("./consts/map");
const { startPromt, endPromt } = require("./consts/legendConsts");
const { oldSafe, mausoleum } = require("./consts/furnitureConsts");
const hints = require("./consts/hintConsts");

class Game {
	#map;
    #hintStorage = [];
    #currentLocation;
    #justStarted = true;

    constructor() {
      this.#map = cityMap;
    }

    get observeTheMap() {
        return !this.#currentLocation;
    }

    get observeTheLocation() {
        return !this.#currentLocation.currentFurniture;
    }

    play() {
        console.clear();
        if (this.#justStarted) {
            this.tellTheLegend();
        }
      
        if (this.observeTheMap) {
            this.printMapMenu();
            this.getLocation();
        } else if (this.observeTheLocation) { 
            this.printLocationMenu();
            this.getFurniture();
        } else {
            const furniture = this.#currentLocation.currentFurniture;
            if (!furniture.hint) {
                if (furniture === mausoleum) {
                    this.exploreMausoleum()
                } else {
                    console.log(`The ${furniture.name} is empty!`);
                }
            } else {
                if (furniture === oldSafe) {
                    this.exploreSafe(furniture);
                } else {
                    this.exploreFurniture(furniture);
                }
            } 
            this.goToLocationMenu();
        }
        this.play();
    }

    exploreSafe(furniture) {
        if (this.#hintStorage.includes(hints.cross)) {
            console.log("You opend safe with a code from cross");
            this.exploreFurniture(furniture);
        } else {
            console.log("You need to find code from the safe");
        }
    }

    exploreMausoleum(){
        if (this.#hintStorage.includes(hints.oldKey)) {
            console.log("You opened the mausoleum with the key from safe");
            console.log(endPromt);
            process.exit(0);
        } else {
            console.log("You need to find the key to the mausoleum");
        }
    }

    exploreFurniture(furniture) {
        console.log(`Looking at ${furniture.hint.name}`);
        console.log(`It says: "${furniture.hint.description}"`);
        this.#hintStorage.push(furniture.hint);
        furniture.takeHint();
    }

    tellTheLegend() {
        this.#justStarted = false;
        console.log(startPromt);
    }

    goToLocationMenu() {
        rl.question("Press anything to continue exploring");
        this.#currentLocation.currentFurniture = null;
    }

    printMapMenu() {
        const menu = this.#map
            .map((location, index) => `${index}. ${location.name}`)
            .join("\n");
        console.log("You are in main menu");
        console.log("You can visit:");
        console.log(menu);
    }

    printLocationMenu() {
        const menu = this.#currentLocation.furniture
            .map((f, index) => `${index}. ${f.name}`)
            .join("\n");
        console.log(`You are in ${this.#currentLocation.name}`);
        console.log(`You see ${this.#currentLocation.description}. You can explore:`);
        console.log(menu);
        if (this.#currentLocation == library && this.#hintStorage.includes(hints.map)) {
            console.log('Althrough you know about secret passage, you can not find any you cannot find any trace of it..')
        }
    }

    getLocation() {
        const answer = rl.question("Please choose an option (or type q to quit): ");

        switch (answer) {
            case "q":
                process.exit(0);
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
                const locationId = parseInt(answer);
                this.#currentLocation = this.#map[locationId];
                break;
            default:
                console.log("Please enter a valid oprion");
        };
    }

    getFurniture() {
        const answer = rl.question("Please choose an option (or type m to go back to the map): ");
        
        switch (answer) {
            case "m":
                this.#currentLocation = null;
                break;
            case "0":
            case "1":
            case "2":
                const furnitureId = parseInt(answer);
                this.#currentLocation.currentFurniture = this.#currentLocation.furniture[furnitureId];
                break;
            default:
                console.log("Please enter a valid oprion");
        };
    }
};

let game = new Game();

module.exports = game;