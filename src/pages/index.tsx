import Link from "next/link";


export default function Home() {
  return (
    <>
     <h1>index</h1>
    <Link href={`/search`}>Go to Search</Link>
    </>
  );
}
