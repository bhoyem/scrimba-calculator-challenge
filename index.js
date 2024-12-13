let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let result=0;
let term = "Output";

//Create a function for the output so that it can be simply called rather than recreated for each operation:
function resultOutput() {
    document.getElementById("sum-el").textContent = `${term}: ${result}`;
};


//Create functions for the operations:
function add() {
    result=num1+num2;
    term="Sum"
    resultOutput();
    };
    
function subtract() {
    result=num1-num2; 
    term="Difference"
    resultOutput();
    };
    
function divide() {
    result=num1/num2;
    term="Quotient";
    resultOutput();
    };
    
function multiply() {
    result=num1*num2;
    term="Product";
    resultOutput();
    };


