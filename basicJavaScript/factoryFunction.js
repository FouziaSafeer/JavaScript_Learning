//factry function: it produce objects
function createCircle(radius){

    const circle={
        radius:radius,
        draw(){
            console.log('draw');
        }

    } 
    return circle;
}
const c1=createCircle(2);
console.log(c1.radius);