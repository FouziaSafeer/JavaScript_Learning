//1. Create a button with the text 'Click' inside. 
const btn=document.createElement('button');//creat object in dom 
btn.innerText='Click';//text of button
document.body.appendChild(btn);//add in body of html
//btn.innerText='Do click';
//function to create button 


//2. Create 2 buttons 1 with your name and 1 with your favorite food.

const myname=document.createElement('button');
myname.innerText="Fouzia";
document.body.appendChild(myname);

const Biryani=document.createElement('button');
Biryani.innerText='Biryani';
document.body.appendChild(Biryani);

const p =document.createElement('P');
const pText= document.createTextNode('Hello');
document.body.appendChild(p);


