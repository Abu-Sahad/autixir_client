import img1 from '../../assets/shipping/4-track.svg';
import img2 from '../../assets/shipping/5-madel.svg';
import img3 from '../../assets/shipping/6-return.svg';
import img4 from '../../assets/shipping/7-support.svg';

const ShippingPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mx-4 my-4 md:mx-4 md:my-4 lg:mx-4 lg:my-4">
                <img src={img1} alt="" className="w-16 h-16 mb-4" />
                <div>
                    <h1 className="text-lg font-bold mb-2">Free home delivery</h1>
                    <h2 className="text-sm text-gray-500">
                        Provide free home delivery for all products over $100
                    </h2>
                </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mx-4 my-4 md:mx-4 md:my-4 lg:mx-4 lg:my-4">
                <img src={img2} alt="" className="w-16 h-16 mb-4" />
                <div>
                    <h1 className="text-lg font-bold mb-2">Quality Products</h1>
                    <h2 className="text-sm text-gray-500">
                        We ensure the product quality that is our main goal
                    </h2>
                </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mx-4 my-4 md:mx-4 md:my-4 lg:mx-4 lg:my-4">
                <img src={img3} alt="" className="w-16 h-16 mb-4" />
                <div>
                    <h1 className="text-lg font-bold mb-2">3 Days Return</h1>
                    <h2 className="text-sm text-gray-500">
                        Return the product within 3 days for any product you buy
                    </h2>
                </div>
            </div>
            <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mx-4 my-4 md:mx-4 md:my-4 lg:mx-4 lg:my-4">
                <img src={img4} alt="" className="w-16 h-16 mb-4" />
                <div>
                    <h1 className="text-lg font-bold mb-2">Online Support</h1>
                    <h2 className="text-sm text-gray-500">
                        We ensure the product quality that you can trust easily Autixir
                    </h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ShippingPage;
