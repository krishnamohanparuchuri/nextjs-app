import Heading from './Heading'
import Footer from './Footer'
export default function Layout({children}){
return(
    <>
        <Heading />
        {children}
        <Footer />
    </>
)
}