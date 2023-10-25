const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "Crud");
const filePath = `${dirPath}/apple.txt`;

//   For Write File

// fs.writeFileSync(filePath,"This is new File")

//   For Read File

// fs.readFile(filePath,"utf-8",(err,item)=>{
// console.log(item)
// })

//    Append Text in File

// fs.appendFile(filePath, " and FileName is apple.txt", (err) => {
//   !err && console.log("file Updated");
// });

///   Rename File

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   !err && console.log("file Updated");
// });

//    Delete File

// fs.unlinkSync(`${dirPath}/fruit.txt`);

let a = 20;
let b = 0;

const waitData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(40);
  }, 2000);
});

waitData.then((data) => {
  let b = data;
  console.log(a + b);
});