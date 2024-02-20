//Create the text "My name is: as a string.
console.log("My name is: as a string.");
console.log("-----------------------");
let text='"My name is: as a string.';
console.log(text);
//Create your name as a string (for eg: "Simon")
let name1='Fouzia';
console.log(name1);
console.log("----------------------");
//Using Concatenation, add the 2 strings from 1st qos and 2nd qos
// together to create the text: 'My name is ___' (replace ___ with you name).
console.log("My name is "+name1);
//At a restaurant, you order 1 coffee (rs-5) and 
//1 bagel(rss-3). Using math, calculate the total cost,
// and using concatenation, create the text: 'Total cost: $___' 
//(replace ___ with the total you calculated).
let coffee,bagal,total;
coffee=5;
bagal=3
total=coffee+bagal;
console.log("Total cost: $"+total);
//Do the same thins as 4th qos, but use a template string and interpolation. 

//Display the text from 5th qos in a popup using alert(...);
alert("Total cost: $"+total);

//7. You order 1 coffee ($5.99) and 1 bagel($2.95).
// Using math, calculate the total cost, and using concatenation,
// create the text: 'Total cost: $____' 
//(hint: calculate in cents to avoid inaccuracies)
coffee=5.99;
bagal=2.95;
total=coffee+bagal;
console.log("Total cost: $"+total.toFixed(2));

//8. Do the same thing as 7th question, but use a template string and interpolation. 
//console.log(`The sum of ${a} and ${b} is ${a + b}`);

var message = `Total cost: $${total.toFixed(2)}`;
console.log(`Total cost: $${(coffee+bagal).toFixed(2)}`);
console.log(message);


//Display the text from 8th question in a popup.
alert("Total cost: $"+total.toFixed(2));


//. Using a multi-line string, create the text from 8th question
// and add a line of text underneath:
// 'Thank You, come again!'. Display both lines in a popup. 
alert("Total cost: $"+total.toFixed(2)+
"\n Thank You, Come again!");


