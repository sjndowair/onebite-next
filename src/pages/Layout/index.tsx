"use client"

import {ReactNode} from "react"
import { useState } from "react"
import { useRouter } from "next/router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../index.module.css"
import Main from "../components/Main"

interface ILayoutProps {
    children: ReactNode | string | number
}


    const Layout = ({children}: ILayoutProps) => {
    
        const [value, setValue] = useState("")
        const router = useRouter()
        

      
        const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
            console.log(value)
        }
        const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
            e.preventDefault()
            router.push(`/?q=${value}`)
      }
    

    return(
        <div className={styles.box}>
            <Header />        
            <Main>
            <div>
                <input onChange={onChange} value={value} onClick={onClick}  placeholder="검색어를 입력하세요..."  />
                <button type="submit" >검색</button>
            </div>
            {children}
            </Main>
            <Footer />
        </div>
    )
}


export default Layout