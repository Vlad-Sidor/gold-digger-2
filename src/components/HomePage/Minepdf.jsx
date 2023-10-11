import gold_mini from '@assets/images/gold-mini.svg';
import tether from '@assets/images/main-page/tether-crypto.svg';
import '@assets/scss/home-page/minepdf.scss';

const Minepdf = () => {

    return ( 
        <>
        <section className="minepdf">
            <div className='pdfcontainer'>
                <div className="contract__items">
                    <div data-aos="zoom-in" data-aos-duration="1000" className="contract__item">
                        <div className="contract__item__info">
                        <h3 className="contract__item__title">RU</h3>
                        <button className="contract__item__btn">Viev</button>
                        </div>
                    </div>
                </div>
                <div className="contract__items">
                    <div data-aos="zoom-in" data-aos-duration="1000" className="contract__item">
                        <div className="contract__item__info">
                        <h3 className="contract__item__title">EN</h3>
                        <button className="contract__item__btn">Viev</button>
                        </div>
                    </div>
                </div>
                <div className="contract__items">
                    <div data-aos="zoom-in" data-aos-duration="1000" className="contract__item">
                        <div className="contract__item__info">
                        <h3 className="contract__item__title">ES</h3>
                        <button className="contract__item__btn">Viev</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Minepdf;