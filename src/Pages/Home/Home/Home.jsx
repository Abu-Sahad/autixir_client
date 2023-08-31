import ShippingPage from '../../ShippingPage/ShippingPage';
import AboutSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner';
import FutureCollection from '../FutureCollection/FutureCollection';
import Gallery from '../Gallery/Gallery';
import OurLuxuryBand from '../OurLuxuryBand/OurLuxuryBand';
import SobByCategory from '../SobByCategory/SobByCategory';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SobByCategory></SobByCategory>
            <Gallery></Gallery>
            <AboutSection></AboutSection>
            <FutureCollection></FutureCollection>
            <ShippingPage></ShippingPage>
            <OurLuxuryBand></OurLuxuryBand>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;