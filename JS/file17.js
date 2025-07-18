// closure property
function main(){
    let b=1;
    function sub(){        // sub fun is called closure fun which has acces to the main fun
        return b++;
    }
    return sub;
}
const f1 = main()
console.log(f1()); 
console.log(f1()); 
console.log(f1()); 

