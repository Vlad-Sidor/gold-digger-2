import Footer from '@components/Footer/Footer'
import PlayPageHero from '@components/PlayPage/PlayPageHero';
import star from '@assets/images/star.svg';
import FooterPlay from '@components/Footer/FooterPlay';
const Play = () => {
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
            <PlayPageHero getStars={getStars}/>
            <Footer/>
        </main>
        </>
    );
}
 
export default Play;