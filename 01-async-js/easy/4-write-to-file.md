## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function WriteFile(cb){
fs.readFile("a.txt","utf-8",function(err,data){
data = data + "This is crazy Bro";
console.log(data);
fs.writeFile("a.txt",data,function(){
cb();
})

})
}

WriteFile(function(){
console.log("File Writtn")
})
