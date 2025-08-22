
function factorial(num){

let mul=1
if(num === 0)
{
return 1
}
for(let i=1;i<=num;i++){
mul*=i
}
return mul
}
console.log(factorial(5))