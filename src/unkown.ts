// ---------  Diff between any and unkown  --------------


// ------ ANY TYPE -------

let data:any;
data = 20;
data = "hello";

let item1:string;
item1 = data;

// type any is switched of the rules of typescript show that i can use any as i wish.


// -------- UNKNOWN TYPE --------

let data2:unknown;
data2 = 20;
data2 = "hello";

let item2:string;
// we cannot assign unkown type variable in others type variable directly there is some alternate options.
// item2 = data2;   // this gives error because we cannot assig it directly

// You must first check or assert the type
if (typeof data2 === 'string') {
    item2 = data2; // Now it's safe to assign
  }
  
  // Alternatively, using a type assertion
  item2 = data2 as string; // This will bypass the type checking, but be careful with it

