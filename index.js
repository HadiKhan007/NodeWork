const fs=require('fs');
const path=require('path')

const dirPath=path.join(__dirname,'Crud')
const filePath=`${dirPath}/apple.txt`

fs.writeFileSync(filePath,"This is new File")
console.log(dirPath)

