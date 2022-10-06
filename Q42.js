
const show_magicians = ((magicians) => {
magicians.map((magician) => {
console.log(magician);
});
});

const make_great = ((magicians) => {
        magicians.forEach((magician, i) => {
            magicians[i] = `Great ${magician}`
        });
        return magicians;
});

const magicians = ["Sameer", "Ahsan", "Nauman"];

show_magicians(magicians);
console.log("\n");
const great_magician = make_great(magicians);
show_magicians(great_magician);
console.log("\n");
show_magicians(magicians);