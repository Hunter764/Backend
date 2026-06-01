fs.readFile("./test.txt", "utf-8", (error,response) =>{
    if(error){
        console.log(error)
    }else{
        console.log(response)
    }
})