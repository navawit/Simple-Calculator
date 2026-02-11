function append(value){
    document.getElementById("display").value+=value;
}

function clearDisplay(){
    document.getElementById("display").value="";
}

function deleteLast(){
    const display=document.getElementById("display");
    display.value=display.value.slice(0,-1);
}

function calculate(){
    let val=document.getElementById("display").value;
    try{
        let result=eval(val);
        document.getElementById("display").value=result;
     }catch(error){
        document.getElementById("display").value="error";
     }

}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value === "") {
        return;
    }
    try {
        const result = eval(display.value);
        display.value = String(-result);
    } catch (error) {
        display.value = "error";
    }
}

function squareValue() {
    const display = document.getElementById("display");
    if (display.value === "") {
        return;
    }
    try {
        const result = eval(display.value);
        display.value = String(result * result);
    } catch (error) {
        display.value = "error";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    const allowedKeys = "0123456789+-*/.%()";

    if (allowedKeys.includes(key)) {
        append(key);
        return;
    }

    if (key === "Enter") {
        event.preventDefault();
        calculate();
        return;
    }

    if (key === "Backspace") {
        event.preventDefault();
        deleteLast();
        return;
    }

    if (key === "Escape") {
        clearDisplay();
    }
});
