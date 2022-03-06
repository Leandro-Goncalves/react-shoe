import { useMediaQuery } from "@react-hook/media-query";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { useViewportScroll } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import ShoeDraco from "../models/ShoeDraco";

const Scene = () => {
  const OrbitControlsRef = useRef<any>();
  const { scrollYProgress } = useViewportScroll();
  const isLessThen1200 = useMediaQuery("(max-width: 1200px)");

  const [scrollFinished, setScrollFinished] = useState(false);
  scrollYProgress.onChange((value) => {
    if (value === 1) {
      setScrollFinished(true);
    } else {
      setScrollFinished(false);
    }
  });

  useEffect(() => {
    const controls = OrbitControlsRef.current;
    if (controls) {
      if (!scrollFinished) {
        controls.setAzimuthalAngle(0);
      }
    }
  }, [scrollFinished]);

  return (
    <Canvas
      style={{
        width: "70%",
        height: "100vh",
        marginLeft: scrollFinished && !isLessThen1200 ? 0 : "15%",
        transition: "margin-left 0.2s ease-in-out",
      }}
      camera={{ position: [0, 0, 2] }}
    >
      <Suspense fallback={null}>
        <ShoeDraco />
        <Environment files="royal_esplanade_1k.hdr" />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enableRotate={scrollFinished && !isLessThen1200}
        enablePan={false}
        ref={OrbitControlsRef}
      />
      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
