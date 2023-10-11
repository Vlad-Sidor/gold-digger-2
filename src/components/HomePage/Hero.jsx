import chest from '../../assets/images/main-page/chest.svg';
import star from '../../assets/images/star.svg';
import miner from '../../assets/images/main-page/miner.svg';
const Hero = ({getStars}) => {
   
    
    return ( 
        <section className="hero">
            <div className="container">
                <div  className="hero__inner">
                    <div className="hero-info">
                        <h1 data-aos="fade-up" data-aos-duration="1000" className="hero__title"><span>Develop your gold mine and make a profit </span></h1>
                        <p data-aos="fade-up" data-aos-duration="1000" className="hero__subtitle">Mine gold and make a profit</p>
                        <div data-aos="fade-right" className="chest__img">
                            {getStars(17)}
                            <img className="chest" src={chest} alt="" />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="hero-img">
                        {getStars(8)}
                        <img className="miner" src={miner} alt="" />
                        <div className="hero-img__plaque">
                            <h2>from</h2>
                            <div className="hero-img__plaque__descr">
                                <p>Daily profit :</p>
                                <span>2,76%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;