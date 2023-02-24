import ServicesImageTemplate from '../../components/servicesImageTemplate/ServicesImageTemplate'
import './premiumServices.css'

const PremiumServices = (props) => {
  return (
    <div className='obui__premiumServices'>
        <div className='obui__premiumServices-text'>
            <h2>{props.header}</h2>
            <p>{props.txt}</p>
        </div>
        <div className='obui__premiumServices-container'>
            {props.arr.map((item,i)=>(
                <div key={i} className='obui__premiumServices-container_item'>
                  <ServicesImageTemplate image={item.image} heading={item.heading} txt={item.txt} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default PremiumServices