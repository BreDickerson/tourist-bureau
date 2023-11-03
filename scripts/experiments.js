"use strict" 


//const initial = 0
//const step = 1
//const final = colors.length - 1

//let currentIndex = inital //defining
//while (currentIndex <= final) { //checking
//  console.log(`Color number ${currentIndex} is ${colors[currentIndex]}!`)
//currentIndex += step //changing
// } 
const colors = ["periwinkle", "sand brown", "salmon", "coral", "seagreen", "midnight black"]

console.log("When does this console.log run????")

    //defining                  //checking              //changing 
                                    
for(let index = 0; index < colors.length; index += 1){
    console.log(`Color number ${index} is ${colors[index]}!`)
}

for (let index = 0;index < colors.length; index++){
    const currentColor = colors[index];
    console.log(currentColor)
}




x = x + 1   //Does 2 things: add,return  the NEW value, assign 
x += 1      //does 2 things:add, return the NEW value, assign
++x         //Does 2 things: add, return the New value, assign
x++         //Does 2 things: add, return the old value, assign