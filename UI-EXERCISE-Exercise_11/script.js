let number1 = prompt("enter a number");
console.log(number1);
const calculator = {
    number1:10,
    number2: 20,
    isValid:(n1,n2)=>typeof(n1)=="number"&&typeof(n2)=="number",
    Add: (n1, n2) => {
        if (this.isValid(n1, n2))
            return n1 + n2;
        else
            "Enter a valid number"
    },
    Subtract: (n1, n2) => {
        if (this.isValid(n1, n2))
            return n1 - n2;
        else
            "Enter a valid number"
    },
    Multiply: (n1, n2) => {
        if (this.isValid(n1, n2))
            return n1 * n2;
        else
            "Enter a valid number"
    },
    Divide: (n1, n2) => {
        if (this.isValid(n1, n2))
            if(n2!=0)
                return n1 / n2;
            else
                "Enter a valid denominator"
        else
            "Enter a valid number"
    }
}
console.log(calculator.Add(10, 12));
console.log(calculator.Subtract(calculator.number1, calculator.number2));
console.log(calculator.Multiply(calculator.number1, calculator.number2));
console.log(calculator.Divide(calculator.number1, calculator.number2))