import React, { useState, useEffect } from 'react';

const FutureCollection = () => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        // Fetch data from the URL
        fetch('https://autixir-abu-sahad.vercel.app/future')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="text-center text-4xl font-bold text-amber-400  mt-5 mb-10">Future Toy Sports Cars</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map(item => (
                    <div key={item.id} className="border rounded-md overflow-hidden">
                        {/* Display the image */}
                        <img src={item.image} alt={item.title} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FutureCollection;
