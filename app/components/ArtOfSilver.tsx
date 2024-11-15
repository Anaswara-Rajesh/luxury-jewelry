"use client";
import Slider from "react-slick";

interface SliderItemProps {
    image: string;
    name: string;
    prize: string;
}

const SliderItem = ({ image, name, prize }: SliderItemProps) => (
    <div className="">
        <img src={image} alt={name} className="w-full h-[50vh] object-contain" />
        <div className=" bottom-4 left-4 text-black">
            <h3 className="font-medium">{name}</h3>
        </div>
        <p className="py-10">{prize}</p>
    </div>
);

const CustomComponent = () => {
    const sliderItems: SliderItemProps[] = [
        { image: "https://www.buccellati.com/media/catalog/product/cache/f32ea68c9c107d6f3a07ad7e3694ba92/J/A/JAGEAR023423_V1xxl_2.png", name: "BLOSSOMS DIAMONDS AND GOLD EARRINGS IN SILVER WITH DIAMONDS", prize: "$100" },
        { image: "https://www.buccellati.com/media/catalog/product/cache/f32ea68c9c107d6f3a07ad7e3694ba92/J/A/JAGBRA023422_V1xxl_2.png", name: "GOLD BRACELET IN SILVER WITH DIAMONDS", prize: "$150" },
        { image: "https://www.buccellati.com/media/catalog/product/cache/f32ea68c9c107d6f3a07ad7e3694ba92/J/A/JAGPEN023407_V1xxl_2.png", name: "GOLD PENDANT IN SILVER WITH DIAMONDS", prize: "$200" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="grid grid-cols-2 w-full h-screen">

            <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url("https://www.buccellati.com/media/wysiwyg/5_HP_Christmas.jpg")' }}>
                <div className="flex items-end justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center text-white px-6 py-4">
                        <h1 className="text-4xl font-medium tracking-widest">THE ART OF SILVER</h1>
                        <p className="mt-4 text-sm tracking-widest">BLOSSOMS MAID LEAF</p>
                    </div>
                </div>
            </div>


            <div className="p-24 bg-gray-100">
                <Slider {...settings}>
                    {sliderItems.map((item, index) => (
                        <SliderItem key={index} image={item.image} name={item.name} prize={item.prize} />
                    ))}
                </Slider>

                <div className="flex mt-4 pt-6 items-end justify-center">
                    <p className=" text-sm tracking-widest">DISCOVER</p>
                </div>
            </div>
        </div>
    );
};

export default CustomComponent;
