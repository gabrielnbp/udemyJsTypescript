//               01234567   
let umaString = "Um texto";
let segundaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.charAt(6));

// -------------------------------------------------------------------------------------------------------------------------------------//

console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

// -------------------------------------------------------------------------------------------------------------------------------------//

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));

// -------------------------------------------------------------------------------------------------------------------------------------//

console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/Um/, 'Outra'));

console.log(segundaString.replace(/r/, '#'));
console.log(segundaString.replace(/r/g, '#'));

// -------------------------------------------------------------------------------------------------------------------------------------//

console.log(segundaString.length);
console.log(segundaString.slice(2, 6));
console.log(segundaString.slice(-3));

console.log(segundaString.substring(segundaString.length - 5));

console.log(segundaString.split('r', 2));

// -------------------------------------------------------------------------------------------------------------------------------------//

console.log(segundaString.toUpperCase());
console.log(segundaString.toLowerCase());
