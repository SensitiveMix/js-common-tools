function formatFee(num) {
        var bb = num + "";
        var dian = bb.indexOf('.');
        var result = "";
        if (dian == -1) {
            result = num.toFixed(4);
        } else {
            var cc = bb.substring(dian + 1, bb.length);
            if (cc.length >= 5) {
                result = (Number(num.toFixed(4))+0.0001)*100000000000/100000000000
            
            } else {
                result = num.toFixed(4);
            }
        }
        return result
    }

    console.log(formatFee(2))
    console.log(formatFee(2.77))
    console.log(formatFee(2.000000001))
    console.log(formatFee(2.00773))
    console.log(formatFee(2.00773444))