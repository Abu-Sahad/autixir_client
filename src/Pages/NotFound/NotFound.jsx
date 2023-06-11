
import img from '../../assets/pageNotFound.png';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src={img} alt="Page not found" className="w-64 h-64 mb-4" />
            <h1 className="text-4xl font-bold">Page Not Found</h1>
            <p className="text-lg text-gray-600">The requested page could not be found.</p>
        </div>
    );
};

export default NotFound;
