import style from "./[id].module.css";
import { fetchOneBook } from "@/lib/fetch-book";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
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
    return <div>Loading...</div>;
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
  );
};

export default Book;
