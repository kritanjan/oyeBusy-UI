import './tryTrending.css'
import TryTrendingImg from '../../assets/tryTrendingImg.png'
const imageBg = {backgroundImage: `url(${TryTrendingImg})`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
}
const TryTrending = () => {
  return (
    <div  className='obui__tryTrending'>
      <div style={imageBg} className='obui__tryTrending-bgimage'></div>
      <div className="obui__tryTrending-container">
        <h2>TRY OUR TRENDING SERVICES WITH UPTO 50% OFF</h2>
        <div>
          <section className='obui__lineicon'></section>
          <p>On any service you book</p>
          <section className='obui__lineicon'></section>
        </div>
        <p className='obui__tryTrending-container_book'>BOOK A SERVICE</p>
      </div>
    </div >
  )
}

export default TryTrending