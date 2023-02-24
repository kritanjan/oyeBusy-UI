import './App.css';
import { Header, TryTrending, SafeServices, Assured, WhyPeople, Opinions, ReferAnd, HassleFree, Footer } from './containers/index.js'
import { ac, acon, sofa, house } from './assets/trendingServices/index.js'
import { carpenter, cleaner, pestCon, plumber, technician } from './assets/sameDayServices/index.js'
import Services from './components/services/Services';
import ServicesWithScroll from './components/servicesWithScroll/ServicesWithScroll';
import { airc, micro, refridgerator, ro, tv, washing } from './assets/homeAppliances/index'
import {appliance,  mcb,  bell,  chandelier,  sockets,  wiring} from './assets/electricianServices'
import PremiumServices from './containers/premiumServices/PremiumServices';
import {assembly,bed,door,drawer,fitting,curtain} from './assets/carpenterServices'
import {basin,drill,blockage,bath,minor,tap} from './assets/plumberServices'

const trendArr = [
  {
    image: acon,
    heading: 'Air-Conditioner Services'
  },
  {
    image: ac,
    heading: 'AC Installation'
  },
  {
    image: sofa,
    heading: 'Sofa Cleaning Service'
  },
  {
    image: house,
    heading: 'Home Deep Cleaning Service'
  },
  {
    image: acon,
    heading: 'Air-Conditioner Services'
  }
]

const sameDayArr = [
  {
    image: carpenter,
    heading: 'Carpentry Services'
  },
  {
    image: technician,
    heading: 'Electrician Services'
  },
  {
    image: plumber,
    heading: 'Plumbing Services'
  },
  {
    image: cleaner,
    heading: 'Painting Services '
  },
  {
    image: pestCon,
    heading: 'Pest Costrol Services'
  },
]
const servicesWithScroll = [
  {
    image: '',
    heading: 'Professional Deep Cleaning',
    txt: 'For spring clean for end of lease clean'
  },
  {
    image: '',
    heading: 'Professional Deep Cleaning',
    txt: 'For spring clean for end of lease clean'
  },
  {
    image: '',
    heading: 'Professional Deep Cleaning',
    txt: 'For spring clean for end of lease clean'
  },
  {
    image: '',
    heading: 'Professional Deep Cleaning',
    txt: 'For spring clean for end of lease clean'
  },
  {
    image: '',
    heading: 'Professional Deep Cleaning',
    txt: 'For spring clean for end of lease clean'
  }
]
const homeAppArr = [
  {
    image: airc,
    heading: 'AC Services',
  },
  {
    image: micro,
    heading: 'Microwave Repair'
  },
  {
    image: refridgerator,
    heading: 'refridgerator Repair/Service'
  },
  {
    image: ro,
    heading: 'RO Service'
  },
   {
    image: tv,
    heading: 'LED TV Repair'
  }, 
  {
    image: washing,
    heading: 'Washing Machine Repair'

  }
]
const elecServArr = [
  {
    image: appliance,
    heading: 'Appliance',
    txt: 'Painting, Clock and Photoframe'
  },
  {
    image: mcb,
    heading: 'MCB And Fuse',
    txt: 'Repairing & Installation'
  },
  {
    image: bell,
    heading: 'Door Bell',
    txt: 'Bed, Table, Rock & Cabinet'
  },
  {
    image: chandelier,
    heading: 'Chandelier',
    txt: 'Holder, Hanger, Rod Installation'
  },
  {
    image: sockets,
    heading: 'Switch and Socket',
    txt: 'Shower, Faucets & Holder'
  },
  {
    image: wiring,
    heading: 'Wiring',
    txt: 'Toilet, pot, sink, Bathroom, Balcony pipe'
  }
]
const PlumServ = [
    {
      image: basin,
      heading: 'Wash Basin & Sink',
      txt: 'Repairing & Installation'
    },
    {
      image: drill,
      heading: 'Drill and Hole',
      txt: 'Painting, Clock and Photoframe'
      
    },
    {
      image: tap,
      heading: 'Mixer, Tap & Nozzle',
      txt: 'Bed, Table, Rock & Cabinet'
    },
    {
      image: minor,
      heading: 'Minor Installations',
      txt: 'Holder, Hanger, Rod Installation'
    },
    {
      image: bath,
      heading: 'Bath Fittings',
      txt: 'Shower, Faucets & Holder'
    },
    {
      image: blockage,
      heading: 'Blockage',
      txt: 'Toilet, pot, sink, Bathroom, Balcony pipe'
    }
]
const CarpServ = [
  {
    image: bed,
    heading: 'Bed',
    txt: 'Repairing support, legs'
  },
  {
    image: curtain,
    heading: 'Curtains and Binds',
    txt: 'Motorized, Non-motorized Binds & Curtain Rods'
    
  },
  {
    image: door,
    heading: 'Door',
    txt: 'Repairing, Accessories Installation'
  },
  {
    image: drawer,
    heading: 'Drawer & Cupboard',
    txt: 'Channel, Hinge Repair'
  },
  {
    image: fitting,
    heading: 'Fittings & Installation',
    txt: 'Holder, Hanger, Rod Installation'
  },
  {
    image: assembly,
    heading: 'Furniture Assembly',
    txt: 'Bed, Table, Rock & Cabinet'
  }
]



function App() {
  return (
    <div className="App">
      <Header />
      <Services header='Trending Services' txt='Premium Home Services' arr={trendArr} />
      <Services header='Same Day Services' txt='Premium Home Services' arr={sameDayArr} />
      <SafeServices />
      <ServicesWithScroll heading='Professional Services' txt='Premium Home Services' arr={servicesWithScroll} />
      <ServicesWithScroll heading='Most Used Services' txt='Premium Home Services' arr={servicesWithScroll} />
      <Assured />
      <ServicesWithScroll heading='Trending Services' txt='Premium Home Services' arr={servicesWithScroll} />
      <Services header='Home Appliances Services' txt='Premium Home Services' arr={homeAppArr} />
      <TryTrending />
      <PremiumServices header='Electrician Services' txt='Premium Services' arr={elecServArr}/>
      <PremiumServices header='Plumber Services' txt='Premium Services' arr={PlumServ}/>
      <PremiumServices header='Carpenter Services' txt='Premium Services' arr={CarpServ}/>
      {/* electrician */}
      {/* plumber */}
      {/* carpenter */}
      <WhyPeople />
      <Opinions />
      <ReferAnd />
      <HassleFree />
      <Footer />
    </div>
  );
}

export default App;
