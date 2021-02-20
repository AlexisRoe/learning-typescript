// the ! means that I´m sure as a developer that the selected element exists, because ts can`t access the html
// ... as HTMLInputElement tells ts compiler what kind of methods are available
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var output = document.getElementById("output");
function addInput(input1, input2) {
    var result = Number(input1) + Number(input2);
    return result.toString();
}
// input.values are always type string -> you have to convert it first
button.addEventListener("click", function () {
    output.innerText = "Result: " + addInput(input1.value, input2.value);
});
