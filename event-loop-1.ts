const fs = require("fs");
const a = 100;

setImmediate(() => {
  console.log("setImmediate");
});

fs.readFile("file.txt", "utf-8", () => {
  console.log("File Reading cb");
});

setTimeout(() => console.log("timer expired"), 0);

function printA() {
  console.log("A=", a);
}

printA();

console.log("Last line of the file");
