let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mult = document.getElementById("multi");
let div = document.getElementById("div");
let pot = document.getElementById("pot");
let campoResultado = document.getElementById("resultado");

function adicao() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 + num2;
        campoResultado.value = resultado;
    } else {
        campoResultado.value = "Valores invalidos";
    }
}

function subtracao() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 - num2;
        campoResultado.value = resultado;
    } else {
        campoResultado.value = "Valores invalidos";
    }
}

function multiplicacao() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 * num2;
        campoResultado.value = resultado;
    } else {
        campoResultado.value = "Valores invalidos";
    }
}

function divisao() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    if(!isNaN(num1) && !isNaN(num2)) {
        if(num2 > 0) {
            let resultado = num1 / num2;
            campoResultado.value = resultado;
        } else {
            campoResultado.value = "Erro, divisão por zero"
        }
    } else {
        campoResultado.value = "Valores invalidos";
    }
}

function potencia() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    if(!isNaN(num1) && !isNaN(num2)) {
        let resultado = Math.pow(num1, num2);
        campoResultado.value = resultado;
    } else {
        campoResultado.value = "Valores invalidos";
    }
    
}let resultado = Math.pow(num1, num2);