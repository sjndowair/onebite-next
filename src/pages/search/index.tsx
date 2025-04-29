import SearchAbleLayoutBar from "../components/SearchAbleLayoutBar";
import BookItem from "../components/BookItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchBooks } from "@/lib/fetch-book";


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    console.log(context)
    const q = context.query.q as string;
    const data = await fetchBooks(q)
    
    return {
        props:{
            data
        }
    }
    
}

const Search = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data)
    return (
        <>
        {data.map((item) => (
            <BookItem key={item.id} {...item} />
        ))}
        </>
    )
    
}

export default Search;

Search.getLayout = (page: React.ReactNode) => {
    return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>;
}