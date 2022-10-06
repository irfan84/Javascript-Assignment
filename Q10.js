// Irfan
// Date: 10/01/2022
// This program prints out the quote of my favourite person along with quotation marks

const famous_person = "Albert Einstein";
const message = `${famous_person} once said, \“A person who never made a mistake never tried anything new.\”`;

console.log(message);


// Irfan
// Date: 10/01/2022
// This program prints out the person name in lower, upper and title case
const personName = "irfan";
const upperCase = personName.toUpperCase();
const lowerCase = (personName.toLowerCase());
const titleCase = lowerCase.split(' ').map((word) => {
return word.replace(word[0], word[0].toUpperCase())
}).join(' ');

console.log("%s, %s, %s", lowerCase, upperCase, titleCase)