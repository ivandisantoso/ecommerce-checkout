//fetch the buttons
let minusButton = document.getElementById("pantsMinusBut") ;
let addButton = document.getElementById("pantsAddBut");
let label = document.getElementById("pantsQty");

//create functions
function increaseValue()
{
 // get quantity from the innerHTML
 // increase value by 1
 //then assign that new value to the innerHTML

 let qty = parseInt(label.innerHTML)+1;

  label.innerHTML=qty;
}

function decreaseValue()
{
  
  let qty = parseInt(label.innerHTML)-1;
  label.innerHTML=qty;
}



// add our eventlisteners
addButton.addEventListener("click",increaseValue);

minusButton.addEventListener("click",decreaseValue);

