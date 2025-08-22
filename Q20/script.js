function  addition(x=1,y=1){
    return x+y
}
function subtraction(x=1,y=1){
    return x-y
}
function multiplication(x=1,y=1){
    return x*y
}
function division(x=1,y=1){
    return x/y
}

class Calculator{
    constructor(x,y,oper){
        this.x=x;
        this.y=y;
        this.oper=oper
    }
calc(){
  switch(this.oper){
        case "+":
            return addition(this.x,this.y)
            break
        case "-":
            return subtraction(this.x,this.y)
            break
        case "*":
              return multiplication(this.x,this.y)
            break
        case "/":
             return division(this.x,this.y)
            break
        default:
            console.log("not correct operator")
    }  
}
    
}
const x=new Calculator(3,4,"+")
console.log(x.calc())