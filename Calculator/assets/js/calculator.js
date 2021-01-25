let input = document.getElementById("input");
let btns = document.querySelectorAll(".btn");
let calculations = document.getElementById("calculation");
let results = document.getElementById("result");
let i = btns.length
let first_item = true
while(i--){
    btns[i].addEventListener("click", calculate)
}
function calculate(e){
    let the_target_name = e.target.name
    let the_input_value = input.value
    if(the_target_name == "+" || the_target_name == "-" || the_target_name == "*" || the_target_name == "/"|| 
        the_target_name == "%"|| the_target_name == "//" || 
        the_target_name == "pow"|| the_target_name == "sqrt" ){
        if(input.value){
            if(first_item){
                
                if(the_target_name == "pow" || the_target_name == "sqrt"){
                    calculations.value = the_target_name + " " + String(the_input_value)
                    results.value = (the_target_name == "pow" )? Math.pow(Number(the_input_value), 2) : Math.sqrt(Number(the_input_value))
                }
                else{
                    calculations.value = String(the_input_value)
                    results.value = the_input_value
                    }
                input.value = ""
                first_item = false
            }
            else{
                if(the_target_name == "pow" || the_target_name == "sqrt"){
                    calculations.value = the_target_name + " " + String(the_input_value)
                }
                else{
                    calculations.value = calculations.value + the_target_name + String(the_input_value)
                }
                input.value = ""
            
                switch(the_target_name){
                    case "+":
                        results.value = add([results.value, the_input_value])
                        break;
                    case "-":
                        results.value = sub(results.value, the_input_value)
                        break;
                    case "*":
                        results.value = mult([results.value, the_input_value])
                        break;
                    case "/":
                        results.value = div(results.value, the_input_value)
                        break;
                    case "%":
                        results.value = mod(results.value, the_input_value)
                        break;
                    case "//":
                        results.value = int_div(results.value, the_input_value)
                        break;
                    case "pow":
                        results.value = Math.pow(Number(results.value), 2)
                        break;
                    case "sqrt":
                        results.value = Math.sqrt(Number(results.value))
                        break;
                }
            }
        }
    }
    else{
        if(the_target_name == "c"){
            first_item = true;
            calculations.value = "";
            results.value = "";
        }
        else{
            if(first_item){
                calculations.value = String(the_input_value)
                results.value = the_input_value
                first_item = false
            }
            else{
                alert("Your result is shown below or you haven't chosen operation")
            }
        }
        input.value = ""
    }

}
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
        first_item = true
        return "DIVISION BY ZERO"
    } 
    return Number(param1) / Number(param2);
}
let mod = function(param1, param2){
    if(param2 == 0){
        first_item = true
        return "DIVISION BY ZERO"
    } 
    return Number(param1) % Number(param2);
}
let int_div = function(param1, param2){
    return Math.floor(Number(param1) / Number(param2));
}