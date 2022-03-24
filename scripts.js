// Execute the scripts when the content of the page are completely loaded
document.addEventListener("DOMContentLoaded", () => {
        const resultLabel = document.getElementById('result');
        const equals = document.getElementById('equals');
        const delete_last = document.getElementById('del_last_number');

        var result = 0;
        var expression = [];

    // loop through numbers to get their values 
    while (true) {
        let i = 0
        let j = 0

        // iterate through numbers
        for (i in range(0,10)){
            let number = document.getElementById(`number-${i}`);
            console.log(number);
            number.addEventListener('click', ()=>{
                expression += number.value;
                resultLabel.value = expression;
            });
        }

        // iterate through operation signals
        for (j in range(1,4)){
            let operator = document.getElementById(`operation-${j}`);
            console.log(operator);

            operator.addEventListener('click', ()=>{
                expression += operator.value;
                resultLabel.value = expression;

            });
        }
        function calculate(){
            // TODO
            // make the validations
            if (resultLabel.value != '' && '' == ''){
                resultLabel.value = eval(resultLabel.value);
                expression = eval(resultLabel.value);
            };
        }
       
        equals.onclick = calculate;
        // clear the values
        window.onload = (function () {
            var clean = document.getElementById("c");

            delete_last.onclick = function(){
                expression = expression.slice(0,-1)
                resultLabel.value = expression
            };

            clean.onclick = function() {
                expression = '';
                resultLabel.value = expression;
            };
        });
        break
    }
    });

function range(start, end) {
	/* generate a range : [start, start+1, ..., end-1, end] */
	var len = end - start + 1;
	var a = new Array(len);
	for (let i = 0; i < len; i++) a[i] = start + i;
	return a;
}