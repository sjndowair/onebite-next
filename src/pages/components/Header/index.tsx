import Link from "next/link"
import style from "../../index.module.css"


const Header = () => {
    
    
    return (<header><Link className={style.link} href={`/`}>📚 ONEBITE BOOKS </Link></header>)
}


export default Header