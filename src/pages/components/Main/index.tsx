
interface IMainProps {
    children?: React.ReactNode | string
}
const Main = ({children}: IMainProps) => {
    return (<main>{children}</main>)
}

export default Main