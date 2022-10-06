const show_magicians = ((magicians) => {
    magicians.map((magician) => console.log(magician));
    });
    
const make_great = ((magicians) => {
    const great_magicians = [];
    magicians.map((magician) => great_magicians.push(`${magician} the Great`));
    return great_magicians;
});

const magicians = ["Sameer", "Ahsan", "Nauman"];

show_magicians(magicians);
console.log("\n");
show_magicians(make_great(magicians));
console.log("\n");
show_magicians(magicians);