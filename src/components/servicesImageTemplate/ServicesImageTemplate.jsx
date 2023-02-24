import './servicesImageTemplate.css'

const ServicesImageTemplate = ({image,txt,heading}) => {

    
  return (
    <div  className='obui__services-imageTemplate'>
        <div className="obui__services-imageTemplate_image">
          <img src={image} alt={txt} />
        </div>
        <div className='obui__services-imageTemplate_container'>
          <h2>{heading}</h2>
          <p>{txt?txt:''}</p>
        </div>
    </div>
  )
}

export default ServicesImageTemplate 