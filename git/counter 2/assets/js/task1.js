let count = 0;

function increment(){
    if(count === 0 || count < 10){
        count = count + 1;
        document.getElementById('number').innerHTML = count;
    }
    if(count === 10){
        return false;
    }
}

function decrement(){
    if(count === 10 || count > 0){
        count = count - 1;
        document.getElementById('number').innerHTML = count;
    }
    if(count === 0){
        return false;
    }
}
