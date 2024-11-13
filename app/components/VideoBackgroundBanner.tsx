const VideoBackgroundBanner = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Black shadow overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="absolute inset-0 z-[-1]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                    height="100%"
                    src="/landing3.mp4"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute top-[70vh] inset-0 flex items-center justify-center z-20">
                <div className="text-center text-white px-4">
                    <h3 className="text-3xl md:text-5xl font-medium mb-4">HOLIDAY GIFT GUIDE</h3>
                    <a
                        href="#"
                        className="inline-block px-6 border py-3 bg-primary-500 text-base font-normal rounded-md hover:bg-primary-600 transition"
                    >
                        DISCOVER MORE
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VideoBackgroundBanner;
