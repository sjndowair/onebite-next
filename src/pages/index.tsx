import React from "react";
import style from "./index.module.css";
import SearchAbleLayoutBar from "./components/SearchAbleLayoutBar";
import BookItem from "./components/BookItem";
import { InferGetStaticPropsType } from "next";
import { fetchBooks, randomFetchBooks } from "../lib/fetch-book";

export const getStaticProps = async () => {
  console.log("인덱스 페이지 초기 데이터 가져오기 그이후로 출력이 안될거임");

  const [data, randomFetchBooksData] = await Promise.all([
    fetchBooks(),
    randomFetchBooks(),
  ]);

  try {
    return {
      props: {
        data,
        randomFetchBooksData,
      },
      // revalidate: 3,
    };
  } catch (err) {
    console.error(err);
    return [];
  }
};
export default function Home({
  data,
  randomFetchBooksData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomFetchBooksData.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {data.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>;
};
