//Création du formulaire en JS
document.addEventListener('DOMContentLoaded', function() {
    // Créer le formulaire
    var form = document.createElement('form');
    form.id = 'Formulaire';
    form.setAttribute('onsubmit', 'verifierFormulaire(event)');

    // Étape 1: Identité
    var fieldset1 = document.createElement('fieldset');
    var legend1 = document.createElement('legend');
    legend1.textContent = 'Étape 1 : Identité';
    fieldset1.appendChild(legend1);

    // Civilité
    var labelCivilite = document.createElement('label');
    labelCivilite.textContent = 'Civilité';
    fieldset1.appendChild(labelCivilite);

    var inputMonsieur = document.createElement('input');
    inputMonsieur.type = 'radio';
    inputMonsieur.name = 'civilite';
    inputMonsieur.value = 'Monsieur';
    fieldset1.appendChild(inputMonsieur);
    fieldset1.appendChild(document.createTextNode(' Monsieur'));

    var inputMadame = document.createElement('input');
    inputMadame.type = 'radio';
    inputMadame.name = 'civilite';
    inputMadame.value = 'Madame';
    fieldset1.appendChild(inputMadame);
    fieldset1.appendChild(document.createTextNode(' Madame'));

    // Nom
    var labelNom = document.createElement('label');
    labelNom.textContent = 'Nom: ';
    var inputNom = document.createElement('input');
    inputNom.type = 'text';
    inputNom.id = 'nom';
    inputNom.name = 'nom';
    inputNom.placeholder = 'Champ obligatoire';
    inputNom.required = true;
    labelNom.appendChild(inputNom);
    fieldset1.appendChild(labelNom);

    // Prénom
    var labelPrenom = document.createElement('label');
    labelPrenom.textContent = 'Prénom: ';
    var inputPrenom = document.createElement('input');
    inputPrenom.type = 'text';
    inputPrenom.id = 'prenom';
    inputPrenom.name = 'prenom';
    inputPrenom.placeholder = 'Champ obligatoire';
    inputPrenom.required = true;
    labelPrenom.appendChild(inputPrenom);
    fieldset1.appendChild(labelPrenom);

    // Email
    var labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email: ';
    var inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.placeholder = 'example@domain.com';
    inputEmail.required = true;
    labelEmail.appendChild(inputEmail);
    fieldset1.appendChild(labelEmail);

    // Téléphone
    var labelTelephone = document.createElement('label');
    labelTelephone.textContent = 'Téléphone: ';
    var inputTelephone = document.createElement('input');
    inputTelephone.type = 'tel';
    inputTelephone.id = 'telephone';
    inputTelephone.name = 'telephone';
    inputTelephone.placeholder = 'par ex: +330000000000';
    labelTelephone.appendChild(inputTelephone);
    fieldset1.appendChild(labelTelephone);

    form.appendChild(fieldset1);

    // Étape 2: Adresse de livraison
    var fieldset2 = document.createElement('fieldset');
    var legend2 = document.createElement('legend');
    legend2.textContent = 'Étape 2 : Adresse de livraison';
    fieldset2.appendChild(legend2);

    // Adresse
    var labelAdresse = document.createElement('label');
    labelAdresse.textContent = 'Adresse: ';
    var textareaAdresse = document.createElement('textarea');
    textareaAdresse.id = 'adresse';
    textareaAdresse.name = 'adresse';
    textareaAdresse.required = true;
    labelAdresse.appendChild(textareaAdresse);
    fieldset2.appendChild(labelAdresse);

    // Code postal
    var labelCodePostal = document.createElement('label');
    labelCodePostal.textContent = 'Code postal: ';
    var inputCodePostal = document.createElement('input');
    inputCodePostal.type = 'text';
    inputCodePostal.id = 'codePostal';
    inputCodePostal.name = 'codePostal';
    inputCodePostal.required = true;
    labelCodePostal.appendChild(inputCodePostal);
    fieldset2.appendChild(labelCodePostal);

    // Ville
    var labelVille = document.createElement('label');
    labelVille.textContent = 'Ville: ';
    var inputVille = document.createElement('input');
    inputVille.type = 'text';
    inputVille.id = 'ville';
    inputVille.name = 'ville';
    inputVille.required = true;
    labelVille.appendChild(inputVille);
    fieldset2.appendChild(labelVille);

    form.appendChild(fieldset2);

    // Étape 3: Informations CB
    var fieldset3 = document.createElement('fieldset');
    var legend3 = document.createElement('legend');
    legend3.textContent = 'Étape 3 : Informations CB';
    fieldset3.appendChild(legend3);

    // Type de carte bancaire
    var labelTypeCarte = document.createElement('label');
    labelTypeCarte.textContent = 'Type de carte bancaire';
    fieldset3.appendChild(labelTypeCarte);

    var inputVisa = document.createElement('input');
    inputVisa.type = 'radio';
    inputVisa.name = 'typeCarte';
    inputVisa.value = 'VISA';
    fieldset3.appendChild(inputVisa);
    fieldset3.appendChild(document.createTextNode(' VISA'));

    var inputAmEx = document.createElement('input');
    inputAmEx.type = 'radio';
    inputAmEx.name = 'typeCarte';
    inputAmEx.value = 'AmEx';
    fieldset3.appendChild(inputAmEx);
    fieldset3.appendChild(document.createTextNode(' AmEx'));

    var inputMastercard = document.createElement('input');
    inputMastercard.type = 'radio';
    inputMastercard.name = 'typeCarte';
    inputMastercard.value = 'Mastercard';
    fieldset3.appendChild(inputMastercard);
    fieldset3.appendChild(document.createTextNode(' Mastercard'));

    // Numéro de carte
    var labelNumeroCarte = document.createElement('label');
    labelNumeroCarte.textContent = 'Numéro de carte: ';
    var inputNumeroCarte = document.createElement('input');
    inputNumeroCarte.type = 'text';
    inputNumeroCarte.id = 'numeroCarte';
    inputNumeroCarte.name = 'numeroCarte';
    inputNumeroCarte.required = true;
    labelNumeroCarte.appendChild(inputNumeroCarte);
    fieldset3.appendChild(labelNumeroCarte);

    // Code sécurité
    var labelCodeSecurite = document.createElement('label');
    labelCodeSecurite.textContent = 'Code sécurité: ';
    var inputCodeSecurite = document.createElement('input');
    inputCodeSecurite.type = 'text';
    inputCodeSecurite.maxLength = 3;
    inputCodeSecurite.id = 'codeSecurite';
    inputCodeSecurite.name = 'codeSecurite';
    inputCodeSecurite.required = true;
    labelCodeSecurite.appendChild(inputCodeSecurite);
    fieldset3.appendChild(labelCodeSecurite);

    form.appendChild(fieldset3);

    // Bouton de soumission
    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'VALIDER';
    form.appendChild(submitButton);

    // ajout du formulaire au document
    document.body.appendChild(form);
});


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
