import ArtOfSilver from "./components/ArtOfSilver";
import CategorySlider from "./components/CategorySlider";
import Header from "./components/Header";
import IconSlider from "./components/IconSlider";
import VideoBackgroundBanner from "./components/VideoBackgroundBanner";

export default function Home() {
  return (
    <>
      <Header />
      {/* Landing Video Section */}
      <VideoBackgroundBanner />
      <div className="flex flex-col justify-center text-center uppercase tracking-widest px-2 py-10" >
        <span className="text-sm mb-8 mt-20 font-light leading-tight text-gray-800">
          The Buccellati Icons
        </span>
        <IconSlider />
        <div className="py-20">
          <VideoBackgroundBanner
            videoSrc="/hisory.mp4"
            title="HISTORICAL RECORDS RESTORATION"
            buttonText="DISCOVER MORE"
            buttonLink="/shop"
            overlayColor="#"
            overlayOpacity="opacity-75"
            textColor="text-white"
            videoHeight="h-[90vh]"
          />
        </div>

        <span className="text-sm mb-8 mt-20 font-light leading-tight text-gray-800">
          Browse by Categories
        </span>
        <CategorySlider />
        <div className="py-20">
          <ArtOfSilver />
        </div>


      </div>
    </>
  );
}
