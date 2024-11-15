"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData2 = [
    {
        title: 'Bracelets',
        description: 'Discover',
        link: '#',
        image: 'https://www.buccellati.com/media/wysiwyg/1_BraceletsCategorie.jpg'
    },
    {
        title: 'Pendants',
        description: 'Discover',
        link: '#',
        image: 'https://www.buccellati.com/media/wysiwyg/6_PendantsCategorie.jpg'
    },
    {
        title: 'Rings',
        description: 'Discover',
        link: '#',
        image: 'https://www.buccellati.com/media/wysiwyg/7_RingsCategorie.jpg'
    },
    {
        title: 'Bracelets',
        description: 'Discover',
        link: '#',
        image: 'https://www.buccellati.com/media/wysiwyg/1_BraceletsCategorie.jpg'
    },
    {
        title: 'Cufflinks',
        description: 'Discover',
        link: '#',
        image: 'https://www.buccellati.com/media/wysiwyg/2_CufflinksCategorie.jpg'
    },
    {
        title: 'Earrings',
        description: 'Discover',
        link: '#',
        image: 'https://www.buccellati.com/media/wysiwyg/3_EarringsCategorie.jpg'
    },
    {
        title: 'Éternelle',
        description: 'Discover',
        link: '#',
        image: "https://www.buccellati.com/media/wysiwyg/4_EternellesCategorie.jpg"
    },
    {
        title: 'Necklaces',
        description: 'Discover',
        link: '#',
        image: "https://www.buccellati.com/media/wysiwyg/5_NecklacesCategorie.jpg"
    }
];

const CategorySlider = () => {
    const settings2 = {
        dots: true, 
        arrows: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        centerMode: true, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        centerPadding: '20%', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '20%',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '15%',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '10%',
                }
            }
        ]
    };

    return (
        <div className="pagebuilder-slider">
            <Slider {...settings2}>
                {sliderData2.map((slide, index) => (
                    <div key={index} className="p-4">
                        {/* <a href={slide.link} target="_blank" rel="noopener noreferrer"> */}
                        <div className="pagebuilder-slide-wrapper relative">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-auto  max-h-[60vh] object-contain"
                            />


                            <div className="pagebuilder-content text-center mt-4 -tracking-widest">
                                <h3 className="text-8xl font-medium tracking-widest text-black slick-active:text-black">
                                    {slide.title}
                                </h3>
                                <p className="text-lg text-black font-medium tracking-widest slick-active:text-black">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                        {/* </a> */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategorySlider;
