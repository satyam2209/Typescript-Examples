"use strict";
function combines(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combines(10, 20, "as-number"));
console.log(combines("satyam", "singh", "as-string"));
let type = "as-number";
