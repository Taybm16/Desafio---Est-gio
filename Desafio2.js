function pertenceAFibonacci(numero) {
    let a = 0;
    let b = 1;

    // Enquanto a for menor que o número
    while (a < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    // Verifica se o número é igual a a
    return a === numero;
}

// Solicita um número ao usuário
const numero = parseInt(prompt("Digite um número:"), 10);

// Verifica se o número está na sequência de Fibonacci
if (pertenceAFibonacci(numero)) {
    console.log("O número está na sequência de Fibonacci.");
} else {
    console.log("O número não está na sequência de Fibonacci.");
}
