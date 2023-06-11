import Footer from '../../../Shared/Footer/Footer';
import ShippingPage from '../../ShippingPage/ShippingPage';
import AboutSection from '../AboutSection/AboutSection';
import BandSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SobByCategory from '../SobByCategory/SobByCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SobByCategory></SobByCategory>
            <AboutSection></AboutSection>
            <ShippingPage></ShippingPage>
        </div>
    );
};

export default Home;