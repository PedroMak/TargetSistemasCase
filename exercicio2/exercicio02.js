function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciCheck(number){
    var i = 0;
    var fibonacciNumber;

    do{
        fibonacciNumber = fibonacci(i);
        console.log(fibonacciNumber);
        i++;
    }while(fibonacciNumber < number);

    return (fibonacciNumber == number);
}

var entrada = 10;

if(fibonacciCheck(entrada)){
    console.log(entrada + " pertence")
}else{
    console.log(entrada + " não pertence")
}

