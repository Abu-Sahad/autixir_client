import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedToy = () => {
    const toy = useLoaderData();
    const { _id, price, availableQuantity, detailsDescription, name } = toy;
    console.log(_id)
    const handleUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value; // Updated id attribute
        const detailsDescription = form.description.value; // Updated id attribute
        const toyAll = { price, availableQuantity, detailsDescription };
        console.log(toyAll);

        fetch(`http://localhost:5000/addToy/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toyAll),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Toy Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                console.log(data);
                form.reset();
            });
    };
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24 rounded-md shadow-md mt-10 mb-10">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Update Toy: {name}
                </h1>
                <form onSubmit={handleUpdateToy}>
                    <div className="md:grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label
                                htmlFor="price"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Price
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                className="form-input w-full h-10 rounded ps-4"
                                placeholder="Enter price"
                                defaultValue={price}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="quantity"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Available Quantity
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                className="form-input w-full h-10 rounded ps-4"
                                placeholder="Enter available quantity"
                                defaultValue={availableQuantity}
                            />
                        </div>
                    </div>

                    <div className="md:grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Details Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                className="form-input w-full h-10 rounded ps-4"
                                placeholder="Enter description"
                                defaultValue={detailsDescription}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Update Toy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdatedToy;
