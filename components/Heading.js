import Link from "next/link"
export default function Heading(){
    return(
        <>   
        <h1>WebShop</h1>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/products" >
                    Products
                </Link> 
            </li>
            <li>
                <Link href="/about" >
                    AboutUs
                </Link> 
            </li>
        </ul>
        </>
    )
}