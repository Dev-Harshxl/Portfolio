import { Suspense, useState } from "react";
import Globe from "react-globe.gl";
import { Canvas } from "@react-three/fiber";

import Button from "../components/Button.jsx";
import Insta from "../components/Insta.jsx";
import Github from "../components/Github.jsx";

import CanvasLoader from "../components/CanvasLoader.jsx";
import { PerspectiveCamera } from "@react-three/drei";

const About = () => {
 

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("harshalgupta.dev@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleLoad = () => {
    const link = document.createElement("a");
    link.href = "/file/Harshal_Resume.pdf"; // Path to your PDF file
    link.download = "Harshal_Resume.pdf"; // Name of the downloaded file
    link.click();
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Harshal Gupta</p>
              <p className="grid-subtext">
                {/* I've honed my skills in Web development through internships and freelance projects in this domain. I've worked on a variety of projects, delivering efficient and user-friendly applications that meet real-world needs. */}
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>

              <div
                className="cursor-pointer flex justify-end items-center mt-7 "
                onClick={handleLoad}
              >
                <Button
                  name="Download Resume"
                  isBeam
                  containerClass=" font-extrabold"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 73.0243,
                    lng: -26.2389,
                    text: "I am here",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext ">
                I’m very flexible with time zone communications & locations
              </p>
              {/* <Button name="E-mail" isBeam containerClass="w-full mt-5 font-extrabold" /> */}

              <div className="copy-container mt-5 mr-5  " onClick={handleCopy}>
                {/* <Button name="" isBeam containerClass="w-full  font-extrabold" /> */}
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white ">
                  harshalgupta.dev@gmail.com
                </p>
              </div>
              <br />
              <p className="grid-subtext ">
                {" "}
                I&apos;m based in Jodhpur (Rajasthan), INDIA and <br />I am open
                to remote work worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
            {/* <p className="grid-headtext w-fit m-auto">Stay Connected</p> */}
          <div className="grid-container">
            <div>
              <Canvas>
                <Suspense fallback={<CanvasLoader />}>
                  <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                  <group>
                    <Insta
                      scale={6}
                      position={[-10, 0, 0]}
                      rotation={[0, 4.7, 0]}
                    />
                    <Github
                      scale={3}
                      position={[20,10, 0]}
                      rotation={[10, 0, 0]}
                    />
                  </group>
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-1">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
