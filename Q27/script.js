
function game(){
    let randomNum=Math.floor(Math.random()*100)+1
let Numguss;
while(Numguss !== randomNum){
Numguss= parseInt(prompt("خمن رقم بين 1 و 100:"));
if(isNaN(Numguss)){
    alert("Please enter the correct num")
}
else if(Numguss>randomNum){
    alert("the Numguss > random Number")
}
else if(Numguss<randomNum){
    alert("the Numguss < random Number")
}
else{
    alert("The number is correct")
    break
}
}
}
game()