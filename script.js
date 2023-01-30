const h1 = document.querySelector('h1');
const suma1 = document.querySelector('#suma1');
const suma2 = document.querySelector('#suma2');
const btn = document.querySelector('#btnCalcular');
const botonr = document.querySelector('#botonR');
const pResult = document.querySelector('#result');

const resta1 = document.querySelector('#resta1');
const resta2 = document.querySelector('#resta2');

const rResta = document.querySelector('#result');

btn.addEventListener('click', btnOnClick)

function btnOnClick() {
    const sumaInputs = suma1.value + suma2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
//Por corregir por que por alguna razon no funciona

botonr.addEventListener('click', restar1)


function restar1() {
    const resResta = resta1.value + resta2.value;
    //const resResta = resta1.value - resta2.value;
    //rResta.innerText = "Resultado: " + resResta;
    rResta.innerText = "Resultado: " + resResta;
}