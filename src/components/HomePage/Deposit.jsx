import arrowDown from '@assets/images/main-page/arrow-bottom.svg';
import bnbItem from '@assets/images/main-page/bnb-item-1.svg';
import gold_mini from '@assets/images/gold-mini.svg'
import gold_big from '@assets/images/gold-big.svg';
const Deposit = ({getStars}) => {
    return ( 
        <>
        <section className="deposit">
            <div className="container">
                    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className="gold-mini">
                        {getStars(7)}
                        <img className="gold" src={gold_mini} alt="" />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className="gold-big">
                        {getStars(6)}
                        <img className="gold" src={gold_big} alt="" />
                    </div>
                <h2 data-aos="fade-up" data-aos-duration="1500" className="deposit__title">Order of change <span>Max Deposit</span></h2>
                <div className="deposit-items">
                    <div className="deposit-items__col">
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" className="deposit__item">
                            <p><span>4</span>th October</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500" className="deposit__subitem">
                            <p>+1 week</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="650"  className="deposit__item">
                            <p><span>11</span>th October</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="850" className="deposit__subitem">
                            <p>+1 week</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="deposit__item">
                            <p><span>18</span>th October</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="850" className="deposit__subitem">
                            <p>+1 week</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="deposit__item">
                            <p><span>25</span>th October</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="850" className="deposit__subitem">
                            <p>+1 week</p>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000" className="deposit__item">
                            <p><span>1</span>st October</p>
                        </div>
                    </div>
                    <div className="deposit-items__col">
                        <img data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="850"  src={arrowDown} alt="" />
                        <img data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="850"  src={arrowDown} alt="" />
                    </div>
                    <div className="deposit-items__col">
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" className="deposit__item bnb-item">
                            <p><span>5</span>bnb</p>
                            <img src={bnbItem} alt="" className="bnb-icon" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="650"   className="deposit__item bnb-item">
                            <p><span>10</span>bnb</p>
                            <img src={bnbItem} alt="" className="bnb-icon" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="850"  className="deposit__item bnb-item">
                            <p><span>15</span>bnb</p>
                            <img src={bnbItem} alt="" className="bnb-icon" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="850"  className="deposit__item bnb-item">
                            <p><span>20</span>bnb</p>
                            <img src={bnbItem} alt="" className="bnb-icon" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="850"  className="deposit__item bnb-item">
                            <p><span>NO LIMIT</span></p>
                            <img src={bnbItem} alt="" className="bnb-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Deposit;