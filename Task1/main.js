function add (arr){
    let sum =0;
    for(let i =0; i<arr.length; i++){
        if (typeof arr[i] !== "number"){
            console.log("error not a number");
            return null;
        }
        else sum += arr[i];
    }

    return sum;

}

let arr = [1,2,"2"];
console.log(add(arr));