import { Suspense, useState } from "react";
import Globe from "react-globe.gl";
import { Canvas } from "@react-three/fiber";
import { Tech } from "../components/Tech.jsx";

import Button from "../components/Button.jsx";
// import Insta from "../components/Insta.jsx";
// import Github from "../components/Github.jsx";

import CanvasLoader from "../components/CanvasLoader.jsx";
import { PerspectiveCamera } from "@react-three/drei";
import { section } from "motion/react-client";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [hasCopied2, setHasCopied2] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("harshalgupta.dev@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const handleCopy2 = () => {
    navigator.clipboard.writeText("https://www.linkedin.com/in/dev-harshxl/");
    setHasCopied2(true);

    setTimeout(() => {
      setHasCopied2(false);
    }, 2000);
  };

  const handleLoad = () => {
    const link = document.createElement("a");
    link.href = "/file/Harshal_Resume.pdf"; // Path to your PDF file
    link.download = "Harshal_Resume.pdf"; // Name of the downloaded file
    link.click();
  };

  return (
    <section id="about">
      <div className="h-20 w-full" style={{ background: "transparent" }}>
        Hello
      </div>
      <section className="c-space mt-20">
        <p className="head-text my-10">About Myself</p>

        <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
          <div className="col-span-1 xl:row-span-1">
            <div className="grid-container">
              <img
                src="assets/grid1.png"
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <div>
                <p className="flex justify-center grid-headtext">Hi, I’m Harshal Gupta</p>
                <p className="grid-subtext">
                  {/* I've honed my skills in Web development through internships and freelance projects in this domain. I've worked on a variety of projects, delivering efficient and user-friendly applications that meet real-world needs. */}
                  I love solving problems and building things through code.
                  Programming isn&apos;t just my profession—it&apos;s my
                  passion. I enjoy exploring new technologies, and enhancing my
                  skills.
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

          <div className="col-span-1 xl:row-span-1">
            <div className="grid-container">
              <img
                src="assets/grid3.png"
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <div>
                <p className="flex grid-headtext justify-center mb-3">Certifications</p>
                <p className="grid-subtext">
                <ul className="text-lg mt-3">
                  <li className="my-2">&gt; Full Stack Development : WSCubeTech</li>
                  <li className="my-2">&gt; DSA with JAVA : ApnaCollege</li>
                  <li className="my-2">&gt; MERN Stack Developer : ApnaCollege</li>
                  <li className="my-2">&gt; C Language : WSCubeTech</li>
                </ul>
                </p>

              
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-1">
            <div className="grid-container">
              <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-">
                <p className="grid-subtext text-center">Contact me</p>
              </div>

              <p className="grid-subtext mt-8 " style={{ textAlign: "center" }}>
                {" "}
                I&apos;m based in Jodhpur (Rajasthan), INDIA and <br />I am open
                to remote work worldwide.
              </p>
              <div className="copy-container mt-8   " onClick={handleCopy}>
                {/* <Button name="" isBeam containerClass="w-full  font-extrabold" /> */}
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white ">
                  harshalgupta.dev@gmail.com
                </p>
              </div>

              <div className="copy-container mt-8   " onClick={handleCopy2}>
                {/* <Button name="" isBeam containerClass="w-full  font-extrabold" /> */}
                <img
                  src={hasCopied2 ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white ">
                  linkedin.com/in/dev-harshxl/{" "}
                </p>
              </div>
              <br />
              {/* <p className="grid-subtext mt-8 " style={{textAlign:'center'}}>
                {" "}
                I&apos;m very flexible with time zone communications & locations

              </p> */}
            </div>
          </div>

          <div className="xl:col-span-3 xl:row-span-1 xl:h-fit">
            <div className="grid-container">
              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  <Tech />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
