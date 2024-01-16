const inputButton = document.getElementById("message-input");
const submitButton = document.getElementById("submit-btn");
const outputMessage = document.getElementById("message-output");

function getMessage() {
    outputMessage.innerText = inputButton.value;
    inputButton.value = "";
}

submitButton.addEventListener("click", getMessage);
inputButton.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        getMessage();
    }
});