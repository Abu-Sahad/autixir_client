import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyDataDetails from "../MyDataDetails/MyDataDetails";
import Swal from "sweetalert2";

const MyToy = () => {
    const [myData, setMyData] = useState([]);
    const { user } = useContext(AuthContext);
    const url = user ? `http://localhost:5000/addToy/email?email=${user.email}` : "";

    useEffect(() => {
        if (user) {
            fetch(url)
                .then(res => res.json())
                .then(data => setMyData(data))
                .catch(error => console.error(error));
        }
    }, [url]);

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/addToy/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => {
                            if (res.status === 200) {
                                return res.json();
                            } else {
                                throw new Error('Failed to delete the booking');
                            }
                        })
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your coffee has been deleted.',
                                    'success'
                                );
                                const remaining = myData.filter(item => item._id !== id)
                                setMyData(remaining)
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            Swal.fire(
                                'Error',
                                'Failed to delete the booking',
                                'error'
                            );
                        });
                }
            });
    };

    return (
        <div>
            <h1 className="text-center text-4xl text-amber-400  mt-5 mb-10">My Toy:{myData.length}</h1>
            <div className="mb-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <h1>Delete</h1>
                                    </label>
                                </th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myData.map(item => <MyDataDetails
                                    key={item._id}
                                    item={item}
                                    handleDelete={handleDelete}
                                ></MyDataDetails>)
                            }



                                </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToy;
