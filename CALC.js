// alert("hello");
function afficher(){
    console.log();
    op1.innerText += btn.innerText;
    console.log(screen.innerText);
}
op1 = document.querySelector('.op1');
sign = document.querySelector('.sign');
op2 = document.querySelector('.op2');
screen = document.querySelector('.screen');
result = document.querySelector('.result');
calcul = document.querySelector('.calcul');
const btn = document.querySelectorAll('button');
btn.forEach(element => element.addEventListener('click', () => {
  if(element.innerText == "RESET" || element.innerText == "AC"){
    op1.innerText = "";
    result.innerText = "";
    sign.innerText = "";
  }else if(element.innerText == "+" || element.innerText == "-" || element.innerText == "*" || element.innerText == "/"){
    sign.innerText = element.innerText;
    op1.innerText += "";
  }else if(element.innerText == "="){
    op1.innerText += ""
    result.innerText = eval(calcul.innerText);
  }else if(element.innerText == "Ans"){
    op1.innerText += result.innerText;
  }
  else{
  op1.innerText += element.innerText;
  if(op1.innerText.lenght > 5){
    op1.innerText += "";
    op2.innerText += element.innerText;
  }
  }
}));