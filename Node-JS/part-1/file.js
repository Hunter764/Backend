const fs = require("fs")

// sync-> blocking code,  async-> non-blocking code


// *write

// fs.writeFileSync("./text.txt","Hello world this is sync writing") // creates and writes if not exists, else override the previous content

// fs.writeFile("./test.txt","hello world i am async code", (err) =>{
//     console.log(err)
// })



// *read
 
// const rs = fs.readFileSync("./text.txt", "utf-8")
// console.log(rs)

// fs.readFile("./test.txt", "utf-8", (error,response) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(response)
//     }
// })


// *update/append

//fs.appendFileSync("./text.txt", new Date().toDateString())

// fs.appendFile("./log.txt", ` Hello wolrd this is Abhyudaya ${new Date().toDateString()}\n`, (err) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Updated")
//     }
// })


// *--Assignment--**

// 1. **Delete
// 2. cpSync
// 3. unlinkSync
// 4. mkdirSync
// 5. statSync

