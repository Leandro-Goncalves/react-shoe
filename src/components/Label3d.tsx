import { useMediaQuery } from "@react-hook/media-query";
import { useViewportScroll } from "framer-motion";
import { useState } from "react";

const Label3d = () => {
  const isLessThen1200 = useMediaQuery("(max-width: 1200px)");
  const [scrollFinished, setScrollFinished] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  scrollYProgress.onChange((v) => {
    v === 1 ? setScrollFinished(true) : setScrollFinished(false);
  });

  return (
    <div
      style={{
        opacity: scrollFinished && !isLessThen1200 ? 1 : 0,
        transition: "opacity 0.2s",
        display: "flex",
        alignItems: "center",
        gap: 24,
        position: "absolute",
        right: "65%",
        transform: "translateX(50%)",
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 8,
      }}
    >
      <img
        src="./icons/cube3d.svg"
        alt="mova o produto para ver em realidade aumentada"
        style={{ width: 32, height: 32 }}
      />
      <h3 style={{ fontFamily: "Roboto Slab", fontSize: 16, fontWeight: 300 }}>
        mova o produto para ver em realidade aumentada
      </h3>
    </div>
  );
};

export default Label3d;
