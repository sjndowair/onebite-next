import { useRouter } from "next/router"
import {useState} from "react"
import style from "../../index.module.css"

const SearchAbleLayoutBar = () => {
    const [value, setValue] = useState("")
    const router = useRouter()
    console.log(router)
    

  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        
     
    }
    const onClickSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!value) return
        e.preventDefault()
        router.push(`/search/?q=${value}`)
       setValue("")
       
        
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(!value) return
    if(e.key === "Enter") {
        e.preventDefault()
        router.push(`/search/?q=${value}`)
        setValue("")
    }
  }

    return(
    <div className={style.searchLayout}>
        <input className={style.searchBox} onChange={onChange} value={value} onKeyDown={onKeyDown} placeholder="검색어를 입력하세요..."  />
        <button className={style.searchButton} onClick={onClickSearch} type="submit" >검색</button>
    </div>)
 }
 export default SearchAbleLayoutBar