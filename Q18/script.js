function  Armstrong(num){
    let x=num.toString()
    let sum=0
    let c=x.length
    for(let i=0;i<x.length;i++){
       sum+=Math.pow(Number(x[i]),c)
    }

if(sum === num){
    console.log("Armstrong number")
}
else{
   console.log("Not Armstrong number")  
}
}
Armstrong(123)