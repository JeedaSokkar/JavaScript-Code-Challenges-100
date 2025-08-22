function GCD(num1,num2){
let max=0;
        for(let i=1;i<=Math.min(num1,num2);i++){
            if(num1 % i === 0 && num2 % i ===0){
               if(i>max){
                max=i
               }
            }
            
        }
        console.log(max)
    
}
GCD(25,15)