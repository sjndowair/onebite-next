import style from "./[id].module.css";
import { fetchOneBook } from "@/lib/fetch-book";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
    //false: 404페이지로 이동
    //blocking: SSR 방식 페이지가 반응 될때까지 대기
    //true: SSR 방식 컴포넌트만 먼저 렌더링 시키고 이후에 데이터 가져오기
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context?.params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const data = await fetchOneBook(Number(id));

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
};

const Book = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta
            property="og:description"
            content="한입북스에 등록된 모든 도서를 만나보세요"
          />
        </Head>
        <div>Loading...</div>
      </>
    );
  }

  if (!data) {
    return <div>Book not found</div>;
  }

  const { id, title, subTitle, description, author, coverImgUrl, publisher } =
    data;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        {/* 썸네일 설정 */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div>
        <div className={style.container}>
          <div
            className={style.cover_img_container}
            style={{ backgroundImage: `url(${coverImgUrl})` }}
          >
            <img src={coverImgUrl} alt={title} />
          </div>
          <h1 className={style.title}>{title}</h1>
          <h2 className={style.subTitle}>{subTitle}</h2>
          <p className={style.description}>{description}</p>
          <p className={style.author}>Author: {author}</p>
          <p className={style.publisher}>Publisher: {publisher}</p>
        </div>
      </div>
    </>
  );
};

export default Book;
