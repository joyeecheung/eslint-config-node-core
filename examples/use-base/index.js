// No use strict here

console.log(/test./);  // Not escaping the dot here
console.log('hey')   // No semicolon here

/* eslint @joyeecheung/node-core/no-let-in-for-declaration: "error" */
for (let i = 0; i < 2; ++i) {  // let in for here
  console.log(i);
}
