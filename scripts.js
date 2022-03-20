// Execute the scripts when the content of the page are completely loaded
document.addEventListener("DOMContentLoaded", () => {
        const resultLabel = document.getElementById('result');
        var result = 0;
        var expression = [];

        // number_1.addEventListener("click", ()=>{
        //     console.log(parseInt(number_1.value));
        //     result += parseInt(number_1.value);
        // });


    // loop through numbers to get their values 
    while (true) {
        let i = 0
        for(i in range(0,10)){
            let number = document.getElementById(`number-${i}`);
            console.log(number);
            number.addEventListener('click', ()=>{
                expression += number.value;
                resultLabel.value = expression;
                
                // the operators section
                if(''){

                }
            })
        }
        break
    }
    });



























































// se apenas numeros forem colocados continue fazendo a concat dos numeros,
// caso seja um sinal efetue a operação e logo depois


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

function range(start, end) {
	/* generate a range : [start, start+1, ..., end-1, end] */
	var len = end - start + 1;
	var a = new Array(len);
	for (let i = 0; i < len; i++) a[i] = start + i;
	return a;
}