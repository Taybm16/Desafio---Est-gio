// Faturamento por estado
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Total do faturamento
let total = 0;
for (let estado in faturamento) {
    total += faturamento[estado];
}

// Calcular e exibir o percentual de cada estado
for (let estado in faturamento) {
    let valor = faturamento[estado];
    let percentual = (valor / total) * 100;
    console.log(estado + ": " + percentual.toFixed(2) + "%");
}
