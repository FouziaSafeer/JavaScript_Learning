// At a restaurant, you order 1 soup of Rs-10, 
//3 burgers for Rs-8 each, 
//and 1 ice-cream for Rs-5. 
//Use JavaScript to calculate the cost of the order. 
let soupPrice=10;
let bugerPrice=8;
let ice_creamPrice=5;
let order;
order=soupPrice+(bugerPrice*3)+ice_creamPrice;
console.log("Total Order  "+ order);
//------------------------------------
//2. You're at a restaurant with 2 friends (3 people in total) 
//and make the same order as above 1. 
//Calculate how much each person pays. 
console.log("Each person will pay "+ order/3);
//------------------------------------
//3. Calculate the total cost of a toaster (Rs-18.50) and 2 Shirts (7.50 each).
let toasterCost=18.50;
let shirtprice=7.50;
let total;
total=toasterCost+(shirtprice*2);
console.log("Total Cost of Toaster and Shirts is: "+total);

//4. Calculate a 10% tax for the total in above (qos-3).
let tax=total*0.10;
console.log("Tax paid : "+tax );
//-----------------------------------
//5. Calculate a 20% tax for the total in (qos 3)
// (remember that 1% = 1/100, so 20% = 2/100).
let tax20=total*0.20;
console.log("20 % tax paid: "+tax20);

//6. The temperature is 25 degree Celcius. Calculate the temperature in Fahrenheit.
// formula (0°C × 9/5) + 32 = 32°F
let tempCelcius=25;
let tempFahrent=(tempCelcius*9/5)+32;
console.log("25 C to Fahrenheit is: "+tempFahrent+"F");
//---------------------------------
//7. The temperature is 86 degree Fahrenheit. Calculate the temperature in Celcius.
//(32°F − 32) × 5/9 = 0°C
let tempFahrent2=86;
let tempCelcius2=(tempFahrent2-32)*5/9;
console.log(" 86F temperature in Celecius is : "+ tempCelcius2+"C");
//------------------------------
//8. The temperature is -5 degree Celcius. Calculate the temperature in Fahrenheit.
let tempCelcius3=-5;
let tempFahrent3=(tempCelcius3*9/5)+32;
console.log("-5 C to Fahrenheit is: "+tempFahrent3+"F");
