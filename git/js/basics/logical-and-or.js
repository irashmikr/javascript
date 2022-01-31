let temperature = 0;

// Logical And Operator
// if((temperature >= 60) && (temperature<=90)){
//     console.log('It is pretty nice out');
// }

if( temperature <= 0 || temperature >= 120)
{
    console.log("Dont go outside")
}

// challenge area
let isGuessOneVegan = false;
let isGuessTwoVegan = false;

if(isGuessOneVegan && isGuessTwoVegan){
    console.log("Only offer vegan dishes");
}else if(isGuessOneVegan || isGuessTwoVegan){
    console.log("Make sure to offer up some vegan options")
} else{
    console.log("Offer up anything on the menu");
}
