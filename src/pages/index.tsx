import React, { ReactElement } from "react";
import style  from "./index.module.css"
import SearchAbleLayoutBar from "./components/SearchAbleLayoutBar";

export default function Home() {
  
  return (
    <div>
      <section>
        <h3></h3>
      </section>
      <section>
        <h3></h3>
      </section>
    </div>
  );
}



Home.getLayout = (page: React.ReactNode) =>{
  return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>
}