// import '../styles/payment-form.scss';

let nameCard = document.getElementById("name-on-card");
let cardNumber = document.getElementById("card-number");
let cardExpiryDate = document.getElementById("card-expiry-date");
let cardCvv = document.getElementById("card-cvv");
let nextStepButton = document.getElementById("next-step-button");

let isNameCard = nameCard.value.length > 0;
let isCardNumber = validateCardNumber(cardNumber.value);
let isCardExpiryDate = cardExpiryDate.value.length > 0;
let isCardCvv = cardCvv.value.length > 0;

correctData();

nameCard.addEventListener("keyup", (event) => {
    if (nameCard.value.length > 0) {
        isNameCard = true;
    }
    else {
        isNameCard = false;
    }

    correctData();
});

cardNumber.addEventListener("keyup", (event) => {
    if (validateCardNumber(cardNumber.value)) {
        isCardNumber = true;
    }
    else {
        isCardNumber = false;
    }

    correctData();
});

cardExpiryDate.addEventListener("keyup", (event) => {
    if (cardExpiryDate.value.length > 0) {
        isCardExpiryDate = true;
    }
    else {
        isCardExpiryDate = false;
    }

    correctData();
});

cardCvv.addEventListener("keyup", (event) => {
    if (cardCvv.value.length > 0) {
        isCardCvv = true;
    }
    else {
        isCardCvv = false;
    }

    correctData();
});

nameCard.addEventListener("keydown", (event) => {
    var regex = RegExp(/^[A-Za-z\s]*$/g)
    var key = event.key;

    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
});

cardNumber.addEventListener("keydown", (event) => {
    var regex = RegExp(/^[0-9\s]*$/g)
    var key = event.key;

    if (key !== "Backspace") {
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }

        if (cardNumber.value.length == 4 || cardNumber.value.length == 9 || cardNumber.value.length == 14) {
            cardNumber.value = cardNumber.value + " ";
        }
    }
});

cardExpiryDate.addEventListener("keydown", (event) => {
    var regex = RegExp(/^[0-9]*$/g);
    var key = event.key;

    if (key !== "Backspace") {
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }

        if (cardExpiryDate.value.length == 2) {
            cardExpiryDate.value = cardExpiryDate.value + "/";
        }

        if (cardExpiryDate.value.length == 5) {
            event.preventDefault();
        }
    }        
});

cardCvv.addEventListener("keydown", (event) => {
    var regex = RegExp(/^[0-9]*$/g);
    var key = event.key;

    if (key !== "Backspace") {
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }

        if (cardCvv.value.length == 3) {
            event.preventDefault();
        }
    } 
});

nextStepButton.addEventListener("click", (event) => {
    alert("Sukces");
});

function correctData() {
    if (isNameCard && isCardNumber && isCardExpiryDate && isCardCvv) {
        nextStepButton.removeAttribute("disabled");
    } else {
        nextStepButton.setAttribute("disabled", "");
    }
}

function validateCardNumber(numbers) {
    let cardno = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
    numbers = numbers.replace(/\s/g, "");
    if (numbers.match(cardno) && numbers.length === 16) {
        return true;
    }
    else {
        return false;
    }
}