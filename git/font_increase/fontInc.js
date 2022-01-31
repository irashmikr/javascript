let text = document.getElementById('text').style.fontSize = "20px";
let fons = parseInt(text);
console.log(fons);
function fontIncrease(){
    if(fons < 40)
    {
        // alert("Say hello");
        fons = fons + 1;
        console.log(fons)
        document.getElementById('text').style.fontSize = fons + "px";
      }
    else
    {
        document.getElementById('err').innerHTML = "Error : cannot increase above 40 px";
     let btn = document.getElementById('btn').innerHTML = "decrease";
document.getElementById('btn').addEventListener('click',function(){
    if(fons > 5)
        {
            fons = fons - 1;
            document.getElementById('text').style.fontSize = fons + "px";
        }
        else
        {
            document.getElementById('err').innerHTML = "Error : cannot decrease below 5px";
        }
     
}); 

     
    }
        
}

