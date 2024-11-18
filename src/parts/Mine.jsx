import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HackerRoom } from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Archery from "../components/Archery.jsx";
import Reactor from "../components/Reactor.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Mine = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  //from constants to define rotation, size, scale for each size
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.01,
  //     max: 10
  //   }
  // });
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans z-20">
          Hi, I am Harshal <span className="waving-hand">👋</span>
        </p>

        <p className="hero_tag text-gray_gradient z-20">
        Building the web, one pixel at a time        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                //using x(the scale , position and rotation function and leva to get sliders using usecontrols)
                // scale={[x.scale, x.scale, x.scale]}
                // position={[x.positionX, x.positionY, x.positionZ]}
                // rotation={[x.rotationX, x.rotationY, x.rotationZ]}

                //  for different screen sizes
                // scale={isMobile ? 0.7 : [0.1, 16, 2]}

                //using calculateSizes function
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Archery position={sizes.targetPosition} />
              <Reactor position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              {/* <Cube position={sizes.cubePosition} /> */}
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-2 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Explore" isBeam containerClass="sm:w-fit w-full sm:min-w-96 font-extrabold "/>
        </a>
      </div>

    </section>
  );
};

export default Mine;
