import {ReactNode} from "react"

interface ILayoutProps {
    children: ReactNode | string | number
}

const Layout = ({children}: ILayoutProps) => {
    return(
        <>
        <header>해더영역</header>
            <main>{children}</main>
            <footer>푸터영역</footer>
        </>
    )
}


export default Layout