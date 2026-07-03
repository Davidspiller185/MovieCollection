import readlineSync from "readline-sync"
import { showAllMoviesTitle, ShowById,CreateNewMovie,DeleteMovie,UpdateRate,SearchByName,SortByGenres,ShowStatistics} from "./service/movie.service.js";
import { validName,validYear,validRating,validId } from "./utils/validator.js";

function menu(){
    console.log("===== Movie collection manager =====")
    console.log("to show all movie press: 1")
    console.log("to show by id press: 2")
    console.log("to create new movie press: 3")
    console.log("to Delete movie press: 4")
    console.log("to Update rate press: 5")
    console.log("to Search by name press :6")
    console.log("to Sort by genre press: 7")
    console.log("to Show statistics press: 8")
    console.log("to Exit press: 9")
    const choice =readlineSync.questionInt("Enter tour choice ")
    return choice

}


async function main() {
    let choice = 0
    while(choice !== 9){
        choice = menu()
        switch (choice){
            case 1:{
                console.log(await showAllMoviesTitle())
                break
            }
            case 2:{
                let id = readlineSync.questionInt("Enter id ")
                while(!validId(id)){
                    readlineSync.questionInt("Enter id ")
                }
                console.log(await ShowById(id))
                break
            }
            case 3:{
                let nameMovie = readlineSync.question("Enter name of the movie ")
                while(!validName(nameMovie)){
                    nameMovie = readlineSync.question("Enter name of the movie ")
                }
                let genre = readlineSync.question("Enter name genre of the movie")
                while(!validName(genre)){
                    genre = readlineSync.question("Enter name genre of the movie")
                }
                let year = readlineSync.questionInt("Enter the year of the movie production")
                while(!validYear(year)){
                    year = readlineSync.questionInt("Enter the year of the movie production")
                }
                let rating = readlineSync.questionFloat("Enter the ratinf of the movie")
                while(!validRating(rating)){
                    rating = readlineSync.questionFloat("Enter the ratinf of the movie")
                }
                console.log(await CreateNewMovie(nameMovie,genre,year,rating))
                break
            }
            case 4:{
                let id = readlineSync.questionInt("Enter id ")
                while(!validId(id)){
                    readlineSync.questionInt("Enter id ")
                }
                console.log( await DeleteMovie(id))
                break
            }
            case 5:{
                 let id = readlineSync.questionInt("Enter id ")
                while(!validId(id)){
                    readlineSync.questionInt("Enter id ")
                }
                 let rating = readlineSync.questionFloat("Enter the rating of the movie ")
                while(!validRating(rating)){
                    rating = readlineSync.questionFloat("Enter the rating of the movie ")
                }

                console.log(await UpdateRate(id,rating))
                break
            }
            case 6:{
                let str = readlineSync.question("Enter a string of the name movie ")
                console.log(await SearchByName(str))
                break
            }
            case 7:{
                let genre = readlineSync.question("Enter name genre of the movie ")
                while(!validName(genre)){
                    genre = readlineSync.question("Enter name genre of the movie ")
                }
                console.log(await SortByGenres(genre))
                break
            }
            case 8:{
                await ShowStatistics()
                break
            }
            default:{
                console.log("incorrect choice ")
            }
        }
    }
    return "Exit from movie collection manager "
}
console.log(await main())