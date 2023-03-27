//Calculator object with add,sub,multiply,divide function
const Calculator = {
    number1:10,
    number2: 20,
    isValid: function (n1, n2) { 
        if (typeof n1 !=="number"||typeof n2 !=="number")
            return false;
        else
            return true;
    },
    add:function(n1, n2){
        if (Calculator.isValid(n1, n2))
            return n1 + n2;
        else
            alert("Enter a valid number");
    },
    subtract: function(n1, n2) {
        if (Calculator.isValid(n1, n2))
            return n1 - n2;
        else
        alert("Enter a valid number");
    },
    multiply:function (n1, n2){
        if (Calculator.isValid(n1, n2))
            return n1 * n2;
        else
        alert("Enter a valid number");
    },
    divide:function(n1, n2) {
        if (Calculator.isValid(n1, n2))
            if(n2!=0)
                return n1 / n2;
            else
            alert("Enter a valid denominator");
        else
        alert("Enter a valid number");
    }
}
console.log(Calculator.add('10', 12));//it will throw an error
//calling subtract 
console.log(Calculator.subtract(Calculator.number1, Calculator.number2));
//calling multiply
console.log(Calculator.multiply(Calculator.number1, Calculator.number2));
//calling divide
console.log(Calculator.divide(Calculator.number1, Calculator.number2))
