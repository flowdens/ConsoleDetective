const Hint = require("../classes/Hint");

const oldNote = new Hint(
	"Old note with partially erased words",
	"Start with the past and the light will show the way to .h. oth.. w..."
);

const diary = new Hint(
	"Vintage diary",
	"Most people born and die in the same world. But Claire had other destiny. Find the cross to understand more"
);

const cross = new Hint(
	"Cross",
	"13356799"
);

const oldKey = new Hint(
	"Rusty key",
	"Key with keychain in the shape of a olive wreath"
);

const map = new Hint(
	"Map of a city",
	"Although the map is not complete, you can see a secret passage starting from the library and leading to the cementary."
);

const hints = {
	oldNote: oldNote,
	diary: diary,
	cross: cross,
	oldKey: oldKey,
	map: map,
};

module.exports = hints;
