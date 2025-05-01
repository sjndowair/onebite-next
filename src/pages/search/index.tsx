import SearchAbleLayoutBar from "../components/SearchAbleLayoutBar";
import BookItem from "../components/BookItem";
import { fetchBooks } from "@/lib/fetch-book";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IBookItemProps } from "@/types";
import Head from "next/head";

const Search = () => {
  const [book, setBook] = useState<IBookItemProps[]>([]);

  const router = useRouter();
  const q = router.query.q as string;

  const getSearchBook = async () => {
    const data = await fetchBooks(q);
    setBook(data);
  };

  useEffect(() => {
    if (q) {
      getSearchBook();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>한입북스 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        {/* 썸네일 설정 */}
        <meta property="og:title" content="한입북스-검색결과" />
        <meta
          property="og:description"
          content="한입북스에 등록된 모든 도서를 만나보세요"
        />
      </Head>
      {book.map((item) => (
        <BookItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default Search;

Search.getLayout = (page: React.ReactNode) => {
  return <SearchAbleLayoutBar>{page}</SearchAbleLayoutBar>;
};
