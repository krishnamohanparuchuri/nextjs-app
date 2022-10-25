import Link from "next/link"
import styles from '../styles/Home.module.css'
export default function Heading(){
    return(
        <div className={styles.displayFlex}>   
            <h1>WebShop</h1>
            <ul className={styles.displayFlex}>
                <li className={styles.displayLi}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.displayLi}>
                    <Link href="/products" >
                        Products
                    </Link> 
                </li>
                <li className={styles.displayLi}>
                    <Link href="/about" >
                        AboutUs
                    </Link> 
                </li>
            </ul>
        </div>
    )
}