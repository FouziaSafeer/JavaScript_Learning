//5.a. Create a <script> element. Inside the <script>, create a variable called "name",
// and save your name in this variable (as a string). 
let name="Fouzia";
//5.b. Continuing from 5a, display the message "My name is: ${name}" 
//in the console (insert the 'name' variable created in 5a into this message).
console.log(`My name is: ${name}`);
//.c. At a restraurant, you order 1 coffee ($5),
// 2 bagals ($3 each), and 1 soup ($9). 
//Calculate the cost and save it in a variable called 'cost'. 
let coffeePrice=5;
let bagalPrice=3;
let soupPrice=9;
let cost;
cost=coffeePrice+2*bagalPrice+ soupPrice;
console.log(cost);
//5.d. Continuing from 5c, display "cost of food: $${cost}" in the console.
console.log(`cost of food: $${cost}`);
//5.e. Let's say the restaurance charges a 10% tax. Using the 'cost' variable from 5c, 
//calculate the tax (hint: multiply by 0.1), and save the result in a variable.
let tax;
tax=cost*.01;
console.log("Tax:$"+tax);
//5.f Continuing from 5e, display "Tax (10%): $${tax}" in the console. 
console.log(`display "Tax (10%): $${tax}`);
//5.g. Continuing from 5f, calculate the total (cost+tax), 
//save it in a variable called "totalcost", 
//and display the message "Total cost: $${totalcost}" in the console.
let totalCost=cost+tax;
console.log(`Total cost: $${totalCost}`);
//5.h. In the cart quantity project, add 2 more buttons "+4" and "+5", 
//which increases the quantity by 4 and 5 when you click them. Try using +=
const btn1=document.createElement('button');//creat object in dom 
btn1.innerText='+4';//text of button
document.body.appendChild(btn1);
btn1.onclick=alert(totalCost+4);


const btn2=document.createElement('button');//creat object in dom 
btn2.innerText='+5';//text of button
document.body.appendChild(btn2);