import img1 from '../../../assets/about_image.jpg';

const AboutSection = () => {
    return (
        <div className="flex flex-col ms-4 md:flex-row">

            <div className="md:w-1/2">
                <img className='rounded-xl' src={img1} alt="" style={{ height: "400px" }} />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-sm text-gray-500">About Company</h3>
                <h1 className="text-4xl font-bold mb-4">You start the engine and your adventure begins</h1>
                <p className="text-gray-600">
                    Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite
                    see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution.
                    My indulged as disposal strongly attended.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
