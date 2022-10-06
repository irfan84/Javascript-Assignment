const places = ["Mount Everest", "Eiffel Tower", "Great Wall of China", "Taj Mahal", "Statue of Liberty"];

console.log(`Original Order:\n${places}`);

let new_places_arr = [];
new_places_arr = places.slice()
console.log(`\nAlphabetical Order:\n${new_places_arr.sort()}`);

console.log(`\nOriginal Order:\n${places}`);

console.log(`\nReverse Alphabetical Order:\n${new_places_arr.reverse()}`);

console.log(`\nOriginal Order:\n${places}`);

console.log(`\nReserve Order:\n${places.reverse()}`);

console.log(`\nReserve for Original Order:\n${places.reverse()}`);

console.log(`\nAlphabatical Order:\n${places.sort()}`);

console.log(`\nAlphabatical Order:\n${places.reverse()}`);