//Arrow function
// greet() // hoisting  = we can call fun before declaring the function
// function greet(){
//     console.log("hello")
//  }

//  x= 10
//  console.log(x)
//  var x  // if we use let ,const instead of var  then it will throw an error
 
//  const greet = () => {console.log("hey bro")};
//  greet()  // hoisting dosen't work with arrow function
 


// const add = (a,b) => {console.log(a+b)}
// add(2,3)


// const add = (a,b) => {return a+b}
// const result = add(1,3)
// console.log(result)


// spread operator for accesing multiple arguments
const add = (...a) => {
    console.log(a);
}
add(1,3,4,5)