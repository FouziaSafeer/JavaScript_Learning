//Arthemetic
//assignment
//ternary
//comparison
//Logical
//bitwise

//Arthemetic 
let x=10;
let y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(y/x);
console.log(x/y);
console.log(2**3);//two to the power
//++ and --
let p=1;
let q=p++;//2
console.log(p++);//2
console.log(p);//3
console.log(q);//1
let p1=1;
let q1=++p1;

console.log(p1);//2
console.log(q1);//2
console.log("------------------------------")
//assignment
let x2=10;
let c=x2+10;
console.log(c+x2);
x2*=10;
console.log(x2);

let j=5;
j+=5;
console.log(j);
//comparison

let x3 = 10;
console.log(x3>=1);
console.log(x3===10);//strick equality type n value
//lose equality check value
console.log('1'==1);
console.log(true==1);




//ternary operator
let points=110;
let type=points>100 ? 'gold' : 'silver';
console.log(type);




//locial operator
//AND &&

let highincome=false;
let goodcredit=true;
let eligible=highincome && goodcredit;
console.log(eligible);
// OR ||


//NOT !  reverse with this operator
let userActive=true;
console.log(!userActive);


//Logial operator with non boolean operator
//falsy value
//null
//0
//false
//''
//NaN


//truethy value : which are not false
console.log(false||'fouzia');

console.log(false|| 1);//1
console.log(false||2||1);//2
console.log(true||'fouzia');//true
console.log(false||undefined);//undefined
console.log(null||true);//true


//real time example

let userColour=undefined;//false   
let defaultcolour='blue';
let currentcolour=userColour||defaultcolour;
console.log(currentcolour);

///bit wise operator
//1=0000001
//2=0000010
//3=0000011----1
console.log(1|2);//3
console.log(1&2);//0

//.operator precedence
console.log((2+2)*3);//
//swap two values

let a1=10;
let b=20;
let c1= a1;//10
 a1=b;
 b=c1;
console.log(a1);
console.log(b);

















