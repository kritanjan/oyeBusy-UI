import './navBar.css'
import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { GrLocation } from 'react-icons/gr'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaShoppingCart, FaGooglePlay } from 'react-icons/fa'

const Menu = () => (
    <>
        <p>Blog</p>
        <p>Career</p>
        <div className="obui__header-nav__options-account">
            <p>My Account</p>
            <MdKeyboardArrowDown />
        </div>
        <FaShoppingCart className='icons' />
        <div className="obui__header-nav__options-play">
            <FaGooglePlay className='icons' />
            <p>Download App</p>
        </div>
    </>
)

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='obui__header-nav'>
            <div className="obui__header-nav__logo">
                <img src={Logo} alt="Logo" />
                <div className="obui__header-nav__logo-location">
                    <GrLocation/>
                    <p>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</p>
                    <MdKeyboardArrowDown />
                </div>
            </div>

            <div className="obui__header-nav__options">
                <Menu />
            </div>

            <MdKeyboardArrowDown className='obui__header-nav__menu icon' onClick={() => { setShowMenu(!showMenu) }} />
            {showMenu && 
            (<div className='obui__header-nav__options--responsive'>
                <Menu/>
                </div>)

            }
        </div>
    )
}

export default NavBar