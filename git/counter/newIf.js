
   let count = document.getElementById('btn').value;
   let num = document.getElementById('btn').value;
function increment(){
   count++; 
   num++;
   document.getElementById('count').innerHTML = count;
   document.getElementById('num').innerHTML = num;
}


function decrement(){
    count-- ;
    num++ ;
    document.getElementById('count').innerHTML = count;
    document.getElementById('num').innerHTML = num;
}