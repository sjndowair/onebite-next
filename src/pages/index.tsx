import React from "react";
import style from "./index.module.css";
import SearchAbleLayoutBar from "./components/SearchAbleLayoutBar";
import BookItem from "./components/BookItem";
import { InferGetStaticPropsType } from "next";
import { fetchBooks, randomFetchBooks } from "../lib/fetch-book";
import Head from "next/head";

export const getStaticProps = async () => {
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
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        {/* 썸네일 설정 */}
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입북스에 등록된 모든 도서를 만나보세요"
        />
      </Head>
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
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>;
};
