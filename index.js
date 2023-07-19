const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById("pass-el-1")
let pass2 = document.getElementById("pass-el-2")
let passLenght = 15

function generatePassword() {
    let passwordVar = ""
    for ( i = 0 ; i < passLenght; i++ ) {
        passwordVar += generateRandomChar()
    } 
    return passwordVar   
}

function generateRandomChar() {
    let randomChar = Math.floor( Math.random() * characters.length - 1)  
    return characters[randomChar]    
} 

function clickPassword () {
    if (pass1.textContent === "") {
        pass1.textContent = generatePassword()    
    }
    else {
        pass2.textContent = generatePassword()    
    }
}

console.log(pass1)







