let itemObject = [
  {quantity: 1, price: 200},
  {quantity: 3, price: 350},
  {quantity: 5, price: 400},
];
let array = [];

for (let i = 0; i < itemObject.length; i++) {
    const newQuantity = itemObject[i].quantity * 2;
    const newPrice = itemObject[i].price * 2;
    array.push({quantity: newQuantity, price: newPrice});
}


let array1 = [];
let initialValue = 0;
let sum = 0;
sum = itemObject.reduce(function (accumulator, cuurentV) {
  return accumulator + cuurentV.quantity * cuurentV.price;
}, initialValue);
console.log(sum);
// itemObject.map(function(element, array) {
//     sum = sum + element.price * element.quantity;
//   if (element.quantity > 2 && element.price > 300) {
//       array1.push(element);
//   }
// });

// console.log("Double the quantity and price is ");
// console.log(array);
// console.log("Find the value (q > 2 && p > 300) is ");
// console.log(array1);
// console.log("Total value is " + sum);

const string = ' Perhaps The Easter-to-understand  Case    For Reduce Is   To Return The Sum Of All The Element   In   An    Array  ';

const spaceRemove = string.replace(/\s+/g, ' ').trim();
// console.log(spaceRemove);
const lowercase = spaceRemove.toLowerCase();
// console.log(lowercase);
const removeAlphabet = lowercase.replace(/[^a-z0-9 ]/gi, ' ');
// console.log(removeAlphabet);
const result = string.replace(/[^a-z0-9 ]/gi, ' ').replace(/\s+/g, ' ').toLowerCase().trim();
console.log(result);
