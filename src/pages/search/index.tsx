import SearchAbleLayoutBar from "../components/SearchAbleLayoutBar";
import BookItem from "../components/BookItem";
import { fetchBooks } from "@/lib/fetch-book";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IBookItemProps } from "@/types";




const Search = () => {

    const [book, setBook] = useState<IBookItemProps[]>([])

    const router = useRouter();
    const q= router.query.q as string;
    
    const getSearchBook = async () => {
       const data = await fetchBooks(q);
        setBook(data)
    }

    useEffect(() => {
        if(q){
            getSearchBook()
        }
    },[q])


    return (
        <>
        {book.map((item) => (
            <BookItem key={item.id} {...item} />
        ))}
        </>
    )
    
}

export default Search;

Search.getLayout = (page: React.ReactNode) => {
    return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>;
}