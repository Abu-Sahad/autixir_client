import { useLoaderData } from "react-router-dom";
import ShowToyList from "../ShowToyList/ShowToyList";

const ShowToy = () => {
    const items = useLoaderData()
    return (
        <div>
            <h1 className="text-4xl text-amber-400 text-center mt-10 mb-10">
                All Items List: {items?.length}
            </h1>

            <div className="mb-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Seller Name</th>
                                <th>Name</th>
                                <th>Sub_Category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map(item => <ShowToyList
                                    key={item._id}
                                    item={item}
                                ></ShowToyList>)
                            }



                        </tbody>

                    </table>
                </div>
            </div>
        </div >
    );
};

export default ShowToy;



