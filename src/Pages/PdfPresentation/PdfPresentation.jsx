import Footer from "@components/Footer/Footer";
import Minepdf from "@components/HomePage/Minepdf";
import Aos from "aos";
import { useEffect } from "react";
import star from '@assets/images/star.svg';

const PdfPresentation = () => {
    useEffect(()=>{
        Aos.init();
    }, [])

    const getStars = (count) =>{
        let stars = []
        for (let i = 0; i < count; i++) {
            stars.push(
                <img key={i} className="star" src={star} alt="" />
            )
        }
        return stars;
    }

    return ( 
        <>
        <main className="main">
            <Minepdf getStars={getStars}/>
            <Footer/>
        </main>       
        </>
     );
}
 
export default PdfPresentation;