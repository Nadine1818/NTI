
function counte (){
    let sum = 0;
    let input = prompt("Enter String");
    for(i=0 ; i <input.length; i++){
        if(input.charAt(i) == "e")
            sum += 1;

    }
    alert (sum);
}
counte();

