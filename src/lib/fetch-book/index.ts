import {IBookItemProps} from "@/types/index"

export const fetchBooks = async (): Promise<IBookItemProps[]> => {
    const response = await fetch(`http://localhost:12345/book`)
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

