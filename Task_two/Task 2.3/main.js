let answer = document.getElementById("Answer");
let opArr = ["*","+","-","/"]

function EnterNumber(num){
   answer.value= answer.value + num
}

function EnterOperator(op){
   if(answer.value.length===0)
   {
    return;
   }
    answer.value= answer.value + op
}

function EnterClear(){
    answer.value = answer.value.slice(0,answer.value.length-1);
}

function EnterEqual(){
    if(isNaN(answer.value[answer.value.length-1])){
        return;
    }
    answer.value = eval(answer.value)
}