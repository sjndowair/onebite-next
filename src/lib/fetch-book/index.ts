import {IBookItemProps} from "@/types/index"

export const fetchBooks = async (q?: string): Promise<IBookItemProps[]> => {
    let API_URL = `http://localhost:12345/book`
    let response = await fetch(API_URL)
    if(q){
        API_URL +=`/Search?q=${q}`
    }
    try{
        if(!response){
            throw new Error()
        }
        console.log(response)
        const data = await response.json()
        return data
    }catch(err){
        console.error(err)
        return []
    }
}


export const randomFetchBooks = async (): Promise<IBookItemProps[]> => {
    const response = await fetch(`http://localhost:12345/book/random`)
    try{
        if(!response){
            throw new Error()
        }
        
        const data = await response.json()
        return data
    }catch(err){
        console.error(err)
        return []
    }
}
