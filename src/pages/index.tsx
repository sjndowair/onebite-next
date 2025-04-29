import React from "react";
import style  from "./index.module.css"
import SearchAbleLayoutBar from "./components/SearchAbleLayoutBar";
import BookItem from "./components/BookItem";
import { InferGetServerSidePropsType } from "next";
import {fetchBooks, randomFetchBooks} from "../lib/fetch-book"



export const getServerSideProps = async () => {
  
  const [data, randomFetchBooksData] = await Promise.all([fetchBooks(), randomFetchBooks()])
  

try{
  return {
  props: {
    data,
    randomFetchBooksData
  }
}}catch(err){
  console.error(err)
  return []
}
  
}
export default function Home({data, randomFetchBooksData}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomFetchBooksData.map((book)=>( 
          <BookItem key={book.id}  {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {data.map((book)=>(
          <BookItem key={book.id}  {...book} />
        ))}
      </section>
    </div>
    
  );
}



Home.getLayout = (page: React.ReactNode) =>{
  return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>
}