function printAll(num1,num2){
    for(let i=num1;i<num2;i++){
        Armstrong(i)
    }
}
function swap(num1,num2){
    if(num1>num2){
        let temp=num1
        num1=num2
        num2=temp
        printAll(num1,num2)
    }
    else{
        printAll(num1,num2)
    }
}
function Armstrong(num){
    let strNum=num.toString()
    let c=strNum.length;
    let sum=0;

    for(let i=0;i<strNum.length;i++){
        sum+=Math.pow(Number(strNum[i]),c)
    }
    if(sum === num){
        console.log(num)
    }
    
}
swap(100,160)