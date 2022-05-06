function setup() {
  let playing = true
  //setting random
  let rand = Math.floor(random(1, 10))

  //starts of game
  while(playing){
    //user input
    let guess = Number(prompt("Guess a number between one and ten: "))

    //checks guess
    if(guess > rand){
      alert("thats too high, try again: ")
    }
    else if(guess < rand){      
      alert("thats too low, try again: ")
    }
    else (guess == rand);{
      alert("Well Done")
      playing = false
    }  
  }

}
  
  //testing 