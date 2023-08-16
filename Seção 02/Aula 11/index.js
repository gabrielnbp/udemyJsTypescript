/**
 * Aritméticos
 * Adição / Concatenação: +
 * Subtração: -
 * Multiplicação: *
 * Divisão: /
 * Potenciação: **
 * Resto da Divisão: %
 * Incremento: ++
 * Decremento: --
 * NaN: Not a number
 * parseInt: inteiro
 * parseFloat: decimais
 */
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2 * num3);

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log(contador);

const passo = 50;
let contador2 = 0;
contador += passo; //contador = contador + 50 (passo)

const num4 = 10;
const num5 = parseInt('5');
console.log(num4 + num5);
console.log(typeof num5)
