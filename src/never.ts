function tryReturn1()
{
    // return true;
}

console.log(tryReturn1());

// when we not return anything in function then it return undefined by default.
// when function return undefined then its type of void function.


// ---------------------------------


function apiError(msg:string, code:number)
{
    throw {message:msg, apiCode:code}
}

console.log(apiError("server side error", 500));


function tryReturn2(): never {
    throw new Error("This function never returns");
}

console.log(tryReturn2()); // This will throw an error and terminate execution.
