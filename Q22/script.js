
function checks(num1,num2){
    let Strnum1=num1.toString();
      let Strnum2=num2.toString();
    let Lnum1=Number(Strnum1.charAt(Strnum1.length-1)),Lnum2=Number(Strnum2.charAt(Strnum2.length-1));
if(Lnum1 === Lnum2){
    console.log("two numbers share the same last digit.")
}
else{
      console.log("not share the same last digit.")
}
}
checks(123,143)