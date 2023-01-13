var num1 = Number(prompt("Enter the first number"));

do {
    var operation = Number(prompt("Enter the operation\n1.Sum\n2.Subtraction\n3.Multiplication\n4.Division\n5.Modules\n6.Exit"));
    if (operation < 6 && operation > 0) {
        var num2 = Number(prompt("Enter the second number"));

        var result;

        switch (operation) {
            case 1: result = num1 + num2; break;
            case 2: result = num1 - num2; break;
            case 3: result = num1 * num2; break;
            case 4: result = num1 / num2; break;
            case 5: result = num1 % num2; break;

        }
        alert("Result: " + result);
        num1 = result;
    }
    if (operation > 6 || operation < 0) alert("Enter a valid operation");

} while (operation!=6)






