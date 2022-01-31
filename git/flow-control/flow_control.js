// ********** LOOPS ******

// for loops

// initialization & condition & expression

// let index = 1;
// for(let i = 0 ;i<10; i++){
//     console.log(index + " in loop :" + i);
//     index++;
// }
// console.log("loop finished");

// ****** ARRAY *******

// let cities = ["Mysore","Bangalore","shimoga"];
// let index = 0;
// // console.log(cities[0]);
// // console.log(cities[1]);
// // console.log(cities[2])
// // console.log(cities.length)
// for( let i = 0; i< cities.length; i++){
//     // console.log(i);
//     console.log(index + " : " + cities[i])
//     index++;
// }

// let cars = ["BMW","honda","hundai","audi","tata"]
// let index =0;
// for(let i = 0; i< cars.length ; i++ ){
//     // console.log(cars[i])
//     let html  = `<div> ${cars[i]} </div>`;
//     console.log(html)
//     // document.getElementById("car").innerHTML = html;
// }

// ***** WHILE LOOP *******
// const names = ["rashmi", "rakshith", "rahul"]
// let i =0;
// while(i<5){
//     console.log(i);
//     i++
// }
// ***** while loop with array
// const names = ["rashmi", "rakshith", "rahul"]
// let i = 0;
// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }
// **** DO WHILE LOOP *****
// let i =0;
// do {
//     console.log(i)
//     i++;
// } while (i<0);
// ***** if the condition inside loop fails 
// it will come out of loop
// for(let i=0;i<-1;i++){
//     console.log("error");
// }
// console.log("loop finished");

// let fname = "rashmi";
// if(fname === 'ras'){
//     console.log("sting match");
// }
// else{
//     console.log("string doesnt match")
// }

//  **** IF STATEMENTS ****
// const age = 20;
// if(age > 18){
//     console.log("Your elligible for voting");
// }
// else{
//     console.log("Your not elligible for voting");
// }

// IF statements with arrays
// const cities = ["Mysore","banglore","shimoga"];
// console.log(cities.length)
// if(cities.length > 2){
//     console.log("that's a lot of cities ");
// }

// password
// const password = 'irashmikr';
// if(password.length >= 8){
//     console.log("Password is strong");
// }
// else
// {
//     console.log("Password is weak");
// }

// let password = document.getElementById('password');
// let btn = document.getElementById('myBtn');
// btn.addEventListener('click',show);
// function show(){
//      password.innerHTML = password.type = "text";
// }

// ***** Show and Hide password

// let passwordInput = document.getElementById('txtPassword'),
//     toggle = document.getElementById('btnToggle'),
//     icon =  document.getElementById('eyeIcon'),
//     userName = document.getElementById('userName'),
//     subscibe = document.getElementById('subscribe');

// function togglePassword() {
//   if (passwordInput.type === 'password') {
//     passwordInput.type = 'text';
//     icon.classList.add("fa-eye-slash");
//   } else {
//     passwordInput.type = 'password';
//     icon.classList.remove("fa-eye-slash");
//   }
// }

// function subscriber(){
//     if(passwordInput.value === "" || passwordInput.value === "null")
//     {
//         alert("Please enter the password");
//     }
//     else
//     {
//         alert("Thank you for subscribing " + userName.value);
//     }
// }

// toggle.addEventListener('click', togglePassword, false);
// subscibe.addEventListener('click',subscriber)


// let button = document.getElementById('btnToggle');
// button.addEventListener('click',findLength);
// function findLength(){
  // let userName = document.getElementById('userName').value;
  // console.log(userName.length);
  // document.getElementById('display').innerHTML = "The string length is" + " " +userName.length;
  // console.log(userName[0])
  // console.log(userName.length-1);
  // for(let i = 0;i<=userName.length-1;i++){
  //   console.log(userName[i]);
  // }
  // let uName = userName.toUpperCase();
  // let uName = userName.toLowerCase();
  // document.getElementById('display').innerHTML = uName;
  // let firstChar = userName.slice(0,1);
  // let LowerCase  = firstChar.toLowerCase();
  // let remainingString = userName.slice(1,10);
  // let capitalize = remainingString.toUpperCase();
  // let MyName = LowerCase + capitalize ;
  
  // let capitalise = userName.toUpperCase();
  // let MyName = capitalise;
  // let MyName = userName.slice(0);
  // let firstSlice = userName.slice(0,1) ;
  // let secondSlice = userName.slice(0,2);
  // let thirdSlice = userName.slice(0,3);
  // let fourSlice = userName.slice(0,4);
  
  // let MyName = firstSlice.toLowerCase() +"\n" + secondSlice + "\n" + thirdSlice + "\n"+ fourSlice.toUpperCase();
  // document.getElementById('display').innerHTML = MyName; 
// }

// let myName = prompt("Enter your name");
// console.log(`My name is ${myName.toLowerCase()}`);
// console.log(`My name is ${myName.toUpperCase()}`);
// document.getElementById('display').innerHTML = `My name is ${myName.toLowerCase()}`;
// document.getElementById('display').innerHTML = `My name is ${myName.toUpperCase()}`;
// slice
// document.getElementById('display').innerHTML = `My name is ${myName.slice(0,1)}`;

let userName = "rashmikr";
let firstChar = userName.slice(0,1);
let remChar = userName.slice(1,8);
console.log(firstChar);
let capitalise =  firstChar.toUpperCase();
console.log(capitalise)
let myName = capitalise + remChar
console.log(myName)

