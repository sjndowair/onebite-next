import {IBookItemProps} from "@/types/index"

export const fetchBooks = async (q?: string): Promise<IBookItemProps[]> => {
    // Construct API URL with optional search query before fetching
    let API_URL = `http://localhost:12345/book`;
    if (q) {
        API_URL += `/Search?q=${encodeURIComponent(q)}`;
    }
    console.log('Fetching books from:', API_URL);
    const response = await fetch(API_URL);
    if (!response.ok) {
        console.error( response.status, response.statusText);
        return [];
    }
    return await response.json();
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
