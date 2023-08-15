/*
Gabriel Nascimento Borges Pereira tem 21 anos, pesa 112kg
tem 1.78 de altura e seu IMC é de 35.34907208685772
Gabriel nasceu em 2001
*/

const nome = 'Gabriel';
const sobrenome = 'Nascimento Borges Pereira';
const idade = 22;
const peso = 112;
const alturaEmM = 1.78;
let imc; //cálculo: peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de, ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
