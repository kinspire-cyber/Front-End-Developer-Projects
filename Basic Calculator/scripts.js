// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function clear all the values
function clearscreen() {
    document.getElementById("result").value = "";
}
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}