import React from 'react';

const VideoBackgroundBanner = ({
  videoSrc = '/landing3.mp4', 
  title = 'HOLIDAY GIFT GUIDE',
  buttonText = 'DISCOVER MORE',
  buttonLink = '#',
  overlayColor = 'bg-black', 
  overlayOpacity = 'opacity-50', 
  textColor = 'text-white',
  videoHeight = 'h-screen', 
}) => {
  return (
    <div className={`relative w-full ${videoHeight}`}>
      {/* Black shadow overlay */}
      <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity} z-10`}></div>

      <div className="absolute inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="100%"
          src={videoSrc}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-[63vh] inset-0 flex items-center justify-center z-20 tracking-widest">
        <div className={`text-center ${textColor} px-4`}>
          <h3 className="text-3xl md:text-5xl font-normal mb-4">{title}</h3>
          <a
            href={buttonLink}
            className="inline-block mt-1 px-4 border py-2 bg-primary-500 text-sm font-semibold hover:bg-primary-600 transition"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoBackgroundBanner;
