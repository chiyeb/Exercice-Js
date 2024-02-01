function calcul(nb1, nb2, op){
    switch (op){
        case "+":
            return nb1 + nb2;
            break;
        case "-":
            return nb1 - nb2;
            break;
        case "*":
            return nb1 * nb2;
            break;
        case "/":
            if (nb2 == 0){
                return "erreur";
            }
            return nb1 / nb2;
            break;
    }
}
function recupEntry(){
    var nb1 = document.getElementsByName("number1")[0].value;
    var nb2 = document.getElementsByName("number2")[0].value;
    var operator = document.getElementsByName("operator")[0].value;
    var result = calcul(parseFloat(nb1), parseFloat(nb2), operator)
    document.getElementsByName("result")[0].textContent = result;
}