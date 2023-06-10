import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const item = useLoaderData();
    const { sellerName, name, subCategory, price, availableQuantity, pictureName, sellerEmail, rating, detailsDescription } = item;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center mb-5">Toy Details</h1>
            <div className="flex items-center justify-center">
                <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={pictureName} alt="Toy Picture" className="h-64 object-cover object-center" />
                    <div className="px-6 py-4">
                        <h2 className="text-lg font-bold mb-2">{name}</h2>
                        <p className="text-gray-700 mb-2">
                            <strong>Seller Name:</strong> {sellerName}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Seller Email:</strong> {sellerEmail}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Price:</strong> {price}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Rating:</strong> {rating}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Available Quantity:</strong> {availableQuantity}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Detail Description:</strong> {detailsDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;
