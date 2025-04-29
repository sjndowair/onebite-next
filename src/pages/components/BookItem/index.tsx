import style from "../../bookItem.module.css"
import Link from "next/link"
import {IBookItemProps} from "../../../types/index"




const BookItem = ({id, title, subTitle, description, author, publisher, coverImgUrl}: IBookItemProps) => {
    
    return (
        <>
      <Link className={style?.container} href={`/book/${id}`}>
      <img src={coverImgUrl} alt={title} />
      <div>
      <div className={style.title}>{title}</div>
      <div className={style.subtitle}>{subTitle}</div>
      
      <br />
      <div className={style.author}>{author} | {publisher}</div>
      </div>
      </Link>
      </>
    )
}

export default BookItem