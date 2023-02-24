// import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import './slider.css'
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const Slider = (props) => {
    return (
        <div className="obui__carousel">
            {/* <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all 1"
                transitionDuration={300}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile",'desktop']}
                deviceType={'desktop'}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40px"
            >
                {props.items.map((item,i)=>(
                        <img key={i} src={item} style={{display: 'block'}} alt={i} />
                ))}
            </Carousel> */}
            {props.items.map((item,i)=>(
                <div key={i}>
                    <img src={item} alt={i} />
                </div>
            ))}
        </div>
    )
}

export default Slider

