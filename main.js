"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var output = document.getElementById("output");
function addInput(input1, input2) {
    var result = Number(input1) + Number(input2);
    return result.toString();
}
button.addEventListener("click", function () {
    output.innerText = "Result: " + addInput(input1.value, input2.value);
});
