num1=32
num2=76

document.getElementById("num1").textContent=num1
document.getElementById("num2").textContent=num2
outcome=document.getElementById("result")
function add(){
    let result=num1+num2
    outcome.textContent="Result: "+result
}
function sub(){
    let result=num1-num2
    outcome.textContent="Result: "+result
}
function mul(){
    let result=num1*num2
    outcome.textContent="Result: "+result
}
function div(){
    let result=num1/num2
    outcome.textContent="Result: "+result
}
