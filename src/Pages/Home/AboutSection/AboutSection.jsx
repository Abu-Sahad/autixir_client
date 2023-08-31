import img1 from '../../../assets/about_image.jpg';

const AboutSection = () => {

    return (
        <section className='max-w-7xl mx-auto'>
            <div className="flex flex-col ms-4 md:flex-row gap-40 mb-10 mt-10">
                <div className="md:w-1/3">
                    <img className='rounded-xl' src={img1} alt="" style={{ width: "100%", height: "400px" }} />
                </div>
                <div className="md:w-2/3 flex flex-col space-y-4 lg:mt-10">
                    <h3 className="text-2xl text-gray-500">About Company</h3>
                    <h1 className="lg:text-6xl font-bold mb-4 md:text-4xl text-3xl">You start the engine <br className='mb-3' /> and your adventure <br className='mb-3' /> begins</h1>
                    <p className="text-gray-600">
                        Certain but she but shyness why cottage. Guy the put instrument sir <br className='mb-3' /> entreaties affronting. Pretended exquisite
                        see cordially the you. <br className='mb-3' /> Weeks quiet do vexed or whose. Motionless if no to affronting <br className='mb-3' /> imprudence no precaution.
                        My indulged as disposal strongly <br className='mb-3' /> attended.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
