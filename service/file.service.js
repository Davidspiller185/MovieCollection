import fs from 'fs'

const fileName = "./data/movies.json"

export function readFileMovies() {
    return new Promise((resolve,reject) =>{
        fs.readFile(fileName, "utf8",(err,data) =>{
            if(err) return reject(err)
            try{
                resolve(JSON.parse(data))   
            }
            catch(err){
                reject(err)
            }
        })
    }) 
    
}

export function writeFileMovies(content) {
    return new Promise((resolve,reject) =>{
        fs.writeFile(fileName, JSON.stringify(content,null,2), (err) => {
            if (err) return reject(err)
            resolve()
    })
})
}




