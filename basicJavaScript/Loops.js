//for /while/do- while/ for ..in///for...of
//infine loop
console.log("Helo world");
// for loop
for(let i=0; i<2; i++){
console.log("hi ");
}
//while
let a=1;
while(a<=2){
  console.log("fizzy");
    a++;
}
console.log("---------------------");
//do while

let p=1;
do{

    console.log(p);
    p++;

}while (p<=5);


//for ---in s
//for fetch from objects
const person={
    name:'fouzia',
    age:20
};

for(let key in person)
    console.log(key, person[key]);
//array
const colour=['red','blue','pink'];
for (let index in colour) {
    //const element = colour[index];
    console.log(index, colour[index]);
    

}
//for --of to get value from array

for(let col of colour)
console.log(col);

//break n continue


