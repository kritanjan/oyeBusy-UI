import NavBar from '../../components/navBar/NavBar.jsx'
import Slider from '../../components/slider/Slider.jsx'
import './header.css'
import { FiSearch } from 'react-icons/fi'
import { GoTriangleDown } from 'react-icons/go'
import { Disinfection, Salon, Plumber, Packer, Home, Electrician, Cleaning, cctv, Carpenter, ac, Pest } from '../../assets/icons/index.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../../assets/5.png'
import pic2 from '../../assets/1.png'
import pic3 from '../../assets/2.png'


const categories = [
  {
    src: Disinfection,
    name: 'Disinfection',
    new: true
  },
  {
    src: Salon,
    name: 'Salon at Home',
    new: false
  },
  {
    src: Plumber,
    name: 'Plumber',
    new: false
  },
  {
    src: Pest,
    name: 'Pest Control',
    new: false
  },
  {
    src: Packer,
    name: 'Packers and Movers',
    new: false
  },
  {
    src: Home,
    name: 'Home Appliances',
    new: false
  },
  {
    src: Electrician,
    name: 'Electrician',
    new: false
  },
  {
    src: Cleaning,
    name: 'Cleaning',
    new: false
  },
  {
    src: cctv,
    name: 'CCTV',
    new: false
  },
  {
    src: Carpenter,
    name: 'Carpenter',
    new: false
  },
  {
    src: ac,
    name: 'AC Service',
    new: false
  },
]



const Header = () => {
  return (
    <div className='obui__header'>
      <NavBar />
      <div className="obui__header-container">
        <div className="obui__header-container__cleanerPhoto" >
          <h2>Home services on demand</h2>
          <div className="obui__header-container__cleanerPhoto-input">
            <FiSearch />
            <input type="text" name="search" onChange={e => e.target.value} placeholder='Search for a Service' />
          </div>
          <div className="obui__header-container__cleanerPhoto-examples">
            <p>Examples: <span style={{textDecoration:'underline',display:'inline'}}>Salon, Women's Hair, Men's grooming</span> and Many more...</p>
          </div>

        </div>
        <div className="obui__header-container__lookingfor">
          <h2>What are you looking for</h2>
          <div className="obui__header-container__lookingfor-offer">
            <section>
              <p>Flat $400 off</p>
              <GoTriangleDown className='icons' />
            </section>
          </div>
          <div className="obui__header-container__lookingfor-categories">
            {
              categories.map((item) => (
                <div className='obui__header-container__lookingfor-categories__item' key={item.name}>
                  <img src={item.src} alt={item.name} />
                  <p className='obui__header-container__lookingfor-categories__item-text'>{item.name}</p>
                  {item.new && (
                    <p className='obui__header-container__lookingfor-categories__item--new'>NEW</p>
                  )}
                </div>
              ))
            }
          </div>
          <div className="obui__header-container__lookingfor-carousel">
            <Slider items={[pic1,pic2,pic3,pic1,pic2,pic3,pic1,pic2,pic3]} btns={false}/>
          </div>
          <p className='obui__header-container__lookingfor-offers'>Top Offers</p>

        </div>
      </div>
    </div>
  )
}

export default Header