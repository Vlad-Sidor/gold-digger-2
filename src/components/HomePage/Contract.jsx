import diamond from '@assets/images/diamond.svg';
import tether from '@assets/images/main-page/tether-crypto.svg';
import gold_mini from '@assets/images/gold-mini.svg';
import gold_big from '@assets/images/gold-big.svg';
const Contract = ({getStars}) => {
    return ( 
        <>
        <section className="contract">
            <div className="container">
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="diamond-item">
                    {getStars(6)}
                    <img className="diamond" src={diamond} alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="700" className="diamond-item">
                    {getStars(6)}
                    <img className="diamond" src={diamond} alt="" />
                </div>
                <div  data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="500" className="diamond-item">
                    {getStars(6)}
                    <img className="diamond" src={diamond} alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800" className="diamond-item">
                    {getStars(6)}
                    <img className="diamond" src={diamond} alt="" />
                </div>

                <div data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="800" className="gold-mini">
                    {getStars(7)}
                    <img className="gold" src={gold_mini} alt="" />
                </div>
                <div className="gold-big">
                    {getStars(6)}
                    <img className="gold" src={gold_big} alt="" />
                </div>

                
                <div  className="contract-title">
                    <h2 data-aos="fade-up" data-aos-duration="1500">True <span>Smart</span> Contract</h2>
                </div>
                <div className="contract__items">
                    <div data-aos="zoom-in" data-aos-duration="1000" className="contract__item">
                        <div className="contract__item__num">
                            <span>1</span>
                        </div>
                        <div className="contract__item__info">
                            <h3 className="contract__item__title">Hire miners</h3>
                            <button className="contract__item__btn">Hire</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="contract__item">
                        <div className="contract__item__num">
                            <span>2</span>
                        </div>
                        <div className="contract__item__info">
                            <h3 className="contract__item__title">Mine gold and earn BNB</h3>
                            <div className="contract__item__award">
                                <img src={tether} alt="" />
                                <p>1000.0</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="contract__item">
                        <div className="contract__item__num">
                            <span>3</span>
                        </div>
                        <div className="contract__item__info">
                            <h3 className="contract__item__title">expand your gold pit to earn more</h3>
                            <div className="contract__item__award">
                                <img src={gold_mini} alt="" />
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="contract__item">
                        <div className="contract__item__num">
                            <span>4</span>
                        </div>
                        <div className="contract__item__info">
                            <h3 className="contract__item__title"> Invite partners to earn more</h3>
                            <button className="contract__item__btn">Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Contract;