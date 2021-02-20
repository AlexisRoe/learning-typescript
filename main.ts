// the ! means that I´m sure as a developer that the selected element exists, because ts can`t access the html
// ... as HTMLInputElement tells ts compiler what kind of methods are available
const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const output = document.getElementById("output")! as HTMLDivElement;

function addInput(input1: string, input2: string):string {
    const result = Number(input1) + Number(input2);
    return result.toString();
}

// input.values are always type string -> you have to convert it first
button.addEventListener("click", function() {
    output.innerText = `Result: ${addInput(input1.value, input2.value)}`;
});