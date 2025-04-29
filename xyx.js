// function x() {
//   const a = 10;
// }

// // require("./path")

// // All the code in a module is wrapped in a function (IIFE)

// // IIFE - Immediately Invoked Function Expression
// (function x() {
//   const a = 10;
//   //All the code in a module is wrapped in a function (IIFE)
// })();

// function test(a, b) {
//   return a + b;
// }

// console.log(test(1, 2));
console.log(__filename);
console.log(__dirname);

https.get("https://jsonplaceholder.typicode.com/posts", (res) => {
  console.log(res.statusCode);
});

fs.readFile("path", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

setTimeout(() => {
  console.log("Hello");
}, 5000);
