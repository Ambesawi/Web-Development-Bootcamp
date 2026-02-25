const fs = require("fs");
// this is to qeire to file 
// fs.writeFile('message1.txt', "Hello aman", (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// }); 

fs.readFile('./message.txt',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 