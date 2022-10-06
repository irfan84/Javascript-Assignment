let guests = ["Tahir", "Arsalan", "Rizwan"];

console.log(`${guests[0]}, You have been invited for a dinner!`);

console.log(`${guests[1]}, You have been invited for a dinner!`);

console.log(`${guests[2]}, You have been invited for a dinner!`);

console.log(`\nSorry, ${guests[0]} can't make to the dinner!`);



const replaced_name = guests.splice(guests.indexOf('Tahir'), 1, 'Asim');


console.log(`\n${guests[0]}, You have been invited for a dinner!`);

console.log(`${guests[1]}, You have been invited for a dinner!`);

console.log(`${guests[2]}, You have been invited for a dinner!`);
