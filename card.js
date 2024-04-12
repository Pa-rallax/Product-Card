const container = document.querySelector(".main")
const colour1 = document.querySelector("#colour1")
const colour2 = document.querySelector("#colour2")
const sizes = document.querySelector(".sizes")
const type1 = document.querySelector(".type1")
const type2 = document.querySelector(".type2")
const type3 = document.querySelector(".type3")
const colourType = document.querySelector("#colourType")

//Colour Change
colour2.addEventListener("click", changeColour);
function changeColour() {
    container.classList.add("change")
    colourType.textContent = "Titan Gold"
}

colour1.addEventListener("click", colourBack);
function colourBack() {
    container.classList.remove("change")
    colourType.textContent = "Obsidian Black"
}


//Type Switch
type1.classList.add("special")

type1.addEventListener("click", forty);
function forty() {
    this.classList.add("special")
    type2.classList.remove("select");
    type3.classList.remove("select");

}

type2.addEventListener("click", fortyPro);
function fortyPro() {
    this.classList.add("select")
    type1.classList.remove("special");
    type3.classList.remove("select");

}


type3.addEventListener("click", fortyProPlus);
function fortyProPlus() {
    this.classList.add("select")
    type1.classList.remove("special");
    type2.classList.remove("select");
   
}