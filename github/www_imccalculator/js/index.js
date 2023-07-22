function CalculerIMC() {
    let imc = poids.value/Math.pow(taille.value, 2);
    let message = "Vous etes en etat";
    console.log("message: ", message);
    if(imc < 16.5) {
        message += " de denutrition";
    }
    else if (imc >= 16.5 && imc < 18.5) {
        message += "  de maigreur";
    }
    else if (imc >= 18.5 && imc < 25) {
        message += "Vous avez un poids normal";
    } 
    else if (imc >= 25 && imc < 30) {
        message += " de surpoids";
    }
    else if (imc >= 30 && imc < 35) {
        message += " d'obésité modérée";
    }
    else if (imc >= 35 && imc < 40) {
        message += " d'obésité sévère";
    }
    else {
        message += " d'obésité morbide ou massive";
    }
    let interpretation = "Votre IMC est de: " + imc;
    interpretation += '<hr>' + message;
    console.log("interpretation: ", interpretation);
    let resultArea = document.querySelector('#resultat label');
    resultArea.innerHTML = interpretation;
    resultat.hidden=false;
    console.log("resultat: ", resultat);


}