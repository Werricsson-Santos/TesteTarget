// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
    
    
    
    fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        //pegar o menor valor
        const valor = data.map(v => v.valor)
        const valorFiltrado = valor.filter(v => v !== 0.0)
        const menor = Math.min(...valorFiltrado)
        const indexMenor = valor.indexOf(menor)
        const diaMenor = data[indexMenor].dia

        //pegar o maior valor
        const maior = Math.max(...valorFiltrado)
        const indexMaior = valor.indexOf(maior)
        const diaMaior = data[indexMaior].dia

        //Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
        const soma = valorFiltrado.reduce((acc, valor) => acc + valor, 0);
        console.log(soma)
        const media = soma / valorFiltrado.length
        const result = valorFiltrado.filter(v => v > media)
    
        alert(`O menor faturamento do mês foi no dia ${diaMenor}, no valor de R$ ${menor}.
O maior faturamento do mês foi no dia ${diaMaior}, no valor de R$ ${maior}.
Nesse mês tivemos ${result.length} dias em que superamos a média mensal de faturamento!`)
    })
    .catch(error => console.error(error));


// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

    const estados = [
        { nome: "SP", valor: 67836.43 },
        { nome: "RJ", valor: 36678.66 },
        { nome: "MG", valor: 29229.88 },
        { nome: "ES", valor: 27165.48 },
        { nome: "Outros", valor: 19849.53 },
    ];
    
    // Passo 1: calcular o valor total mensal da distribuidora
    const valorTotal = estados.reduce((total, estado) => total + estado.valor, 0);
    
    // Passo 2: calcular o percentual de representação de cada estado
    const percentuais = estados.map((estado) => ({
        nome: estado.nome,
        percentual: (estado.valor / valorTotal) * 100,
    }));
    
    // Exibir os percentuais de representação de cada estado
    percentuais.forEach((estado) =>
        alert(`O estado ${estado.nome} representou ${estado.percentual.toFixed(2)}% do valor total.`)
    );