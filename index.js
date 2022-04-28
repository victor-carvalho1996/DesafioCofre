/*
    1: eliminar as possiveis lets
    2: Adicionar os arrays de teste case
    3: Todas as variaveis em ingles
    4: Mudar nome jfinal para JoaoCofre e JoseCofre
*/
const testCase = [["20 25","10 5","10 10"],["0 5","12 0","0 20","17 1"]];
const numberEntries = testCase.length;
console.log(testCase);
let JoseEntrie;
let JoaoEntrie;
let diferentValue = 0;

for (let i = 0; i < numberEntries; i++) {
    console.log("Teste " + (i + 1) + "\n");
    diferentValue = 0;

    for (let j = 0; j < testCase[i].length; j++) {
        JoaoEntrie = parseInt(testCase[i][j].split(" ")[0]);
        JoseEntrie = parseInt(testCase[i][j].split(" ")[1]);

        diferentValue = (JoaoEntrie - JoseEntrie) + diferentValue;

        console.log(diferentValue + "\n");
    }
    console.log("\n");     
}