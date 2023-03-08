function CalcularExe1() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    
    let media = (n1 + n2 + n3 + n4) / 4
    let resultado = ""

    if (media >= 7){
        resultado = `O aluno foi aprovado!`;
    }
    else{
        resultado = `O aluno foi reprovado!`;
    }

    document.getElementById("media").innerHTML = `A media é  ${media}`;
    document.getElementById("resultado").innerHTML = (resultado);
}

function CalcularExe2() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    
    let media = (n1 + n2) / 2
    let resultado = ""

    if (media >= 7){
        resultado = `Aprovado!`;
    }
    else if ((media >= 3) && (media < 7)) {
        resultado = `Exame!!`;
    }
    else{
        resultado = `Reprovado!!`;
    }

    document.getElementById("media").innerHTML = `A media é  ${media}`;
    document.getElementById("resultado").innerHTML = (resultado);
}

function CalcularExe3() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    let menor = 0;

    if (n1 < n2){
        menor = n1;
    }
    else{
        menor = n2;
    }

    document.getElementById("resultado").innerHTML = `O menor numero é ${menor}`;
}

function CalcularExe4() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    let maior = 0

    if (n1 > n2){
        maior = n1;
    }
    else{
        maior = n2;
    }

    if (maior < n3){
        maior = n3;
    }


    document.getElementById("resultado").innerHTML = `O maior numero é ${maior}`;

}

function CalcularExe5() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let escolha = Number(document.getElementById("escolha").value);
    var resultado = 0

    switch (escolha){
        case 1:
            var resultado = (n1 + n2) / 2;
            break
        case 2:
            if (n1 > n2){
                var resultado = n1 - n2
            }
            else{
                var resultado = n2 - n1
            }
            break
        case 3:
            var resultado = n1 * n2
            break
        case 4:
            if ((n1 != 0) && (n2 != 0)){
               var resultado = n1 / n2
            }
            else{
                var resultado = null
            }
            break

        default: alert(`Escolha uma opção valida!`)
    }

    document.getElementById("resultado").innerHTML = `O resultado é ${resultado}`;

}

function CalcularExe6() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let escolha = Number(document.getElementById("escolha").value);

    switch (escolha){
        case 1:
            document.getElementById("resultado").innerHTML = `O resultado é ${Math.pow(n1, n2)}`;
            break
        case 2:
            document.getElementById("resultado").innerHTML = `<p>A raiz quadrada do primeiro numero é ${Math.pow(n1, 1/2)}</p> A do segundo numero é ${Math.pow(n2, 1/2)}`;
            break
        case 3:
            document.getElementById("resultado").innerHTML = `<p>A raiz cubica do primeiro numero é ${Math.pow(n1, 1/3)}</p> A do segundo numero é ${Math.pow(n2, 1/3)}`
            break
        default: alert(`Escolha uma opção valida!`)
    }

}

function CalcularExe7() {
    let n1 = Number(document.getElementById("n1").value);

    if (n1 <= 500){
        let aumento = (n1 * 30) / 100
        document.getElementById("resultado").innerHTML = `Seu novo salario será de ${n1 + aumento}`;
    }
    else{
        alert(`Você nao terá aumento!`)
    }
}

function CalcularExe8() {
    let n1 = Number(document.getElementById("n1").value);

    if (n1 <= 300){
        let aumento = (n1 * 35) / 100
        document.getElementById("resultado").innerHTML = `Seu novo salario será de ${n1 + aumento}`;
    }
    else{
        let aumento = (n1 * 15) / 100
        document.getElementById("resultado").innerHTML = `Seu novo salario será de ${n1 + aumento}`;
    }
}

function CalcularExe9() {
    let n1 = Number(document.getElementById("n1").value);
    var credito = 0

    if (n1 > 400){
        var credito = (n1 * 30) / 100
    }
    else if ((n1 <= 400) && (n1 > 300)){
        var credito = (n1 * 25) / 100
    }
    else if ((n1 <= 300) && (n1 > 200)){
        var credito = (n1 * 20) / 100
    }
    else{
        var credito = (n1 * 10) / 100
    }

    document.getElementById("resultado").innerHTML = `Seu crédito será de ${credito}`;
}

function CalcularExe9() {
    let n1 = Number(document.getElementById("n1").value);
    var credito = 0

    if (n1 > 400){
        var credito = (n1 * 30) / 100
    }
    else if ((n1 <= 400) && (n1 > 300)){
        var credito = (n1 * 25) / 100
    }
    else if ((n1 <= 300) && (n1 > 200)){
        var credito = (n1 * 20) / 100
    }
    else{
        var credito = (n1 * 10) / 100
    }
    
    document.getElementById("resultado").innerHTML = `Seu crédito será de ${credito}`;
}

function CalcularExe10() {
    let n1 = Number(document.getElementById("n1").value);
    var distribuidor = 0
    var imposto = 0
    var preco = 0

    if (n1 < 12000){
        var distribuidor = (n1 * 5) / 100
        var preco = n1 + distribuidor
    }
    else if ((n1 >= 12000) && (n1 <= 25000)){
        var distribuidor = (n1 * 10) / 100
        var imposto = (n1 * 15) / 100
        var preco = n1 + distribuidor + imposto
    }
    else{
        var distribuidor = (n1 * 15) / 100
        var imposto = (n1 * 20) / 100
        var preco = n1 + distribuidor + imposto 
    }
    
    document.getElementById("resultado").innerHTML = `O preço do carro é de ${preco}`;
}