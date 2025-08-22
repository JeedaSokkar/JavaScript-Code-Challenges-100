//Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
const convert=(num)=>{
    const x=(num * 9/5) + 32
    console.log("converts temperature from Celsius to Fahrenheit: ",x)
}
convert(10)