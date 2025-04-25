import React, { ReactElement } from "react";
import style  from "./index.module.css"
import SearchAbleLayoutBar from "./components/SearchAbleLayoutBar";
import mock from "@/mock/mock.json"
import BookItem from "./components/BookItem";

export default function Home() {
  
  console.log(mock)
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {mock.map((book)=>(
          <BookItem key={book.id}  {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {mock.map((book)=>(
          <BookItem key={book.id}  {...book} />
        ))}
      </section>
    </div>
    
  );
}



Home.getLayout = (page: React.ReactNode) =>{
  return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>
}