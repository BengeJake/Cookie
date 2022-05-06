function setup() {
    let playing = true
    let answer = 5
    let message = 'Guess a number'

    while(playing){
        
        //let guess = Number(prompt(message))
        for(let attempts = 1; attempts <= 3; attempts++){
            let guess = Number(prompt(message))

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
        // if(guess == answer){
        //     playing = false
        // }else if(guess > answer){
        //     message = 'Too high!'
        // }else{
        //     message = 'Too low!'
        // }
    }
    alert("YOU WON")
} 