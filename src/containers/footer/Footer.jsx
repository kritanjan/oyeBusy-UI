import './footer.css'
import googleAd from '../../assets/googleAd.png'
import { BsInstagram, BsTwitter, BsLinkedin, BsFacebook, BsYoutube, BsPinterest, BsHeart, BsLayoutTextSidebarReverse } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'

const ServicesAndLocatoinsArr = [
  {
    header: 'RELATED SERVICES',
    txt: 'Electrician  |  Plumber  |  Carpenter  |  Packers & Movers  |  Salon For Woman  |  Salon For Man  |  Electronic Appliances  |  CCTV Installation & Repair  |  Ro- repair & service  |  house Painter  |  Pest Control  |  Kitchen Cleaning  |  Bathroom Cleaning  |  Sofa Cleaning  |  Carpet Cleaning  |  Home Deep Cleaning '
  },
  {
    header: 'TOP LOCATIONS',
    txt: 'Delhi  |  Gurgaon  |  Noida  |  Ghaziabad  |  Faridhabad  |  Greater Noida'
  }
]
const optionsArr = ['About Us', 'Blog', 'Near me', 'Careers', 'Terms & Conditions', 'Privacy Policy', 'Offers & Gift Cards', 'Contact Us']
const links = [<BsInstagram />, <BsTwitter />, <BsLinkedin />, <BsFacebook />, <BsYoutube />, <BsPinterest />]
const navLinks = [
  {
    icon: <AiFillHome className='obui__footer-mobile_item-icons'/>,
    txt: 'Home'
  },
  {
    icon: <BsLayoutTextSidebarReverse className='obui__footer-mobile_item-icons'/>,
    txt: 'Bookings'
  },
  {
    icon: <BsHeart className='obui__footer-mobile_item-icons'/>,
    txt: 'Favourite'
  },
  {
    icon: <MdAccountCircle className='obui__footer-mobile_item-icons'/>,
    txt: 'Account'
  }
]

const Footer = () => {
  return (
    <div className="obui__footer">
      <div className='obui__footer-desktop'>
        {ServicesAndLocatoinsArr.map((item, i) => (
          <div key={i} className="obui__footer-desktop_servLoc">
            <h2>{item.header}</h2>
            <p>{item.txt}</p>
          </div>
        ))}
        <div className="obui__footer-desktop_container">
          <div className="obui__footer-desktop_container-options">
            {optionsArr.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div className='obui__footer-desktop_container-contacts'>
            <h2>Contact Us</h2>
            <h2>Download Oyebusy App</h2>
            <p>Phone: +91 9990001089<br />Email: support@oyebusy.com</p>
            <img src={googleAd} alt="Download on play" className='obui__footer-desktop_container-contacts_googleAd'/>
          </div>
          <div className='obui__footer-desktop_container-links'>
            {links.map((item, i) => <div key={i}>{item}</div>)}
          </div>
          <p className='obui__footer-desktop_container-copyright'>© 2021 OyeBusy Technologies Pvt. Ltd.</p>
        </div>
      </div>
      <div className="obui__footer-mobile">
        {
          navLinks.map((item, i) => (
            <div key={i} className="obui__footer-mobile_item">
              {item.icon}
              <p>{item.txt}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Footer