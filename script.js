const ERROR_SHORTGENERAL = "Bitte, verwende ein Namen mit min. drei und einer Nachricht mit min. fünf Buchstaben";
const ERROR_SHORTNAME = "Bitte, gib einen Namen mit min. drei Buchstaben ein";
const ERROR_SHORTMESSAGE = "Bitte, gib eine Nachricht mit min. fünf Buchstaben ein";

let messageCounter = 0;


function sendMessage() {
    let errorArea = document.getElementById('errorArea');
    errorArea.classList.add('dnone');
    let name = document.getElementById('inputName');
    let message = document.getElementById('inputMessage');

    if (name.value.length < 3 && message.value.length < 5) {
        displayErrorMessage(ERROR_SHORTGENERAL)
    }
    else if (name.value.length < 3) {
        displayErrorMessage(ERROR_SHORTNAME)
    } else if (message.value.length < 5) {
        displayErrorMessage(ERROR_SHORTMESSAGE)
    } else {
        addMessage(name.value, message.value);
    }
}

function displayErrorMessage(myErrorMessage) {
    let errorArea = document.getElementById('errorArea');
    let errorMessage = document.getElementById('errorMessage');
    errorArea.classList.remove('dnone');
    errorMessage.innerText = myErrorMessage;
}

function addMessage(name, message) {
    messageCounter++;
    messageAreas = document.getElementById('messageAreas');

    //Create
    const myNewDiv = document.createElement("div");
    //Change
    myNewDiv.innerHTML = `<p><b>${name}: </b></p><p>${message}</p>`;
    myNewDiv.classList.add('flexROW_xSpaceBetween');
    if (messageCounter % 2 == 0) {
        myNewDiv.classList.add('odd');
    }
    else {
        myNewDiv.classList.add('even');
    }

    //Append
    messageAreas.appendChild(myNewDiv);
    window.scrollTo(0, document.body.scrollHeight); //springt ans ende der seite


}

function toogleDisplayMode() {
    let heroContent = document.getElementById('heroContent');
    let body = document.getElementById('body');

    body.classList.toggle('dark');
    if (heroContent.classList.contains('sectionEntryContenBright')) {
        heroContent.classList.remove('sectionEntryContenBright');
        heroContent.classList.add('sectionEntryContenDark');
    } else {
        heroContent.classList.remove('sectionEntryContenDark');
        heroContent.classList.add('sectionEntryContenBright');
    }
}