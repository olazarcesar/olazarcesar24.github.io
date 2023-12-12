function cualEsMayor(a,b,c){
  let M = 0;
if (a > b && a > c ){
  M = a;
}
else if (b > a && b > c){
  M = b;
} 
else{
  M = c;
} 

 return M

}

let a = 30;
let b = 3;
let c = 4;

console.log(cualEsMayor(a,b,c))