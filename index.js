// Code your solutions in this file
function wrapGifts(string, event){
    newArray=[]
    for(i=0; i < string.length;i++){
        console.log(`Thank you, ${string[i]}, for the wonderful ${event} gift!`)
        newArray.push(string[i])
    }

    return newArray
}

function countdown(n) {
    let countdown = n;
    while (countdown >= 0) {
        console.log(countdown)
        countdown--
    }
}


countdown(10)
wrapGifts(["Ada", "Brendan", "Ali"], "birthday")
