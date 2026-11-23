function appendToDisplay(data) {document.querySelector("#display").value += data
}
function clearDisplay() {document.querySelector("#display").value = ""}
function result(){
    const display = document.querySelector("#display")
    try {
        display.value = eval(display.value)
    } catch {display.value = "Erro"}
}