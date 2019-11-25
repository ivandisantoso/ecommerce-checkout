// GLOBAL 
let pItem = document.getElementById("pItemLbl");
let pMinus = document.getElementById("pMinBtn");
let pQty = document.getElementById("pQtyLbl");
let pPlus = document.getElementById("pPlusBtn");
const pUnitPrice = document.getElementById ("pUnitPriceLbl");
let pExtPrice = document.getElementById ("pExtPriceLbl");

let sItem = document.getElementById(`sItemLbl`);
let sMinus = document.getElementById("sMinBtn");
let sQty = document.getElementById("sQtyLbl");
let sPlus = document.getElementById("sPlusBtn");
const sUnitPrice = document.getElementById ("sUnitPriceLbl");
let sExtPrice = document.getElementById ("sExtPriceLbl");

let calc = document.getElementById("calcBtn");
var plusBtn$;
pItem.innerHTML = `Pants`;
pUnitPrice.innerHTML = 40.99;
pExtPrice.innerHTML = 0.00;
sItem.innerHTML = `Shirt`;
sUnitPrice.innerHTML = 10.99;
sExtPrice.innerHTML = 0.00;



// const allItems = [
//     {
//         name: `Pants`,
//         qty: 1 ,
//         price: 40.99,  
//         extPrice: 40.99 
//     },{
//         name: `Shirt`,
//         qty: 1 ,
//         price: 10.99,
//         extPrice: 10.99 
//     }
// ];


// FUNCTIONS


// function incrItem(item, i) {
//     item.qty++;
//     item.extPrice = (item.qty * item.price).toFixed(2);
//     document.getElementById('qty'+i).innerHTML = item.qty;
//     document.getElementById('extPrice'+i).innerHTML = item.extPrice;
//   }
  
//   function decrItem(item, i) {
//     if(item.qty > 0) {
//       item.qty--;
//       item.extPrice = (item.qty * product.price).toFixed(2)
//       document.getElementById('qty'+i).innerHTML = item.qty;
//       document.getElementById('extPrice'+i).innerHTML = item.extPrice;
//     }
//   }



// function getAllItemsAsHtmlString(item, i){
//     return `
//     <tr>
//     <td><label id="pItemLbl">${item.name}</label></td>
//     <td><input type="button" value="-" id="minBtn${i}"><label id="qtyLbl">${item.qty}</label><input type="button" value="+" id="plusBtn${i}"></td>
//     <td><label id="pUnitPriceLbl">${item.price}</label></td>
//     <td><label id="pExtPriceLbl">${item.extPrice}</label></td>
//     </tr>`
//     ;
// }

// function getAllItemsAsHtmlString(item){
//     let pQty = document.getElementById(`pQtyLbl`);

//     return `
//     <tr>
//     <td><label id="pItemLbl">${item.name}</label></td>
//     <td><input type="button" value="-" id="minBtn"><label id="pQtyLbl">${item.qty}</label><input type="button" value="+" id="plusBtn"></td>
//     <td><label id="pUnitPriceLbl">${item.price}</label></td>
//     <td><label id="pExtPriceLbl">${item.extPrice}</label></td>
//     </tr>`
//     ;

// }


function pIncreaseValue(){
    // item.qty++;
    // document.getElementById(`qtyLbl`).innerHTML=item.qty;
    let pIncrQty = parseInt(pQty.innerHTML)+1;
    pQty.innerHTML = pIncrQty;
   
    let pExt = (pIncrQty * pUnitPrice.innerHTML).toFixed(2);
    pExtPrice.innerHTML = pExt;
    
  
}

function pDecreaseValue(){
    let pDecrQty = parseInt(pQty.innerHTML)-1;
    pQty.innerHTML = pDecrQty;
    if (pDecrQty>0){
        let pExt = (pDecrQty * pUnitPrice.innerHTML).toFixed(2);
        pExtPrice.innerHTML = pExt;  
        console.log(pExt);
    } else {
        pExtPrice.innerHTML = 0;
        pQty.innerHTML = 0;
    }
    

    
    

}

function sDecreaseValue(){
    let sDecrQty = parseInt(sQty.innerHTML)-1;
    sQty.innerHTML = sDecrQty;
    let sExt = (sDecrQty * sUnitPrice.innerHTML).toFixed(2);
    sExtPrice.innerHTML = sExt;
    if (sDecrQty>0){
        let sExt = (sDecrQty * sUnitPrice.innerHTML).toFixed(2);
        sExtPrice.innerHTML = sExt;  
    } else {
        sExtPrice.innerHTML = 0;
        sQty.innerHTML = 0;
    }

}

function sIncreaseValue(){
    let sIncrQty = parseInt(sQty.innerHTML)+1;
    sQty.innerHTML = sIncrQty;
    let sExt = (sIncrQty * sUnitPrice.innerHTML).toFixed(2);
    sExtPrice.innerHTML = sExt;
}



function calculation(){
    let subTotal = pExtPrice+sExtPrice;
    console.log(pExtPrice);
}



// EXE
pMinus.addEventListener(`click`,pDecreaseValue);
pPlus.addEventListener(`click`,pIncreaseValue);
sMinus.addEventListener("click",sDecreaseValue);
sPlus.addEventListener("click",sIncreaseValue);
// const arrItemsHtml = allItems.map(getItemAsHtml);
// document.getElementById(`pItemLbl`).innerHTML=arrItemsHtml;
calc.addEventListener("click",calculation);

// const arrItemsHtml = allItems.map(getAllItemsAsHtmlString);
// const strItemsHtml = arrItemsHtml.join(`\n`);
// document.getElementById(`items`).innerHTML=strItemsHtml;
// document.getElementById('minBtn'+ index).addEventListener(`click`, () => {pIncreaseValue(prod, index)});

