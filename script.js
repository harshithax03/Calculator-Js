let firstOperand 
let secondOperand = ''
let currentOperation
let shouldResetScreen = false


// Operations functionality
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
// Output display

const prevOperand = document.querySelector('[data-prev-operand]')
const currentOperand = document.querySelector('[data-current-operand]')

//👉add event listener
allClearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNum)
equalBtn.addEventListener('click', evaluate)



//Tasks ☑️TO-DO 👇
// ➡️ Number Input and Operator Handling ✅
// ➡️ Calculate Logic
// ➡️ Display output
// ➡️ Clear and delete functionalities
// ➡️Number Input and Operator Handling

//👉Buttons
//--Number Buttons--
numberButtons.forEach(button => {
    button.addEventListener('click', (e)=> {
     appendNumber(e.target.textContent);
    })
})
//--Operations button--
operationButtons.forEach(button => {
    button.addEventListener('click', (e)=> {
     appendOperator(e.target.textContent);
    })
})

//👉create Functions

//--create appendNumber[appends number on display]--
function appendNumber(number) {
    if (currentOperand.textContent === '0' || currentOperand.textContent === '') {
        currentOperand.textContent = number;
    } else {
        currentOperand.textContent += number;
    }

        console.log(typeof number)
       
}
//--create reset() function [resets currentOperand display]--
function reset(){
    currentOperand.textContent = '';
}
//--create appendOperator function [appends operator]--
function appendOperator(operator) {
    
    if (currentOperation !== null || currentOperation == null)
    firstOperand = currentOperand.textContent
    currentOperand.textContent += operator ;
    currentOperation = operator;
   prevOperand.textContent = `${firstOperand} ${currentOperation}`;
   reset()
    
}



//--operator function--[computes calculations]
function operate(operator, a, b){
    switch (operator) {
        case '+' :
            console.log("a:",a);
            console.log("b:",b);
            console.log(a+b)
            return a+b;
    }
    switch (operator) {
        case '﹣' :
            console.log("a:",a);
            console.log("b:",b);
            console.log(a-b)
            return a-b;
    }
    switch (operator) {
        case '÷' :
            console.log("a:",a);
            console.log("b:",b);
            console.log(a/b)
            return a/b;
    }
    switch (operator) {
        case '×' :
            console.log("a:",a);
            console.log("b:",b);
            console.log(a*b)
            return a*b;
    }
    
}
//--create evaluate()[sets logic for computing]--
function evaluate(){
    secondOperand = currentOperand.textContent
    let result;
    switch (currentOperation) {
        case '+' :
            result = operate('+', parseFloat(firstOperand), parseFloat(secondOperand))
            console.log( typeof parseFloat(firstOperand))
            console.log( typeof parseFloat(secondOperand))
            break
    }
    switch (currentOperation) {
        case '÷' :
            result = operate('÷', parseFloat(firstOperand), parseFloat(secondOperand))
            console.log( typeof parseFloat(firstOperand))
            console.log( typeof parseFloat(secondOperand))
            break
    }
    switch (currentOperation) {
        case '﹣' :
            result = operate('﹣', parseFloat(firstOperand), parseFloat(secondOperand))
            console.log( typeof parseFloat(firstOperand))
            console.log( typeof parseFloat(secondOperand))
            break
    }
    switch (currentOperation) {
        case '×' :
            result = operate('×', parseFloat(firstOperand), parseFloat(secondOperand))
            console.log( typeof parseFloat(firstOperand))
            console.log( typeof parseFloat(secondOperand))
            break
    }
    currentOperand.textContent = result;
   prevOperand.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`;

}
//clear Function
function clear(){
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
    currentOperand.textContent='0'
    prevOperand.textContent=''

}

//delete function
function deleteNum(){
    currentOperand.textContent = 
    currentOperand.textContent.toString().slice(0, -1);
}



