// GLOBAL 
let pDecrBtn = document.getElementById("pMinBtn");
let pIncrBtn = document.getElementById("pPlusBtn");
let sDecrBtn = document.getElementById("sMinBtn");
let sIncrBtn = document.getElementById("sPlusBtn");
let calcBtn = document.getElementById("calcBtn");
let pQty = document.getElementById("pQtyLbl");
let sQty = document.getElementById("sQtyLbl");



// FUNCTIONS
function decreaseValue(){
    // let pDecQty = parseInt(pQty.innerHTML)-1;
    // pQty.innerHTML=pDecQty;

}

function increaseValue(){
    let pIncQty = parseInt(pQty.innerHTML)+1;
    pQty.innerHTML=pIncQty;
}

function calcSubtotal(){
    alert(`subTotal`);
}

function calcTax(){
    alert(`Tax`);
}

function calcTotal(){
    alert(`Total`);
}

// EXE
pDecrBtn.addEventListener("click",decreaseValue);
pIncrBtn.addEventListener("click",increaseValue);
sDecrBtn.addEventListener("click",decreaseValue);
sIncrBtn.addEventListener("click",increaseValue);
calcBtn.addEventListener("click",calcTax);
