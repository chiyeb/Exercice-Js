async function verifierFormulaire(event) {
    event.preventDefault();
    var formulaireValide = true;
    if (!verifCheckBox(document.getElementsByName("civilite"))) {
        alert("Choisissez une civilité")
        formulaireValide = false;
    }
    if (!document.getElementById("nom").value || /\d/.test(document.getElementById("nom").value)) {
        alert("Entrez un nom valide");
        formulaireValide = false
        document.getElementById("nom").value = "";
    }
    if (!document.getElementById("prenom").value || /\d/.test(document.getElementById("prenom").value)) {
        alert("Entrez un prénom valide");
        formulaireValide = false;
        document.getElementById("prenom").value = "";
    }
    if (!/\S+@\S+\.\S+/.test(document.getElementById("email").value)) {
        alert("L'adresse e-mail n'est pas valide.");
        formulaireValide = false;
        document.getElementById("email").value = "";
    }
    if (!/\+33\d{9}/.test(document.getElementById("telephone").value)) {
        alert("Le numéro de téléphone n'est pas valide");
        formulaireValide = false;
        document.getElementById("telephone").value = "";
    }
    if ((document.getElementById("codePostal").value).length < 5 || !/\d/.test(document.getElementById("codePostal").value)) {
        alert("Code postal non valide");
        formulaireValide = false;
        document.getElementById("codePostal").value = "";
    }
    if (!verifCheckBox(document.getElementsByName("typeCarte"))) {
        alert("Veuillez choisir un type de carte");
        formulaireValide = false;
    }
    if (!document.getElementById("numeroCarte").value || !/\d{16}/.test(document.getElementById("numeroCarte").value)) {
        alert("Numéro de carte non valide");
        formulaireValide = false;
        document.getElementById("numeroCarte").value = "";
    }
    if (!document.getElementById("ville").value || /\d/.test(document.getElementById("ville").value)){
        alert("La ville n'est pas valide");
        formulaireValide = false;
        document.getElementById("ville").value = '';
    }
    if (!document.getElementById("codeSecurite").value || !/\d{3}/.test(document.getElementById("codeSecurite").value)) {
        alert("Code de sécurité non valide");
        formulaireValide = false;
        document.getElementById("codeSecurite").value = "";
    }
    if (formulaireValide) document.getElementById("Formulaire").submit();
    else{
        return false;
    }
}
function verifCheckBox(choix){
    var choisis = false;

    for (var i = 0; i < choix.length; i++) {
        if (choix[i].checked) {
            choisis = true;
            break;
        }
    }
    return choisis;
}
