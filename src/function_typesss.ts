// function doSomething<T>(param: T): T {
//     // Do something with param
//     console.log(param);
//     return param;
//   }
  
//   doSomething<number>(123); // works with number
//   doSomething<string>("Hello"); // works with string
//   doSomething<{ name: string }>({ name: "Alice" }); // works with object
//   doSomething<undefined>(undefined); // works with undefined
  

function doSomething(param: any): any {
    // You can do anything with param here
    console.log(param);
    return param;
  }
  
  doSomething(123); // works with number
  doSomething("Hello"); // works with string
  doSomething({ name: "Alice" }); // works with object
  doSomething(undefined);  // works with undefined
  