import './whyPeople.css'
import image from '../../assets/whyPeopleImage.png'
import {icon1,icon2,icon3,icon4,icon5,whyus} from '../../assets/whyUsIcons/index.js'

const iconArray = [
  {
    image: icon1,
    txt: '30 days service guaranteed'
  },
  {
    image: icon2,
    txt: 'Affordable Rates'
  },
  {
    image: icon3,
    txt: 'On Time Service'
  },
  {
    image: icon4,
    txt: 'Verified Professional'
  },
  {
    image: icon5,
    txt: 'Excellent Service'
  }
]

const WhyPeople = () => {
  return (
    <div>
      <div className='obui_whyPeople'>
        <div className="obui__whyPeople-image">
          <img src={image} alt="Why People" />
        </div>
        <div className="obui__whyPeople-text">
          <h2>Why People Choose us</h2>
          <ul>
            <li>Affordable Rates</li>
            <li>On Time Service</li>
            <li>Verified Propfessionals</li>
            <li>Excellent Service</li>
          </ul>
        </div>
      </div>
      <div className='obui__whyPeople-mobile'>
          <div className="obui__whyPeople-mobile_text">
            <h2>Why Choose Us</h2>
            {
              iconArray.map((item,i)=>(
                <div key={i} className='obui__whyPeople-mobile_icon'>
                  <img src={item.image} alt={i} />
                  <p>{item.txt}</p>
                </div>
              ))
            }
          </div>
          <div style={{backgroundImage: `url(${whyus})`}} className="obui__whyPeople-mobile_image">
          </div>
      </div>
    </div>
  )
}


export default WhyPeople