let greetUser = function () {
    console.log("Hello world!");
}

greetUser();

let square = function (num) {
    let result = num * num;
    return result;
}

let value1 = square(2);
let secondValue = square(3);
console.log(value1);
console.log(secondValue);

// challenge area

let farToCelsius = function (far) {
    let cel = (far - 32) * 5/9;
    return cel
}

let result = farToCelsius(32);
let result1 = farToCelsius(68);
console.log(result)
console.log(result1)