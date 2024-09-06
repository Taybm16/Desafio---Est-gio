// Dados de faturamento diário
const faturamentoDiario = [
    { "dia": 1, "valor": 1000 },
    { "dia": 2, "valor": 1500 },
    { "dia": 3, "valor": 1200 },
    { "dia": 4, "valor": 1800 },
    { "dia": 5, "valor": 0 },
    { "dia": 6, "valor": 1600 },
    { "dia": 7, "valor": 0 }
];

// Filtra os valores maiores que 0
let valores = [];
for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i].valor > 0) {
        valores.push(faturamentoDiario[i].valor);
    }
}

// Encontra o menor e o maior valor
let menor = valores[0];
let maior = valores[0];
let soma = 0;
for (let i = 0; i < valores.length; i++) {
    if (valores[i] < menor) {
        menor = valores[i];
    }
    if (valores[i] > maior) {
        maior = valores[i];
    }
    soma += valores[i];
}

// Calcula a média
let media = soma / valores.length;

// Conta os dias acima da média
let diasAcimaMedia = 0;
for (let i = 0; i < valores.length; i++) {
    if (valores[i] > media) {
        diasAcimaMedia++;
    }
}


console.log("Menor valor de faturamento: R$", menor.toFixed(2));
console.log("Maior valor de faturamento: R$", maior.toFixed(2));
console.log("Número de dias acima da média:", diasAcimaMedia);
