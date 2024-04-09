let contactForm = document.forms["formContact"]

// if(document.forms["formContact"].nom.value){}
// if(document.forms["formContact"].societe.value){}
// if(document.forms["formContact"].email.value){}
// if(document.forms["formContact"].telephone.value){}
// if(document.forms["formContact"].message.value){}

function returnContact(){
    let message = ""
    message = "Votre prénom est : " + document.forms["formContact"].firstname.value + "\n" + 
    "Vous nom de famille est : " + document.forms["formContact"].lastname.value + "\n" +
    "Votre email : " + document.forms["formContact"].email.value + "\n" +
    "L'objet de votre message : " + document.forms["formContact"].objet.value + "\n" + 
    "Votre message : " + document.forms["formContact"].message.value
    alert(message)
}