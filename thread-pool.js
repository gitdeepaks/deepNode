const fs = require("fs");

const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
});

crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString("hex"));
});
