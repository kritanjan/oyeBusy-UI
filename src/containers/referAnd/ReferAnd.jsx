import './referAnd.css'
import {BsArrowRight} from 'react-icons/bs'
import googleAd from '../../assets/googleAd.png'
import appleAd from '../../assets/appStoreAd.png'
import phoneAd from '../../assets/phoneAd.png'


const ReferAnd = () => {
  return (
    <div className='obui__refer'>
      <div className="obui__refer-container">
        <h2>Refer and or get link</h2>
        <p>Invite your friends</p>
        <div className="obui__refer-container_input">
          <input type="text" placeholder='Enter your 10 digit mobile number' />
          <BsArrowRight className='obui__refer-conatainer_arrow'/>
        </div>
        <div className="obui__refer-container_ad">
          <img src={googleAd} alt="Dowload on Play Store" className='obui__refer-container_ad-google'/>
          <img src={appleAd} alt="Download on Apple Store" className='obui__refer-container_ad-apple'/>
        </div>
      </div>
      <div className="obui__refer-ad">
        <div className="obui__refer-ad_image1">
          <img src={phoneAd} alt="Phone" />
        </div>
        <div className="obui__refer-ad_image2">
          <img src={phoneAd} alt="Phone" />
        </div>
      </div>
    </div>
  )
}

export default ReferAnd