function setup() {
    let playing = true
    let answer = 5
    let message = 'Guess a number'

    while(playing){
        
        let guess = Number(prompt(message))
        for(let attempts = 1; attempts <= 3; attempts++){

            if(guess == answer){
                playing = false
            }else if(guess > answer){
                message = 'Too high!'
            }else{
                message = 'Too low!'
            }  
            if (attempts > 3){
                break;
            }
        }
        
    }
    alert("YOU WON")
}