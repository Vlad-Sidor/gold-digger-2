import gold_mini from '@assets/images/gold-mini.svg';
import gold_big from '@assets/images/gold-big.svg';
import miner_mini from '@assets/images/miner-mini.svg';
import pickaxe from '@assets/images/main-page/pickaxe-mini.svg';
import diamond from '@assets/images/diamond.svg';
const Mine = ({getStars}) => {
    return ( 
        <>
        <section className="mine">
            <div className="container">
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="diamond-item">
                    {getStars(6)}
                    <img className="diamond" src={diamond} alt="" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="diamond-item">
                    {getStars(6)}
                    <img className="diamond" src={diamond} alt="" />
                </div>
                
                <div data-aos-duration="1000" data-aos-delay="300" className="gold-mini">
                    {getStars(7)}
                    <img className="gold" src={gold_mini} alt="" />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" className="gold-big">
                    {getStars(6)}
                    <img className="gold" src={gold_big} alt="" />
                </div>
                
                <div className="mine__title">
                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mine</h2>
                </div>
                <div className="mine-info">
                    <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="mine-info__title">Get</h3>
                    <div className="mine-info__items">
                        <div className="mine-info__items__row">
                            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="mine-info__item">
                                <p>6%</p>
                                <img src={pickaxe} alt="" />
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="550" className="mine-info__item">
                                <p>4%</p>
                                <img src={miner_mini} alt="" />
                            </div>
                        </div>
                        
                        <div className="mine-info__items__row">
                            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="mine-info__item">
                                <p>6%</p>
                                <img src={pickaxe} alt="" />
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="550" className="mine-info__item">
                                <p>4%</p>
                                <img src={miner_mini} alt="" />
                            </div>
                        </div>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="750" className="mine-info__descr">
                        from each deposit of your partners from first leveland 1.5% pickaxes & 1% gold from the second level
                    </p>
                </div>
                <div className="mine__btn">
                    <button>Play</button>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Mine;