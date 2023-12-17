console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While expires");

/*
this is called blocking mechanism of call
stack(main thread) because for the 10 seconds 
that is till the completion of while loop,
though the set timeout sends the cb function 
after 5secs but it remains in the 
callback queue till the GEC isn't free
*/

