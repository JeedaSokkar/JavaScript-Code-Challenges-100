
/*const largest=(num1,num2,num3)=>{
    console.log("num1: ",num1)
        console.log("num2: ",num2)
    console.log("num3: ",num3)

    if(num1>num2 && num1>num3){
        console.log("the large number is num1: ",num1)
    }
    else if(num2>num1 && num2>num3){
               console.log("the large number is num2: ",num2)
 
    }
    else{
                console.log("the large number is num3: ",num3)

    }
}*/

function largest(num1,num2,num3){
    const x=Math.max(num1,num2,num3)
    console.log(x)
}
largest(8,10,3)