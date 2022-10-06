let guests = ["Tahir", "Arsalan", "Rizwan"];

console.log(`${guests[0]}, You have been invited for a dinner!`);
console.log(`${guests[1]}, You have been invited for a dinner!`);
console.log(`${guests[2]}, You have been invited for a dinner!`);
console.log(`\nSorry, ${guests[0]} can't make to the dinner!`);

const replaced_name = guests.splice(guests.indexOf('Tahir'), 1, 'Asim');

console.log(`\n${guests[0]}, You have been invited for a dinner!`);
console.log(`${guests[1]}, You have been invited for a dinner!`);
console.log(`${guests[2]}, You have been invited for a dinner!`);
console.log(`\nWe reserved a bigger dinner table`);

guests.unshift("Sultan");
guests.splice(3, 0, "Asif");
guests.push("Hashim");

console.log(`\n${guests[0]}, You have been invited for a dinner!`);
console.log(`${guests[1]}, You have been invited for a dinner!`);
console.log(`${guests[2]}, You have been invited for a dinner!`);
console.log(`${guests[3]}, You have been invited for a dinner!`);
console.log(`${guests[4]}, You have been invited for a dinner!`);
console.log(`${guests[5]}, You have been invited for a dinner!`);

console.log(`\nSorry, We can only invite 2 people for the dinner`);

console.log(`\nSorry, ${guests.pop()} your invitation is cancelled`);
console.log(`\nSorry, ${guests.pop()} your invitation is cancelled`);
console.log(`\nSorry, ${guests.pop()} your invitation is cancelled`);
console.log(`\nSorry, ${guests.pop()} your invitation is cancelled`);

console.log(`\n${guests[0]}, You are still invited for a dinner!`);
console.log(`${guests[1]}, You are still invited for a dinner!`);

guests.splice(0, guests.length);

console.log(guests)