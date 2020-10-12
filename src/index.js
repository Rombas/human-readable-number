module.exports = function toReadable (number) {
    if (number === 0) return "zero";

    var a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; 
    let res = number.toString();
    let answer = [];
    
    while (res.length < 3) {    
        res = "0" + res;
    }

    if (res[0] !== "0") {
        answer.push(a[Number.parseInt(res[0])]);
        answer.push("hundred");
    }
    
    if (res[1] > 1) { 
        answer.push(b[Number.parseInt(res[1])]);
        
        if (res[2] !== "0"){
        answer.push(a[Number.parseInt(res[2])]);
        }
    }
    else if ((res[1] + res[2]) !== "00") {
        answer.push(a[Number.parseInt(res[1]+res[2])]);
    }
    
    return answer.join(" ");
}

