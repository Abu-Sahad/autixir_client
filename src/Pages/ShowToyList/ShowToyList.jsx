import { Link } from "react-router-dom";

const ShowToyList = ({ item }) => {
    const {_id, sellerName, name, subCategory, price, availableQuantity } = item
    return (
        <tr>
            <th>
                <label>

                </label>
            </th>
            <td>
                {sellerName}
            </td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
                <Link to={`/addToy/${_id}`} > <button className="btn btn-ghost btn-xs">details</button></Link>

            </th>
        </tr >
    );
};

export default ShowToyList;