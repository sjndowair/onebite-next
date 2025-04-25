"use client"

import { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import style from "../index.module.css"
import Main from "../components/Main"
import SearchAbleLayoutBar from  "../components/SearchAbleLayoutBar"
 
interface ILayoutProps {
    children: ReactNode | string | number
}


    const Layout = ({children}: ILayoutProps) => {
    
        
    return(
        <div className={style.box}>
            <Header />        
            <Main>
            {children}
            </Main>
            <Footer />
        </div>
    )
}


export default Layout