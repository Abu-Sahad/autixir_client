import audi from '../../../assets/band logo/audi.png'
import mercedes from '../../../assets/band logo/mercedes.jpg'
import land from '../../../assets/band logo/landRover.png'
import ferari from '../../../assets/band logo/ferari.png'

const OurLuxuryBand = () => {
    return (
        <div className='w-3/4 mx-auto mb-10'>
              <h1 className="text-center text-4xl font-bold text-amber-400  mt-5 mb-10">Our Luxury Brand</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <img src={audi} className="w-[75px] h-[75px]" />
                <img src={mercedes} className="w-[75px] h-[75px]"  />
                <img src={land} className="w-[75px] h-[75px]"  />
                <img src={ferari} className="w-[75px] h-[75px]" />
            </div>
        </div>
    );
};

export default OurLuxuryBand;