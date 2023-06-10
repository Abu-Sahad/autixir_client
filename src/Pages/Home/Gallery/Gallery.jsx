import React from 'react';

import img1 from '../../../assets/gallery/img-1.png';
import img2 from '../../../assets/gallery/img-2.png';
import img3 from '../../../assets/gallery/img-3.png';
import img4 from '../../../assets/gallery/img-4.png';
import img5 from '../../../assets/gallery/img-5.png';
import img6 from '../../../assets/gallery/img-6.png';

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div><h1 className="text-center text-4xl font-bold text-amber-400  mt-5 mb-10">Toy Sports Cars gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="p-4 shadow">
                        <img src={image} alt={`Image ${index + 1}`} className="w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
