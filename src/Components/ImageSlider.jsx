import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import './imageslider.css';
import '../Pages/home.css';
import Image1 from '../Assets/Stationary-bkgroundimg.jpeg';
import Image2 from '../Assets/ScienceLab.jpeg';
import Image3 from '../Assets/ComputerLab.jpeg';
import { Button } from 'primereact/button';

const ImageSlider = () => {
    const [images] = useState([
        { src: Image1, alt: 'Image 1' },
        { src: Image2, alt: 'Image 2' },
        { src: Image3, alt: 'Image 3' }
    ]);

    const itemTemplate = (image) => {
        return (
        <>
            <div className="image-item">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                />

            </div>

        </>
        );
    };

    return (
        <div className="image-slider" style={{ margin: 'auto' }}>
            <div className="overlay">
                <h1>Check Out Our Courses</h1>
                <p className="overlay-text">Building Tomorrow’s Innovators Today</p>
                <Button className='courses-btn btn'>Get Our Courses</Button>
            </div>
            <Carousel
                value={images}
                itemTemplate={itemTemplate}
                numVisible={1}
                numScroll={1}
                autoplayInterval={3000}
                circular
            />
        </div>
    );
};

export default ImageSlider;
