import style from "./[[...id]].module.css"
import { fetchOneBook } from "@/lib/fetch-book"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"



  export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context?.query.id ;
    try{
        const data = await fetchOneBook(Number(id))
    
        return {
          props: {
            data
          }
        }
    }catch(err){
        console.error(err)
    }

    console.log(id)
    
   

  }

const Book = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    if(data === null) return 
    const {id, title, subTitle, description, author, coverImgUrl, publisher} = data

    if (!id) {
        return <div>Loading...</div>
    }
    
    
    return (
    <div>
        <div className={style.container}>
            <div 
            className={style.cover_img_container}
            style={{backgroundImage:`url(${coverImgUrl})`}}>
                <img src={coverImgUrl} alt={title} />
            </div>
            <h1 className={style.title}>{title}</h1>
            <h2 className={style.subTitle}>{subTitle}</h2>
            <p className={style.description}>{description}</p>
            <p className={style.author}>Author: {author}</p>
            <p className={style.publisher}>Publisher: {publisher}</p>
        </div>
    </div>)
}

export default Book