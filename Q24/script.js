
function LCM(x, y) {
    let max = Math.max(x, y); 

    while (true) { 
        if (max % x === 0 && max % y === 0) {
            console.log(max); 
            break;          
        }
        max++; 
    }
}


LCM(25, 100); // 100
LCM(12, 18);  // 36

