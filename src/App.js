import './App.css';
import Header from './containers/header/Header.jsx'
import TrendingServices from './containers/trendingServices/TrendingServices.jsx'
import SameDayServices from './containers/sameDayServices/SameDayServices.jsx'
import SafeServices from './containers/safeServices/SafeServices.jsx'
import PofessionalCleaning from './containers/professionalCleaning/PofessionalCleaning';
import MostUsed from './containers/mostUsed/MostUsed.jsx'
import Assured from './containers/assured/Assured.jsx'
import TrendingServices2 from './containers/trendingServices--2/TrendingServices--2.jsx'
import HomeAppliances from './containers/homeAppliances/HomeAppliances.jsx'
import TryTrending from './containers/tryTrending/TryTrending.jsx'
import ElectricianServices from './containers/electricianServices/ElectricianServices.jsx'
import PlumberServices from './containers/plumberServices/PlumberServices.jsx'
import CarpenterServices from './containers/carpenterServices/CarpenterServices.jsx'
import WhyPeople from './containers/whyPeople/WhyPeople.jsx'
import Opinions from './containers/opinions/Opinions.jsx'
import ReferAnd from './containers/referAnd/ReferAnd.jsx'
import HassleFree from './containers/hassleFree/HassleFree.jsx'
import Footer from './containers/footer/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <TrendingServices />
      <SameDayServices />
      <SafeServices />
      <PofessionalCleaning />
      <MostUsed />
      <Assured />
      <TrendingServices2 />
      <HomeAppliances />
      <TryTrending />
      <ElectricianServices />
      <PlumberServices />
      <CarpenterServices />
      <WhyPeople />
      <Opinions />
      <ReferAnd />
      <HassleFree />
      <Footer />
    </div>
  );
}

export default App;
