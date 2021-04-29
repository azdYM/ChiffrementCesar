
/**
 * Fonction qui permet de renvoiyer la lettre decaler 
 * @param {string} lettre 
 * @param {*int} key 
 * @param {*array} array 
 * @returns 
 */
const lettreChiffrer = (lettre, key, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].toUpperCase() == lettre.toUpperCase()) {


console.log(i-key);
            return array[i+key]
        }
        
    }
    return lettre;
}

let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

const decrypteCesarMessage = () => {
    
    let code = document.querySelector(".code").value;

    const afficher_message_dechiffrer = document.querySelector(".dechiffrer ul");
    let messageDechiffrer = "";
    let m = [];
    let li = [];

    //On verifie et convertie la cle recuperer sur l'input
    

    //On dechiffre notre code
    for (let k = 0; k < 26; k++) {

        for (let i in code) {
            lettre = code.substr(i, 1)
            
            messageDechiffrer += lettreChiffrer(lettre, k, alphabet);

            
        }

        m.push(messageDechiffrer);
        messageDechiffrer = '';
        
    }

    for (let i = 0; i < m.length; i++) {
        const element = m[i];
        item = li[i];
        item = document.createElement("li")
        item.textContent = element;
        
        afficher_message_dechiffrer.appendChild(item)


        
    }

}

/**
 * recupere le message et afficher le message coder sur le DOM
 */

const encrypteCesarMessage = () => {
    

    let key = document.querySelector(".key").value;
    let message = document.querySelector(".message").value;

    let messageChiffrer = "";

    const afficher_message_chiffrer = document.querySelector(".message-chiffrer");

    

    //On verifie et convertie la cle recuperer sur l'input
    if (isNaN(key)) {
        alert("la cle doit etre un nombre ");
    }else{
        key = parseInt(key);
    }
    
    //On chiffre notre message
    for (let i in message) {
        lettre = message.substr(i, 1)
        messageChiffrer += lettreChiffrer(lettre, key, alphabet);
        
    }

    

    console.log(messageChiffrer);

    if ("undefined" === messageChiffrer.substr(0, 9)) {
        alert("Votre cle doit etre un nombre compris entre 1 et 25 ");
    }else{

        //On affiche le message chiffrer
        afficher_message_chiffrer.innerHTML = messageChiffrer;
    }
    
    
    
      

}









