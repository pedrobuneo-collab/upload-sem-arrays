let nomes = [];
let sexos = [];
let salarios = [];
for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome do funcionário:");
    sexos[i] = prompt("Digite o sexo do funcionário (M/F):");
    salarios[i] = parseFloat(prompt("Digite o salário do funcionário:"));
}
alert("Funcionárias mulheres que ganham mais de R$5 mil:");
for (let i = 0; i < 5; i++) {
    if (sexos[i].toUpperCase() === "F" && salarios[i] > 5000) {
        alert(`Nome: ${nomes[i]}, Salário: R$${salarios[i].toFixed(2)}`);
    }
}


