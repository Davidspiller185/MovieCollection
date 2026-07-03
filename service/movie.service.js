import { appendFileMovies, readFileMovies, writeFileMovies } from "./file.service.js";

export  async function showAllMoviesTitle() {
    try{
        const data =await readFileMovies()
        let movies = []
        for (let movi of data) {
        movies.push(movi["title"])
        }
        return movies
    }catch(err){
        return err.message
    }

}

export async function ShowById(id) {
    try{
        const data = await readFileMovies()
        const Find =data.find(movi => movi.id === id)
        if (Find){
            return Find
        }
        return "id not found"
    }
    catch(err){
        return err.message
    }
}

export async function CreateNewMovie(title,genre,year,rating) {
    try{
        let id = 0
        const data = await readFileMovies()
        if (data.length === 0){
            id += 1
        }
        else{
             id = data[data.length-1].id + 1
        }
        const obj = {id,title,genre,year,rating}
        data.push(obj)
        await writeFileMovies(data)
        return "succsses to create a new movie"
    }
    catch(err){
        return err.message
    }
}
export async function DeleteMovie(id) {
        try{
            const data = await readFileMovies()
            const Filter = data.filter(movi => movi.id !== id)
            await writeFileMovies(Filter)
            return "movie deleted"
        }
        catch(err){
            return err.message
        }
}

export async function UpdateRate(id,newRate) {
    try{
        const data = await readFileMovies()
        const Map = data.map(movi => {if (movi.id === id); movi.rating = newRate})
        await writeFileMovies(Map)
        return "succsses updateRate"
    }
    catch(err){
        return err.message
    }
}

export async function SearchByName(str) {
    try{
        const data = await readFileMovies()
        const Filter = data.filter(movi => movi.title.toLowerCase().includes(str.toLowerCase()))
        return Filter

    }
    catch(err){
        return err.message
    }
}

export async function SortByGenres(genre) {
    try{
        const data = await readFileMovies()
        const Filter = data.filter(movi =>movi.genre === genre)
        return Filter
    }
    catch(err){
        return err.message
    }
}

export async function ShowStatistics(params) {
    try{
        const data = await readFileMovies()
        console.log(`number of movi is: ${data.length}`)
        const sumRating = data.reduce((acc,current) => acc + current.rating,0)
        const averageRating = sumRating/average
        console.log(`averageRating is: ${averageRating}`)
        const maxRating = data.reduce((acc, current) =>{if (current.rating > acc) return current.rating; return acc},data[0].rating)
        
    }catch(err){
        return err.message

    }

}

