/* const checkPrime=(num)=>{
    let c=0;
      if (num <= 1) {
        console.log(num, "is not prime");
        return;
    }
    for(let i=1;i<num;i++){
        if(num%i === 0){c++}
    }
    if(c===1){
        console.log("Prime number: ",num)
    }
    else{
        console.log("The number is not prime: ",num)
    }
 }*/

    const checkPrime=(num)=>{
          if (num <= 1) {
        console.log( "is not prime : ",num);
        return;
    }
   for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i === 0){
        console.log( "is not prime : ",num);
return
    }
   }
   console.log("num is prime: ",num)
    }

 checkPrime(6)
 checkPrime(7)