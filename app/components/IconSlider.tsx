"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
  {
    title: 'MACRI',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Macri.jpg'
  },
  {
    title: 'OPERA',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Opera.jpg'
  },
  {
    title: 'HAWAII',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Hawaii.jpg'
  },
  {
    title: 'ROMBI',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Rombi_CELESTE.jpg'
  },
  {
    title: 'RAMAGE',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Ramage_copia2.jpg'
  },
  {
    title: 'ÉTOILÉE',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Etoilee.jpg'
  },
  {
    title: 'TULLE',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Tulle.jpg'
  },
  {
    title: 'GHIRLANDA',
    link: '#',
    image: 'https://www.buccellati.com/media/.renditions/wysiwyg/2_HP_Ghirlanda.jpg'
  }
];

const CustomSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true, 
    speed: 400,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="pagebuilder-slider">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="p-4">
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <div className="pagebuilder-slide-wrapper relative bg-cover bg-center h-96">
                <div
                  className="pagebuilder-image bg-cover bg-center h-full"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
              <div className="pagebuilder-title mt-1 text-center">
                <p className="text-sm font-semibold text-gray-800">{slide.title}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
