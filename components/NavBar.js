import { Link } from 'next/link'

export default function NavBar() {
  return (
    <>
        <h1>WebShop</h1>
        
        <Link href="/products" >
            Products
        </Link> 
    
    
        <Link href="/about" >
            AboutUs
        </Link> 
            
        
    </>
  )
}
