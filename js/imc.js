class IMC{
    constructor(peso, altura){
        this.peso = peso;
        this.altura = altura;
        this.value = peso / (altura ** 2);
    }
    Classificacao(){
        const classificacoe = [ // Do maior para o menor
            {val: 45, text: "Obesidade grau III"},
            {val: 40, text: "Obesidade grau II"},
            {val: 35, text: "Obesidade grau I"},
            {val: 30, text: "Levemente acima do peso"},
            {val: 25, text: "Peso Ideial, Parabéns"},
            {val: 18.5, text: "Abaixo do peso"},
        ]
        for(let i = 0; i < classificacoe.length; i++){
            if(this.value > classificacoe[i].val) return classificacoe[i].text; // Retorna o estado, forEach Não funciona
        }
    }
}

const $valor = document.querySelector("#valor"); // Pega o elemento do valor, pra digitar a resposta
const $btnCalc = document.querySelector("#calcular"); // Pega o Elemento do botão

$btnCalc.addEventListener('click', () => {
    const $nome = document.querySelector("#nome").value; // Pega o valor do nome
    const $altura = document.querySelector("#altura");
    const $peso = document.querySelector("#peso");

    const p = parseFloat(($peso.value).replace(",", "."));      // Pega o valor da caixa de texto, já validando o formato
    const h = parseFloat(($altura.value).replace(",", "."));    // Pega o valor da caixa de texto, já validando o formato
    const imc = new IMC(p, h);
    if(!$nome)          return erro("Nome é obrigatorio") // strings vazias retornam como falso em Javascript
    if(!h || h >= 2.60) return erro("altura no formato incorreto") // 0 é retornado como false em Javascript
    if(!p || p >= 200)  return erro("Peso no formato incorreto") // Valida os valores

    $valor.textContent = `Olá ${ $nome }, seu IMC é: ${imc.value.toFixed(2)
    }\nSeu estado é: ${imc.Classificacao()}` // Printa o resultado
});

function erro(msg){
    $valor.textContent = msg;
}
