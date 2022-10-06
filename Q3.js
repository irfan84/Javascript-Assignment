const personName = "irfan";
const upperCase = personName.toUpperCase();
const lowerCase = (personName.toLowerCase());
const titleCase = lowerCase.split(' ').map((word) => {
return word.replace(word[0], word[0].toUpperCase())
}).join(' ');

console.log("%s, %s, %s", lowerCase, upperCase, titleCase)
