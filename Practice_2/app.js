
function TestPrime(num){
    if (num <= 1) {
        return false;
    } else if(num === 2) {
        return true;
    } else {
        for(let x = 2; x < num; x++) {
            if(num % x === 0) {
                return false;
            }
        }
        return true;
    }
}

function FindPrimes(num) {
    let prime_numbers = [];

    for (let i = 1; i <= num; i++) {
        if (TestPrime(i) === true) {
            prime_numbers.push(i);
        }
    }
    return prime_numbers;
}


let button = document.getElementById("button");
button.addEventListener('click', function(e){
    e.preventDefault();

    let number = document.getElementById("textbox").value;
    let result = document.getElementById("result");

    const startTime = performance.now();
    result.innerHTML = TestPrime(number);
    const endTime = performance.now();
    console.log(endTime - startTime);
});


let button2 = document.getElementById("button2");
button2.addEventListener('click', function(e){
    e.preventDefault();

    let number = document.getElementById("textbox2").value;
    let result = document.getElementById("result2");

    const startTime = performance.now();
    result.innerHTML = FindPrimes(number);
    const endTime = performance.now();
    console.log(endTime - startTime);
});











