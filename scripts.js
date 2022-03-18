// Execute the scripts when the content of the page are completely loaded
document.addEventListener("DOMContentLoaded", () => {
        // declare all the variables
        const number_0 = document.getElementById("number-0");
        const number_1 = document.getElementById("number-1");
        const number_2 = document.getElementById("number-2");
        const number_3 = document.getElementById("number-3");
        const number_4 = document.getElementById("number-4");
        const number_5 = document.getElementById("number-5");
        const number_6 = document.getElementById("number-6");
        const number_7 = document.getElementById("number-7");
        const number_8 = document.getElementById("number-8");
        const number_9 = document.getElementById("number-9");

        var result = 0;

        number_1.addEventListener("click", ()=>{
            console.log(parseInt(number_1.value));
            // result += parseInt(number_1.value);
            console.log(result);
        });
    });


function calculate(value1, operator, value2) {


    switch (operator) {
        case '+':
            result = value1 + value2
            break
        case '-':
            result = value1 - value2 
            break
        case '*':
            result = value1 * value2
            break
        case '/':
            result = value1 / value2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}