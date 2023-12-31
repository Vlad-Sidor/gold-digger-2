import footer_logo from '@assets/images/footer-logo.png'
import footer_contract_img from '@assets/images/footer/footer-contract.svg'
import icon_list from '@assets/images/footer/icon-list.svg'
import mail_icon from '@assets/images/footer/mail-icon.svg'
import tgIcon from '@assets/images/header/tg-icon.svg'
const FooterPlay = () => {
    return ( 
        <>
        <footer className="footer footer-play">
            <div className="container">
                <div className="footer__row__1">
                    <img src={footer_logo} alt="" className="footer__logo" />
                    <div className="footer-contract">
                        <p>Contract works with USDT (BSC-BEP20)</p>
                        <a href="#">See in Explorer</a>
                        <div className="footer-contract__img">
                            <img src={footer_contract_img} alt="" />
                        </div>
                    </div>
                    <li className='footer-dappside'>
                        <a href="#"><img src={tgIcon} alt="" />DappSide</a>
                    </li>
                </div>
                <div className="footer__row__2">
                    <p className='footer__copyright'>2023 © All rights reserved</p>
                    <div className="footer__btn">
                        <button>PDF Presentation 
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_44_11)">
                            <path d="M16.4647 4.90768H18.7808L15.328 1.28271V3.71416C15.328 4.37344 15.8368 4.90768 16.4647 4.90768Z" fill="#FDB820"/>
                            <path d="M19.998 7.61088H15.5861C14.0082 7.61088 12.7291 6.26736 12.7291 4.61088V0.00096L2.85715 0C1.27886 0 0 1.34328 0 3.00024V21C0 22.6565 1.27886 24 2.85715 24H17.1427C18.7205 24 20 22.6565 20 21V7.61136L19.998 7.61088ZM3.89623 4.89168H8.81188C9.56045 4.89168 10.1687 5.52888 10.1687 6.31608C10.1687 7.10352 9.56092 7.74048 8.81188 7.74048H3.89623C3.1472 7.74048 2.53965 7.10352 2.53965 6.31608C2.53965 5.52864 3.14697 4.89168 3.89623 4.89168ZM16.0871 19.0251H3.89623C3.1472 19.0251 2.53965 18.3878 2.53965 17.6002C2.53965 16.8134 3.14697 16.1758 3.89623 16.1758H16.0871C16.8355 16.1758 17.4437 16.8133 17.4437 17.6002C17.4437 18.3878 16.8362 19.0251 16.0871 19.0251ZM16.0871 13.3277H3.89623C3.1472 13.3277 2.53965 12.6902 2.53965 11.903C2.53965 11.1158 3.14697 10.4786 3.89623 10.4786H16.0871C16.8355 10.4786 17.4437 11.1158 17.4437 11.903C17.4437 12.6902 16.8362 13.3277 16.0871 13.3277Z" fill="#FDB820"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_44_11">
                            <rect width="20" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="footer__actions">
                        <div className="footer__mail">
                            <img src={mail_icon} alt="" />
                            <a href="mailto:owner@golddigger.app">owner@golddigger.app</a>
                        </div>
                        <div className="footer__actions__btn">
                            <button>Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}
 
export default FooterPlay;