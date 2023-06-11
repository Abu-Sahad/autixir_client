import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext)

    const handleAddData = (e) => {
        e.preventDefault()
        const form = e.target
        const pictureName = form.picture_name.value;
        const name = form.name.value;
        const email = form.email.value;
        const sellerName = form.seller_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.available_quantity.value;
        const detailsDescription = form.details_description.value;
        const subCategory = form.sub_category.value;
        const allData = { pictureName, name, email, sellerName, price, rating, availableQuantity, detailsDescription, subCategory }
        //console.log(allData)
        if (
            !pictureName ||
            !name ||
            !email ||
            !sellerName ||
            !price ||
            !rating ||
            !availableQuantity ||
            !detailsDescription ||
            !subCategory
        ) {
            // Display an error message or perform any other desired action
            alert('Please fill in all the fields');
            return;
        }


        fetch('https://autixir-two.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {

                if (data?.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Sport Car Book Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                form.reset()
                console.log(data)
            })
    }
    return (
        <div className="mt-5 bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleAddData}>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="picture_name" className="block">Picture_Url:</label>
                        <input type="text" id="picture_name" name="picture_name" className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block">Name:</label>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label htmlFor="seller_email" className="block">Seller Name:</label>
                        <input type="text" id="seller_name" name="seller_name"
                            defaultValue={user?.displayName}
                            className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>
                    <div>
                        <label htmlFor="seller_email" className="block">Seller Email:</label>
                        <input type="email" id="seller_email" name="email"
                            defaultValue={user?.email}
                            className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label htmlFor="price" className="block">Price:</label>
                        <input type="number" id="price" name="price" className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block">Rating:</label>
                        <input type="number" id="rating" name="rating" className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label htmlFor="available_quantity" className="block">Available Quantity:</label>
                        <input type="number" id="available_quantity" name="available_quantity" className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>
                    <div>
                        <label htmlFor="sub_category" className="block">Sub Category:</label>
                        <input type="text" id="sub_category" name="sub_category" className="w-full border border-gray-300 rounded py-2 px-4" />
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-6 mt-4">
                    <div>
                        <label htmlFor="details_description" className="block">Details Description:</label>
                        <textarea id="details_description" name="details_description" className="w-full border border-gray-300 rounded py-2 px-4"></textarea>
                    </div>

                </div>
                <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Add To Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;