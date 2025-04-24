import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const onClickButton = () => {
     router.push(`/test`)
  }

  useEffect(() => {
    router.prefetch("/test")
  }, [])
  
  

  return <>
  <header><Link href={`/`}>home</Link>
   | <Link href={`/book/1`}>book</Link> | <Link href={`/search`}>search</Link>
   <button type="submit" onClick={() => {
    onClickButton()
   }}>테스트</button></header>
  <Component {...pageProps} />
  <footer>글로벌 푸터</footer>
  </>;
}
