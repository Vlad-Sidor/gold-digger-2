import Hero from "@components/HomePage/Hero";
import star from '@assets/images/star.svg';
import Contract from "@components/HomePage/Contract";
import Avdantager from "@components/HomePage/Advantages";
import Mine from "@components/HomePage/Mine";
import Footer from "@components/Footer/Footer";
import Deposit from "@components/HomePage/Deposit";
import WhatIsWhat from "@components/HomePage/WhatIsWhat";
import Aos from "aos";
import '@assets/aos/aos.css'
import { useEffect } from "react";
const Home = () => {
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
            <Hero getStars={getStars}/>
            <Contract getStars={getStars}/>
            <Avdantager getStars={getStars}/>
            <Deposit getStars={getStars}/>
            <Mine getStars={getStars}/>
            <WhatIsWhat getStars={getStars}/>
            <Footer/>
        </main>
        </>
    );
}
 
export default Home;