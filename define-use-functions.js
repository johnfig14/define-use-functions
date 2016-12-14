//1. Create function definitions:
    //Below is an example of a function definition, which are defined using the "function" keyword:
        function myMathFunction(x, y) {
            return x * y;
        }


//2. Create function expressions including anonymous ones:
    //Below is an example of function expression, specifically an anonmymous function (a function without a name);
        var x = function (a, b) {return a * b};
        var z = x(4, 3);


//3. Properly call functions:
    //Below is an example of invoking (calling) a function as a function:
        function myFunction(a, b) {
            return a * b;
        }
        myFunction(10, 2);


//4. Demonstrate nested functions and closures:
    //Below is an example of a nested functions, or, functions that have access to the scope "above" them:
        function add() {
            var counter = 0;
            function plus() {counter += 1;}
            plus();
            return counter;
        } 


    //Below is an example of a closure, which makes it possible for a function to have "private" variables:
        var subtract = (function () {
            var counter = 0;
            return function () {return counter -= 1;}
        })();

        subtract();
        subtract();
        subtract();


//5. Create a recursive function:
    //A recursive function is a function that calls itself. Here is an example:
        var countdown = function(value) {
            if (value > 0) {
                console.log(value);
                return countdown(value - 1);
            } else {
                return value;
            }
        };
        countdown(10);


//6. Use the arguments object:
    //Below is an example of argument objects, or, objects containing an array of  the arguments used when the function is called:
        x = findNumbers(10, 20, 30, 40, 50);


//7. Demonstrate function parameters including default ones:
    //Below is an example of default parameters, which can be used when parameters aren't known:
        function myFunction(x, y) {
            if (y === undefined) {
                y = 0;
            }
        }


//8. Use Arrow functions:
    //Example of an arrow function:
        let square = x => x * x;