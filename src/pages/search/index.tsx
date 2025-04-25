import SearchAbleLayoutBar from "../components/SearchAbleLayoutBar";

const Search = () => {
    return (<div>search page</div>)
}

export default Search;

Search.getLayout = (page: React.ReactNode) => {
    return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>;
}