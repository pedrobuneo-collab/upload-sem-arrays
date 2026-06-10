//3) Desenvolva um programa que colete e armazene os nomes e as alturas de diferentes pessoas em um vetor. O programa deve permitir que o usuário insira quantas alturas desejar e só deve ser encerrado quando o usuário optar por parar. 
Ao final, exiba a maior altura, a menor altura e a quem pertencem respectivamente. 
let pessoas = [];

while (true) {      
    let nome = prompt("Digite o nome da pessoa (ou 'parar' para encerrar):");
    if (nome.toLowerCase() === 'parar') {
        break;
    }
    let altura = parseFloat(prompt("Digite a altura da pessoa:"));
    pessoas.push({ nome, altura });
}
if (pessoas.length > 0) {
    let maior = pessoas[0];
    let menor = pessoas[0];
    for (let pessoa of pessoas) {
        if (pessoa.altura > maior.altura) {
            maior = pessoa;
        }
        if (pessoa.altura < menor.altura) {
            menor = pessoa;
        }
    }
    alert(`A maior altura é ${maior.altura} e pertence a ${maior.nome}.`);
    alert(`A menor altura é ${menor.altura} e pertence a ${menor.nome}.`);
} else {
    alert("Nenhuma pessoa foi cadastrada.");
}





