import Footer from '../../../Shared/Footer/Footer';
import ShippingPage from '../../ShippingPage/ShippingPage';
import BandSection from '../BandSection/BandSection';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SobByCategory from '../SobByCategory/SobByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SobByCategory></SobByCategory>
            <BandSection></BandSection>
            <ShippingPage></ShippingPage>
        </div>
    );
};

export default Home;