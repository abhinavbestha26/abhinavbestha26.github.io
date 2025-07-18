//promises         mosty we usse this for fetching data in api

// function f1(){
//     return new Promise((resolve, reject) =>{          // f2 should run after completion of f1
//         resolve(5)
//         // reject("Somethig went wrong")
//     })
//     // return 5
//     // setTimeout(() => {  return 5  },1000); // due to delay of time f2 function is executing 
// }
// function f2(x){
//     console.log(x+8);
// }
// f1()
// .then((n) => f2(n)) // f2 should run after completion of f1
// .catch((err) => console.log(err)) // if f1 fails then the give err returns



// const n = f1()
// const result = f2(n)
// console.log(result)


// fetch ("https://jsonplaceholder.typicode.com/users") 
// .then((res) => res.json())
// .then((data) => {
//     data.map(value=>{
//         console.log(value.name,value.email)
//     })
// })
// .catch((data) => console.log(data))



const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    data.map(value=>{
        console.log(value.name)
    })
}
fetchData();