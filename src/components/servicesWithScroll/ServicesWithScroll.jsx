import './servicesWithScroll.css'

const ServicesWithScroll = (props) => {
  return (
    <div className='obui__servicesWithScroll'>
      <h2>{props.heading}</h2>
      <p>{props.txt}</p>
      <div className="obui__servicesWithScroll-images">
        {props.arr.map((item,i)=>(
          <div className="obui__servicesWithScroll-images_item" key={i}>
            <div>
              <img src={item.image} alt={i} />
            </div>
            <h3>{item.heading}</h3>
            <p>{item.txt}{i}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesWithScroll