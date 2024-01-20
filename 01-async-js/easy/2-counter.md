## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

for(let i=0;i<10;i++){
console.log(i);
setTimeout(()=>{
console.log(i)
},2000);
}

(Hint: setTimeout)
