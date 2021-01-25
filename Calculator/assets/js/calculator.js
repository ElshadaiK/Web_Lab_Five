// Calculator

let add = function(param){
    let sum = 0;
    for(let i=0; i<param.length; i++){
        sum += Number(param[i])
    }
    return sum
}
let mult = function(param){
    let product = 1;
    for(let i=0; i<param.length; i++){
        product *= Number(param[i])
    }
    return product
}
let sub = function(param1, param2){
    let res = Number(param1) - Number(param2);
    return res
}
let div = function(param1, param2){
    if(param2 == 0){
        return "DIVISION BY ZERO"
    } 
    return Number(param1) / Number(param2);
}

let choice = prompt("Enter your operation");

let operation;
(function() {
    switch(choice){
        case "+": 
            operation = add;
            break;
        case "-":
            operation = sub
            break;
        case "/":
            operation = div
            break;
        case "*":
            operation = mult
            break;
        default:
            console.log("Please enter a valid operation")
        
    }
    console.log("**************************************************************")
    if(operation){
        let all_numbers = true;
        let userInput = prompt("Enter your numbers, separated by space");
        let params = userInput.split(" ")
        params.forEach(element => {
            if(typeof(Number(element)) == NaN) all_numbers = false;
        });
        if(!all_numbers){
            console.log("Enter numbers only please")
        }
        else{
            let res;
            if(operation == div || operation == sub){res = operation(...params)}
            else{ res = (operation(params))}
            console.log(res)
        }
    }
    console.log("**************************************************************")

})();