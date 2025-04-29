import React from "react";
import style  from "./index.module.css"
import SearchAbleLayoutBar from "./components/SearchAbleLayoutBar";
import mock from "@/mock/mock.json"
import BookItem from "./components/BookItem";
import { InferGetServerSidePropsType } from "next";
import {fetchBooks} from "../lib/fetch-book"



export const getServerSideProps = async () => {
  const data = await fetchBooks()
try{
  return {
  props: {
    data,
  }
}}catch(err){
  console.error(err)
  return []
}
  
}
export default function Home({data}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data)
   

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {data.map((book)=>(
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