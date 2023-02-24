import './opinions.css'
import doubleQuotes from '../../assets/doubleQuotes.png'

const opinionsArr = [
  {
    name: 'Ritu Kumar',
    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iste voluptates. Voluptatum culpa.'
  },
  {
    name: 'Ritu Kumar',
    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iste voluptates. Voluptatum culpa.'
  },
  {
    name: 'Ritu Kumar',
    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iste voluptates. Voluptatum culpa.'
  },
  {
    name: 'Ritu Kumar',
    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, iste voluptates. Voluptatum culpa.'
  }
]

const Opinions = () => {
  return (
    <div className='obui__opinions'>
      <h2>What Our Customers Say</h2>
      <div className='obui__opinions-container'>
        {opinionsArr.map((item,i)=>(
          <div key={i} className='obui__opinions-container_item'>
            <img src={doubleQuotes} alt="quotes" />
            <p>{item.txt}</p>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Opinions