let sum1 = document.getElementById("sum");
let mul1 = document.getElementById("mul");
let div1 = document.getElementById("div");


function m() {
    let arr = [];
    let sum = 0;

    for (let i = 0; i < 3; i++) {
        let input = prompt(`enter number ${i}`);
        while(!Number(input)){
            input = prompt(`invalid enter again number ${i}`);
        }
        arr.push(Number(input));
    }


    for (let i = 0; i < 3; i++) {
        sum += arr[i];
    }


    let mul = arr[0] * arr[1] * arr[2];

    let div = arr[0] / arr[1] / arr[2];

    sum1.innerText = arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum;
    mul1.innerText = arr[0] + "*" + arr[1] + "*" + arr[2] + " = " + mul;
    div1.innerText = arr[0] + "/" + arr[1] + "/" + arr[2] + " = " + div;;

    // console.log(sum);
    // console.log(mul);
    // console.log(div);


}
m();