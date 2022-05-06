let emailInput = ""
let passwordInput = ""
let button
let accounts
    

function setup() {
   createCanvas(200, 400)
    background('ffffff')
    createInputs()
    accounts = [new Account("Jake@mail.com", "Orange"), new Account("Elizabeth@mail.com", "Apple"), new Account("Helen@mail.com", "Banana"), new Account("Chloe@mail.com", "Kiwi")]
}
//This function creates the textboxes and button
function createInputs(){
    let eField = createInput()
    let pField = createInput()
    textSize(12);
    text('email', 10, 10);
    eField.position(10, 30)
    eField.size(100)
    eField.input(onEmailInput)
    textSize(12);
    text('password', 10, 70);
    pField.position(10, 90)
    pField.size(100)
    pField.input(onPasswordInput)
    button = createButton('Submit');
    button.position(10, 140);
    button.mousePressed(onSubmit);
}


function onSubmit(){
    //3. This function is called when the submit button is pressed,
    // add code to check whether the username and password is correct

    let activeAccount

    for(let i = 0; i < accounts.length; i++){
        if(accounts[i].getEmail() == emailInput){
          activeAccount = accounts[i]
          
          
        }
        
    }

    if (activeAccount){
        alert("yes")
    }
}

//Sets the emailInput to whatever the user types in the email field
function onEmailInput(){
    emailInput = this.value()
}
//Sets the passwordInput to whatever the user types in the password field
function onPasswordInput(){
    passwordInput = this.value()
}
//1. Complete the implementation of this account class
class Account{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    getEmail(){
        return this.email
    }
    getPassword(){
        return this.password
    }
}
