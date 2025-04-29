import style from "./[id].module.css"
import { fetchOneBook } from "@/lib/fetch-book"
import {  GetStaticPropsContext, InferGetStaticPropsType } from "next"


 export const getStaticPaths = () => {
    return {
      paths:[
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } }, 
      ], 
       fallback: true,
    }
 }

  export const getStaticProps = async (context: GetStaticPropsContext) => {
    const id = context.params!.id
    try{
      if(typeof id === "string"){
        const data = await fetchOneBook(Number(id))
    
        return {
          props: {
            data
          }
        }
      }
      
    }catch(err){
        console.error(err)
        return null
    }

    
    
   

  }

const Book = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {

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