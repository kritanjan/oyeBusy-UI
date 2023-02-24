import './services.css'
import Template from '../servicesImageTemplate/ServicesImageTemplate.jsx'

const Services = (props) => {

    return (
        <div className={'obui__services'}>
            <div className="obui__services-text">
                <h2>{props.header}</h2>
                <p>{props.txt}</p>
            </div>
            <div className='obui__services-images' >
                {props.arr.map((item, i) => (
                        <Template image={item.image} heading={item.heading} key={i} txt={item.txt}/>
                ))}
            </div>
        </div>
    )
}

export default Services