import arrowDown from '@assets/images/main-page/arrow-bottom.svg';
import bnbItem from '@assets/images/main-page/bnb-item-1.svg';
import gold_mini from '@assets/images/gold-mini.svg'
import gold_big from '@assets/images/gold-big.svg';
import miner from '@assets/images/miner.svg';
import '@assets/scss/home-page/whatiswhat.scss';
import diamond from '@assets/images/diamond.svg';
import pick from '@assets/images/pick.svg';

const WhatIsWhat = ({getStars}) => {
    return ( 
        <>
        <section className="whatiswhat">
            <div className="container">
                    <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" className="diamond-item">
                    {getStars(6)}
                        <img className="diamond" src={diamond} alt="" />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" className=" diamond-item  diamond-item-two">
                    {getStars(6)}
                        <img className="diamondtwo" src={diamond} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className="gold-mini">
                        {getStars(7)}
                        <img className="gold" src={gold_mini} alt="" />
                    </div>
                <h2 data-aos="fade-up" data-aos-duration="1500" className="whatiswhat__title"><span>What Is What</span></h2>
                <div className="whatiswhat-items">
                    <div className="whatiswhat-items__col">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="whatiswhat__item">
                            <div className="whatiswhat__item__img">
                                <img className="gold" src={gold_mini} alt="" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" >
                                <p><span>Gold bar</span>- the main currency that your miners dig . You can exchange your gold for real BNB.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="whatiswhat__item">
                            <div className="whatiswhat__item__img">
                                <img className="miner" src={miner} alt="" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" >
                                <p><span>Miner</span>- the main workforce in the game. The more miners you hire, the more gold you get per day</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="whatiswhat__item">
                            <div className="whatiswhat__item__img">
                                <img className="gold" src={pick} alt="" />
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" >
                                <p><span>Pickaxe</span>- a tool that you get by hiring miners. Reinvest pickaxes to increase your gold production</p>
                            </div>
                        </div>
                     
                    </div>
                   
                </div>
            </div>
        </section>
        </>
     );
}
 
export default WhatIsWhat;