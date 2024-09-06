function inverterString(s) {
    let sInvertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        sInvertida += s[i];
    }
    return sInvertida;
}


const string = prompt("Digite uma string:");
console.log(`String invertida: ${inverterString(string)}`);
