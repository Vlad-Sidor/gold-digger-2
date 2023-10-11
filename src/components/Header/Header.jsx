import { Route, Routes, Link } from 'react-router-dom';
import Home from '@pages/Home/Home';
import Play from '@pages/Play/Play';
import logo from '@assets/images/header/logo.png'
import tgIcon from '@assets/images/header/tg-icon.svg'
import '@assets/scss/header/header.scss'
import { useState } from 'react';
const Header = () => { 
    const [menuActive,setMenuActive] = useState();
    const [dropdownActive,setDropdownActive] = useState();
    const [dropdownActiveLanguage,setDropdownActiveLanguage] = useState();

    

    const menuClasess = `${menuActive ? 'header-nav__active' : ""} header-nav__list-wrapper`
    const burgerClasess = `${menuActive ? 'burger--active' : ""} burger`;

    return ( 
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <nav className="header-nav header-nav__desktop">
                            <ul className="header-nav__list">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='has-children' onClick={(e) => {
                                        setDropdownActive(!dropdownActive)
                                        e.stopPropagation()}}>
                                        <a href="#">Audit</a>
                                        {dropdownActive ? <ul className='submenu'>
                                            <li><Link to="https://x.com">SolidProof Audit</Link></li>
                                        </ul> : ""}
                                    </li>
                                <li>
                                    <Link to="/pdf">PDF Presentation</Link>
                                </li>
                                {/*
                                <li>
                                    <a href="#"><img src={tgIcon} alt="" />DappSide</a>
                                </li>
                                */} 
                            </ul>
                            <div className="header__logo">
                                <img src={logo} alt="" />
                            </div>
                            <ul className="header-nav__actions">
                                <li>
                                    <a href="#"><img src={tgIcon} alt="" />Channel</a>
                                </li>
                                <li>
                                    <a href="#"><img src={tgIcon} alt="" />Chat</a>
                                </li>
                                <li className='has-children' onClick={(e) => {
                                        setDropdownActiveLanguage(!dropdownActiveLanguage)
                                        e.stopPropagation()}}>
                                        <a href="#">RU</a>
                                        {dropdownActiveLanguage ? 
                                        <ul className='submenuLanguage'>
                                            <li><Link to="#">RU</Link></li>
                                            <li><Link to="#">EN</Link></li>
                                            <li><Link to="#">ES</Link></li>
                                        </ul> : ""}
                                    </li>
                                <li>
                                    <Link to="/play">Play</Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="header-nav header-nav__mobile">
                            <div className="header__logo">
                                <img src={logo} alt="" />
                            </div>
                            <div onClick={()=>setMenuActive(!menuActive)} className={burgerClasess}>
                                <span></span><span></span><span></span>
                            </div>
                            <div onClick={()=> setMenuActive(!menuActive)} className={menuClasess}>
                                <ul className="header-nav__list">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className='has-children' onClick={(e) => {
                                        setDropdownActive(!dropdownActive)
                                        e.stopPropagation()}}>
                                        <a href="#">Audit</a>
                                        {dropdownActive ? <ul className='submenu'>
                                            <li><Link to="https://x.com">SolidProof Audit</Link></li>
                                        </ul> : ""}
                                    </li>
                                    <li>
                                        <Link to="/pdf">PDF Presentation</Link>
                                    </li>
                                    <li>
                                        <a href="#"><img src={tgIcon} alt="" />DappSide</a>
                                    </li>
                                </ul>
                                <ul className="header-nav__actions">
                                    <li>
                                        <a href="#"><img src={tgIcon} alt="" />Channel</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src={tgIcon} alt="" />Chat</a>
                                    </li>
                                    <li className='has-children' onClick={(e) => {
                                        setDropdownActiveLanguage(!dropdownActiveLanguage)
                                        e.stopPropagation()}}>
                                        <a href="#">RU</a>
                                        {dropdownActiveLanguage ? 
                                        <ul className='submenuLanguage'>
                                            <li><Link to="#">RU</Link></li>
                                            <li><Link to="#">EN</Link></li>
                                            <li><Link to="#">ES</Link></li>
                                        </ul> : ""}
                                    </li>
                                    <li>
                                        <Link to="/play">Play</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            
        </>
    );
}
 
export default Header;