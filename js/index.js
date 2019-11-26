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

let subTotal = document.getElementById(`subTotalLbl`);
let tax = document.getElementById(`taxLbl`);
let total = document.getElementById(`totalLbl`);
let calc = document.getElementById("calcBtn");
let promo = document.getElementById(`promoBtn`);
let code = document.getElementById(`codeLbl`);
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

function pDecreaseValue(){
    let pDecrQty = parseInt(pQty.innerHTML)-1;
    pQty.innerHTML = pDecrQty;
    if (pDecrQty>0){
        let pExt = (pDecrQty * pUnitPrice.innerHTML).toFixed(2);
        pExtPrice.innerHTML = pExt;  
        console.log(pExt);
        // return pExt;
        
    } else {
        let pExt = pExtPrice.innerHTML * 0;
        pQty.innerHTML = pExt;
        pExtPrice.innerHTML = pExt;
        console.log(pExt);
        // return pExt;
    }
}

function pIncreaseValue(){
 
    let pIncrQty = parseInt(pQty.innerHTML)+1;
    pQty.innerHTML = pIncrQty;
   
    let pExt = (pIncrQty * pUnitPrice.innerHTML).toFixed(2);
    pExtPrice.innerHTML = pExt;
    console.log(pExt);
    // return pExt;
  
}

function sDecreaseValue(){
    let sDecrQty = parseInt(sQty.innerHTML)-1;
    sQty.innerHTML = sDecrQty;
    if (sDecrQty>0){
        let sExt = (sDecrQty * sUnitPrice.innerHTML).toFixed(2);
        sExtPrice.innerHTML = sExt;  
        console.log(sExt);
        // return sExt;
        
    } else {
        let sExt = sExtPrice.innerHTML * 0;
        sQty.innerHTML = sExt;
        sExtPrice.innerHTML = sExt;
        console.log(sExt);
        // return sExt;
    }
}

function sIncreaseValue(){
    let sIncrQty = parseInt(sQty.innerHTML)+1;
    sQty.innerHTML = sIncrQty;
    let sExt = (sIncrQty * sUnitPrice.innerHTML).toFixed(2);
    sExtPrice.innerHTML = sExt;
    console.log(sExt);
    // return sExt;
}

function calcSubtotal(){
    let sExtToInt = parseFloat(sExtPrice.innerHTML);
    let pExtToInt = parseFloat(pExtPrice.innerHTML);
    let subTot = sExtToInt+pExtToInt;
    subTotal.innerHTML = subTot.toFixed(2);
    console.log(subTotal);
}

function calcTax(){
    let subTot = parseFloat(subTotal.innerHTML).toFixed(2);
    let taxSubTot = subTot * 0.13;
    tax.innerHTML = taxSubTot.toFixed(2);
    console.log(tax);
}

function calcTotal(){
    let taxToFloat = parseFloat(tax.innerHTML);
    let subTotToFloat = parseFloat(subTotal.innerHTML);
    let tot = taxToFloat+subTotToFloat;
    total.innerHTML = tot.toFixed(2);
    console.log(total);
}

function getPromo(){
    let cNoTax = "NOTAX";
    let cFifty = "FIFTYFIFTY";
    let codeUp = prompt(`Enter a coupon code `).toUpperCase();
    code.innerHTML = codeUp;
    
    // console.log(code);
    if (codeUp == cNoTax){
        alert(`accepted ${codeUp}`);

    } else if(codeUp == cFifty){
        alert(`acceptted ${codeUp}`);

    } else{
        alert(`not accepted`);
    }
}






// EXE
pMinus.addEventListener(`click`,pDecreaseValue);
pPlus.addEventListener(`click`,pIncreaseValue);
sMinus.addEventListener("click",sDecreaseValue);
sPlus.addEventListener("click",sIncreaseValue);
// const arrItemsHtml = allItems.map(getItemAsHtml);
// document.getElementById(`pItemLbl`).innerHTML=arrItemsHtml;
calc.addEventListener("click",calcSubtotal);
calc.addEventListener("click",calcTax);
calc.addEventListener("click",calcTotal);
promo.addEventListener(`click`,getPromo);



// const arrItemsHtml = allItems.map(getAllItemsAsHtmlString);
// const strItemsHtml = arrItemsHtml.join(`\n`);
// document.getElementById(`items`).innerHTML=strItemsHtml;
// document.getElementById('minBtn'+ index).addEventListener(`click`, () => {pIncreaseValue(prod, index)});

