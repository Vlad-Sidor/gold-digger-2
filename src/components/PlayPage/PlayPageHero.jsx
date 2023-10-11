import miner_mini from '@assets/images/miner-mini.svg'
import gold_mini from '@assets/images/gold-mini-star.svg'
import minerGif from '@assets/images/play-page/minergif.gif'
import pickaxe from '@assets/images/main-page/pickaxe-mini.svg'
import Modal from '@components/Modal/Modal';
import ModalOne from '@components/Modal/ModalOne';
import ModalTwo from '@components/Modal/ModalTwo';
import { useState } from 'react';

const PlayPageHero = ({getStars}) => {
    const getMiner = (count) =>{
        let miner = []
        for (let i = 0; i < count; i++) {
            miner.push(
                <img src={minerGif} alt="" />
            )
        }
        return miner;
    }

    const [modalActive, setModalActive] = useState(false);
    const [modalOneActive, setModaOnelActive] = useState(false);
    const [modalTwoActive, setModalTwoActive] = useState(false);


    return ( 
        <>
        <section className="play-hero">
            <div className="container">
                <div className="miner">
                {getMiner(5)}
                </div>
                <div className="play-hero__items">
                    <div className="play-hero__item">
                        <div className="play-hero__item__plantation play-plantation">
                            <p>Miners pcs</p>
                            <div className="play-plantation__statistics">
                                <span>0</span>
                                <p>=0 USD</p>
                            </div>
                        </div>
                        <div className="play-hero__item__info play-items">
                            <img className="play-items__img" src={miner_mini} alt="" />
                            <div className="play-items__wrapper">
                                <div
                                onClick={()=>{
                                    document.body.classList.add('modal-open')
                                    setModaOnelActive(true)
                                    }}
                                className="play-item"
                                >
                                    <p className="play-item__text">0.000000</p>
                                    <div className="play-item__img">
                                        
                                        
                        
                                    </div>
                                </div>
                                <div 
                                onClick={()=>{
                                    document.body.classList.add('modal-open')
                                    setModalTwoActive(true)
                                    }
                                }    
                                className="play-item"
                                >
                                    <p className="play-item__text">0</p>
                                    <div className="play-item__img">
                                        
                                    </div>
                                </div>
                                <div 
                                onClick={()=>{
                                    document.body.classList.add('modal-open')
                                    setModalActive(true)
                                    }
                                } 
                                    className="play-item"
                                    >
                                    <p className="play-item__text">Hire Miners</p>
                                    <div className="play-item__img">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="play-hero__item__info play-earned">
                            <p>Mined Gold</p>
                            <div className="play-earned__statistics">
                                <span>0%</span>
                                <p>0% daily</p>
                            </div>
                        </div>
                    </div>
                    <div className="play-hero__maturation">
                        <div className="play-hero__maturation__text">
                            <p>Maturation</p>
                            <span>100%</span>
                        </div>
                        <div className="play-hero__maturation__progressbar play-progressbar">
                            <div className="play-progressbar__item">
                                {getStars(6)}
                                <img src={gold_mini} alt="" className="gold" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Modal active={modalActive} setActive={setModalActive}/>
        <ModalOne active={modalOneActive} setActive={setModaOnelActive}/>
        <ModalTwo active={modalTwoActive} setActive={setModalTwoActive}/>
        </>
     );
}
 
export default PlayPageHero;