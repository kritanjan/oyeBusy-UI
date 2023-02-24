import './assured.css'
import {image1,image2,image3} from '../../assets/assuredImages/index.js'

const arr = [
  {
    image: image1,
    heading: 'High Quality Work',
    txt: 'Only authorized service experts and genuine spare parts and equipments.'
  },
  {
    image: image2,
    heading: 'Hassle Free',
    txt: 'Sit back and relax. We do all the work.'
  },
  {
    image: image3,
    heading: 'Totally Cashless',
    txt: 'Pay online for Safe & Secure payment. Many benefits and offers available with online payment.'
  }
]

const Assured = () => {
  return (
    <div className='obui__assured'>
      <h2>Assured Preace of Mind</h2>
      <div className="obui__assured-container">
        {arr.map((item,i)=>(
          <div className="obui__assured-container_item" key={i}>
            <img src={item.image} alt={i} />
            <div>
              <h2>{item.heading}</h2>
              <p>{item.txt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Assured