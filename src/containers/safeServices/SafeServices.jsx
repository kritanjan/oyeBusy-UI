import safeServicesImg from '../../assets/safeServices.png'
import './safeServices.css'
import { RxDotFilled } from 'react-icons/rx'

const properties = ['Masks', 'Gloves', 'Temperature Checks', 'Sanitized Tools']
const styleObj = {
  color: '#616161',
  height: '20px',
  width: '20px'
}

const SafeServices = () => {
  return (
    <div className='obui__safeServices'>
      <div className='obui__safeServices-container'>
        <div className="obui__safeServices-container_text">
          <h2>100% Safe Services</h2>
          <div className="obui__safeServices-container_text-properties">
            {properties.map((item, i) => (
              <div key={i}>
                <RxDotFilled style={styleObj} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="obui__safeServices-container_image">
          <img src={safeServicesImg} alt="Safe Services" />
        </div>
      </div>
    </div>
  )
}

export default SafeServices