"use strict";
function tryReturn1() {
}
console.log(tryReturn1());
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError("server side error", 500));
function tryReturn2() {
    throw new Error("This function never returns");
}
console.log(tryReturn2());
