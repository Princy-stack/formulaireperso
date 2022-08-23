var nameInput = document.getElementById("name_container");
var firstInput = document.getElementById("firstname_container");
var ageInput = document.getElementById("age_container");
var birthInput = document.getElementById("birth_container");
var adresseInput = document.getElementById("adresse_container");
var numberInput = document.getElementById("number_container");

var blocName = document.getElementById("bloc_name");
var blocFirst = document.getElementById("bloc_first");
var blocAge = document.getElementById("bloc_age");
var blocBirth = document.getElementById("bloc_birth");
var blocAdresse = document.getElementById("bloc_adresse");
var blocNumber = document.getElementById("bloc_number");

nameInput.onkeyup = function() {
    var nameValue = nameInput.value;
    blocName.innerText = nameValue;
}
firstInput.onkeyup = function() {
    var firstValue = firstInput.value;
    blocFirst.innerText = firstValue;
}
ageInput.onkeyup = function() {
    var ageValue = ageInput.value;
    blocAge.innerText = ageValue;
}
birthInput.onkeyup = function() {
    var birthValue = birthInput.value;
    blocBirth.innerText = birthValue;
}
adresseInput.onkeyup = function() {
    var adresseValue = adresseInput.value;
    blocAdresse.innerText = adresseValue;
}
numberInput.onkeyup = function() {
    var numberValue = numberInput.value;
    blocNumber.innerText = numberValue;
}
