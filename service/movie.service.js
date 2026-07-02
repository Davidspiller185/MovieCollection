import { readFileMovies, writeFileMovies } from "./file.service";

export async function showAllMovies(data) {
    let movies = []
    for (let i of data) {
        movies.push(i[title])
    }
    return await movies
}

readFileMovies(showAllMovies())