// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//import { useHistory } from 'react-router-dom';
const SubCategorySingle = ({ toy }) => {
    //const history = useHistory();
    const getStarRating = (rating) => {
        const starCount = Math.round(rating);
        return '★'.repeat(starCount) + '☆'.repeat(5 - starCount);
    };
    // const handleViewDetails = () => {
    //     if (!isLoggedIn()) {
    //         toast.error('You have to log in first to view details');
    //         history.push('/login');
    //     }
    // };

    // const isLoggedIn = () => {

    //     return false;
    // };

    return (
        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={toy.pictureName} alt={toy.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Name: {toy.name}</h3>
                <p className="text-gray-600 mb-2">Price: ${toy.price}</p>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">{getStarRating(toy.rating)}</span>
                    <span className="text-gray-600">{toy.rating}</span>
                </div>
                <button className="btn btn-primary">View Details</button>
            </div>
        </div>
    );
};

export default SubCategorySingle;
