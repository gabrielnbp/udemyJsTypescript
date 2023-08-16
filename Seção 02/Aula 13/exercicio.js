let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let aux;

aux = varA; //A
varA = varB; //B
varB = varC; //C
varC = aux; //A

/**
 * Outra Solução:
 * 
 * [varA, varB, varC] = [varB, varC, varA]
 */

console.log(varA, varB, varC);
