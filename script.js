

const button = document.getElementById("button");
const caixaResultado = document.getElementById("resultado");
let resultado;

button.addEventListener("click", () => {

    const Valor1 =Number(document.getElementById("valor1").value);
    const Valor2 =Number(document.getElementById("valor2").value);
    const operacao = document.getElementById("operacao").value;

    if(operacao=== "+") {
    resultado = valor1 + Valor2;
    }
    else if(operacao==="-") {
    resultado = valor1 - Valor2;
    }
    else if(operacao==="*") {
    resultado = valor1 * Valor2; 
    }
    else if(operacao==="/") {
    resultado = valor1 / Valor2;
    }

    switch(operacao){

        case"+":
        resultado = valor1 + Valor2;
        break;

        case"-":
        resultado = valor1 - Valor2;
        break;

        case"*":
        resultado = valor1 * Valor2;
        break;

        defout:
        resultado = valor1 / Valor2;
    }

    caixaResultado.innerText = resultado;

});