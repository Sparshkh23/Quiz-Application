import React from "react";
import cameraIcon from "../assets/camera.png";
import sampleGif from "../assets/hero-animation.gif"; // ✅ put your gif file inside assets

const Home = () => {
  return (
    <>
      {/* Shine effect styles */}
      <style>{`
        @keyframes slowShine {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
        .shine {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          overflow: hidden;
        }
        .shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.5) 50%,
            rgba(255,255,255,0) 100%
          );
          background-size: 200% 100%;
          animation: slowShine 4s ease-in-out infinite;
          z-index: 0;
        }
        .shine img {
          position: relative;
          z-index: 1;
          display: block;
        }
      `}</style>

      {/* Layout */}
      <section className="bg-green-100 min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 overflow-hidden gap-8">

        {/* Left Section */}
        <div className="flex-1 text-left">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-[700] text-black leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
             Create & watch to
            <br />
            {/* keep "the vlogs" together */}
            <span
              className="inline-flex items-center whitespace-nowrap mt-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="mr-2">the</span>
              <span className="inline-flex items-center">
                <span>vl</span>
                <span
                  className="shine mx-1"
                  style={{
                    transform: "rotate(-15deg) translateY(-14px)",
                    padding: "4px",
                  }}
                >
                  <img
                    src={cameraIcon}
                    alt="Camera Emoji"
                    style={{ height: "1.5em", width: "1.5em" }}
                  />
                </span>
                <span className="-ml-1">gs</span>
              </span>
            </span>
          </h1>

          <h2 className="mt-4 text-base sm:text-lg text-gray-900 font-medium flex flex-wrap">
            Watch the most popular vlogs&nbsp;on just one platform –{" "}
            <span className="font-bold">STREAMORY</span>
          </h2>
        </div>

        {/* Right Section (GIF) */}
        <div className="flex-1 flex justify-center">
          <img
            src={sampleGif}
            alt="Vlog GIF"
            className="rounded-2xl shadow-lg max-w-md w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
