//ax^2 + bx + c = 0
const quadratic=(a, b, c)=>{
const m=b*b-4*a*c

if(m>0){
    const root1=(-b + Math.sqrt(m)) / (2 * a);
    const root2=(-b - Math.sqrt(m)) / (2 * a);
    return {root1,root2}
}
else if(m === 0){
    const root= -b / (2 * a);
    return root
}
else{
    return "No root"
}
}
 
console.log(quadratic(1,8,15))