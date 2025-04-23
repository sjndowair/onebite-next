import { useRouter } from "next/router"


const Book = () => {

    const router = useRouter()
    const {id} = router.query
    console.log(id)
    
    return (<h1>book page {id}</h1>)
}

export default Book