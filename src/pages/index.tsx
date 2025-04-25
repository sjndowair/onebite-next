import React, { ReactElement } from "react";
import style  from "./index.module.css"
import SearchAbleLayoutBar from "./components/SearchAbleLayoutBar";

export default function Home() {
  
  return (
    
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
      </section>
    </div>
    
  );
}



Home.getLayout = (page: React.ReactNode) =>{
  return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>
}