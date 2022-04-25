function checkCofre() {
    let quantindadeEntradas = parseInt(prompt("Digite a quantidade de entradas: "));
    let valor, cofre, zFinal, jFinal, rFinal = [], testeNumero = 0;

    while (quantindadeEntradas > 0) {
        testeNumero++;
        rFinal.push("Teste " + testeNumero);
        cofre = []
        for (let index = 0; index < quantindadeEntradas; index++) {
            valor = prompt("Digite o valor: ");
    
            jFinal = parseInt(valor.split(" ")[0]);
            zFinal = parseInt(valor.split(" ")[1]);
    
            if (index > 0) {
                cofre.push((jFinal - zFinal) + cofre[index - 1]);
            }else {
                cofre.push(jFinal - zFinal);
            }
            
        }
        rFinal = rFinal.concat(cofre);
        rFinal.push("");
        quantindadeEntradas = parseInt(prompt("Digite a quantidade de entradas: "));
    }   
    let result = "";
    rFinal.map(element => {
        result += element + "\n";
    });
    console.log(result);
}