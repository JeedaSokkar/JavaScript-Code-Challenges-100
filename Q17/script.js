function Fibonacci(num){
let num1=0,num2=1
console.log(num1)
console.log(num2)

for(let i=3;i<=num;i++){
    

let next=num1+num2
console.log(next)
num1=num2
num2=next
}

}
Fibonacci(10)