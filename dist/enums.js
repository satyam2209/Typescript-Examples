"use strict";
var Human;
(function (Human) {
    Human["name"] = "harsh";
    Human[Human["age"] = 25] = "age";
})(Human || (Human = {}));
console.log(Human.name);
