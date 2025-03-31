const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password-el")
let secondPasswordEl = document.getElementById("second-password-el")

function generatePassword() {
    let passwordOne = ""
    let passwordTwo = ""
    
    for (let i = 1; i < 16; i++) {
        let randomCharacterOne = Math.floor(Math.random() * characters.length)
        let randomCharacterTwo = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomCharacterOne]
        passwordTwo += characters[randomCharacterTwo]
    }
    
    firstPasswordEl.textContent = passwordOne
    secondPasswordEl.textContent = passwordTwo
}

function copyPassword(event) {
    let copyText = event.target.textContent

    if (copyText === "") {
        return
    } else {
        navigator.clipboard.writeText(copyText)
        alert("Password copied: " + copyText)
    }
}