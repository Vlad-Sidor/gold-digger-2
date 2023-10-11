import advantagesIcon1 from '@assets/images/main-page/advantages-item-1.svg'
import advantagesIcon2 from '@assets/images/main-page/advantages-item-2.svg'
import advantagesIcon3 from '@assets/images/main-page/advantages-item-3.svg'
import advantagesIcon4 from '@assets/images/main-page/advantages-item-4.svg'
import logoShield from '@assets/images/main-page/logo_shield_black.svg'
import advantagesBanner from '@assets/images/main-page/advantages-banner.svg'
import chest from '@assets/images/main-page/chest.svg';
import gold_mini from '@assets/images/gold-mini.svg'
import gold_big from '@assets/images/gold-big.svg'
const Avdantager = ({getStars}) => {
    return ( 
        <>
        <section className="advantages">
            <div className="container">
                    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className="gold-mini">
                        {getStars(7)}
                        <img className="gold" src={gold_mini} alt="" />
                    </div>
                    <div className="gold-big">
                        {getStars(6)}
                        <img className="gold" src={gold_big} alt="" />
                    </div>
                    <div data-aos="fade-right" className="chest__img">
                            {getStars(17)}
                            <img className="chest" src={chest} alt="" />
                        </div>
                    <div className="advantages__inner">
                        <div className="advantages__img">
                            <img src={logoShield} alt="" />
                            <div className="advantages__btn">
                                <a href="">view report</a>
                            </div>
                        </div>
                        <div className="advantages__text">
                            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="advantages__title"><span><span>NO</span> backdoors</span> 
                            no owner of this smart contract</h2>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="advantages__subtitle">The smart contract code is public and has been verified by an audit company: The solidproof Smart Contract Audit</p>
                            <div className="advantages__banner">
                                <p>Contract works with USDT (BSC-BEP20)</p>
                                <a href="#">See in Explorer</a>
                                <div className="advantages__banner__img">
                                    <img src={advantagesBanner} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="advantages__items">
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" className="advantages__item">
                            <img src={advantagesIcon1} alt="" className="advantages__item__img" />
                            <div className="advantages__item__info">
                                <span className="advantages__item__info--title">mines</span>
                                <p className="advantages__item__info--item">3075</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400" className="advantages__item">
                            <img src={advantagesIcon2} alt="" className="advantages__item__img" />
                            <div className="advantages__item__info">
                                <span className="advantages__item__info--title">mines</span>
                                <p className="advantages__item__info--item">3075</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="600" className="advantages__item">
                            <img src={advantagesIcon3} alt="" className="advantages__item__img" />
                            <div className="advantages__item__info">
                                <span className="advantages__item__info--title">mines</span>
                                <p className="advantages__item__info--item">3075</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700" className="advantages__item">
                            <img src={advantagesIcon4} alt="" className="advantages__item__img" />
                            <div className="advantages__item__info">
                                <span className="advantages__item__info--title">mines</span>
                                <p className="advantages__item__info--item">3075</p>
                            </div>
                        </div>
                    </div> */}
                
            </div>
        </section>
        </>
     );
}
 
export default Avdantager;