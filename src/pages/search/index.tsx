import SearchAbleLayoutBar from "../components/SearchAbleLayoutBar";
import mock from "@/mock/mock.json"
import BookItem from "../components/BookItem";

const Search = () => {
    return (
        <>
        {mock.map((item) => (
            <BookItem key={item.id} {...item} />
        ))}
        </>
    )
    
}

export default Search;

Search.getLayout = (page: React.ReactNode) => {
    return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>;
}