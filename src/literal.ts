function combines(a: number | string, b: number | string, type:"as-number" | "as-string")
{
    if(type === "as-number")
    {
        return (+a)+(+b)
    }
    else
    {
        return a.toString() + b.toString();
    }
}

console.log(combines(10,20,"as-number"))

console.log(combines("satyam","singh","as-string"))


// ----------------------------------------------------------------

let type:"as-number" | "as-string" = "as-number";

// when we make a value as a type known literal.