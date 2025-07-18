//Arrays And array methods

// const score = [1,2,3,4,5,6,8];
// console.log(score)
// score.push(88)
// console.log(score)
// console.log(score.length)



// const score1 = [24,56,6,3]
// const newscore = [...score1,7777]
// console.log(newscore)

// const cart = {
//     1:2,
//     3:6,
//     7:9,
// };
// const newcart = ({...cart, 10:10,55:4}) //... = this is an spread operator which stores the previous valuess
// console.log(newcart)
// let cart = {};
// const products = [
//     {id:1, name:"santoor", price:32},
//     {id:2, name:"Lux", price:45},
//     {id:3, name:"Dove", price:67},
// ]
// console.log(products[0])
// const newproduct  = [...products,{id:4,name:"mysoor sandle",price:50}]
// function addtocart(id){
//     cart = { ...cart,[id]:1}; // we used [id] to assign the value to property name
// }
// addtocart(1)
// addtocart(6)
// console.log(cart)



const score = [1,2,3,4,5,6];
const score1 = [
    {id:1, name:"santoor", price:32},
]
score1.map(v => {
    console.log(v.id)
})
// score.forEach((a,b,c) => {
//     console.log(c)-10
// });

// score.map((a,b,c) => {    // map = to create a new array based on existed value ( like example below)
//     console.log(a)
// });

// const newscore = score.map((value) => {   // here we are not modifying the main score we are modifiny a copy of it
//     return value >2
// })
// console.log(newscore)



// const newscore = score.filter((value) => {
//     return value > 2;
// })

// console.log(newscore)


// const newscore = score.find((value) => {
//     return value > 2;
// })
//or
// const newscore = score.find((value) => value==2);
// console.log(newscore)

// console.log(newscore)



// const newscore = score.reduce((sum,value) => {
//     return sum+value
// })

// console.log(newscore)

//or

// const newscore = score.reduce((sum,value) => sum+value);

// console.log(newscore)




