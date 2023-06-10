import { Link } from "react-router-dom";

const MyDataDetails = ({ item,handleDelete }) => {
    const { _id, sellerName, name, subCategory, price, availableQuantity, detailsDescription } = item
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>{detailsDescription}</td>
            <th>
                <Link to={`/updateToy/${_id}`} > <button className="btn btn-ghost btn-xs">Edit</button></Link>

            </th>
        </tr >
    );
};

export default MyDataDetails;