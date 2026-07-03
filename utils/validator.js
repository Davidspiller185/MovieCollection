export function validName(name){
    return typeof name === "string" && name.trim() !== ""
}

export function validYear(year){
    return  typeof year === "number" && year > 1900 && year <= new Date().getFullYear()
}

export function validRating(rating){
    return !isNaN(rating) && rating >=0 && rating <=10
}
export function validId(id){
    return typeof id === "number" && id > 0
}

