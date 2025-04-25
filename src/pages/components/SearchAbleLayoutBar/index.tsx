import { useRouter } from "next/router"
import {useState} from "react"
import { useEffect } from "react"
import style from "../../index.module.css"


const SearchAbleLayoutBar = ({children}: {children: React.ReactNode}) => {
    const [value, setValue] = useState("")
    const router = useRouter()
    const q = router.query.q as string
    

  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        
     
    }
    const onClickSearch = () => {
        if(!value) return
        router.push(`/Search/?q=${value}`)
       
       
        
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
     if(!value || q === value) return 
      if (e.key === 'Enter') {
        onClickSearch()
      }
  }

  useEffect(() => {
    setValue(q || "")
  }, [q])

    return(<div className={style.searchLayout}>
        <input className={style.searchBox} onChange={onChange} value={value} onKeyDown={onKeyDown} placeholder="검색어를 입력하세요..."  />
        <button className={style.searchButton} onClick={onClickSearch} type="submit" >검색</button>
        {children}
    </div>)
 }
 export default SearchAbleLayoutBar