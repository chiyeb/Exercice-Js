function calcul(nb1, nb2, op){
    switch (op){
        case "+":
            return nb1 + nb2;
        case "-":
            return nb1 - nb2;
        case "*":
            return nb1 * nb2;
        case "/":
            if (nb2 === 0){
                return "erreur";
            }
            return nb1 / nb2;
    }
}

function recupEntry(){
    var nb1 = parseFloat(document.getElementById("number1").value);
    var nb2 = parseFloat(document.getElementById("number2").value);
    var operator = document.getElementById("operator").value;

    if (!isNaN(nb1) && !isNaN(nb2)) {
        var result = calcul(nb1, nb2, operator);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").textContent = "Entrées non valides";
    }
}
