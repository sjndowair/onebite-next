import { useRouter } from "next/router"

const Search = () => {
   
    const router = useRouter()
    const { query } = router
    const q = query.q

    return(<h1>search page {q}</h1>)
 }
 export default Search