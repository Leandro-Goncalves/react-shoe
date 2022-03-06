import { useTransform, useViewportScroll } from "framer-motion";
import { InputRange } from "framer-motion/types/value/use-transform";
import { motion } from "framer-motion";
import InitialText from "../components/InitialText";
import Cards from "../components/Cards";
import Scene from "../components/Scene";
import Label3d from "../components/Label3d";
import Form from "../components/Form";
import { useMediaQuery } from "@react-hook/media-query";

const cardsData = [
  {
    title: "Design diferenciado",
    subtitle:
      "O tênis possui design unico, com cores e estilos diferentes, para que você possa encontrar o tênis ideal para você.",
  },
  {
    title: "Sola resistende",
    subtitle: "Com tecnologia para durar mais o seu tenis.",
  },
  {
    title: "Cadarço ajustavel",
    subtitle: "De fácil ajuste para o seu pé.",
  },
  {
    title: "Interior macio",
    subtitle: "Para se sentir confortável mesmo após horas de uso.",
  },
];

export function useAnimation(input: InputRange, output: number[]) {
  const { scrollYProgress } = useViewportScroll();

  return useTransform(scrollYProgress, input, output);
}

function App() {
  const isLessThen1500 = useMediaQuery("(max-width: 1500px)");
  const isLessThen1200 = useMediaQuery("(max-width: 1200px)");
  const opacity = useAnimation(
    [0, 0.2001, 0.2668, 0.9, 1],
    [0, 0, 1, 1, isLessThen1200 ? 0 : 1]
  );

  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}>
      <motion.div
        style={{
          opacity,
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          zIndex: 10,
        }}
      >
        <Scene />
      </motion.div>
      <div
        style={{
          width: "100%",
          height: "800vh",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "sticky",
            top: 0,
            zIndex: isLessThen1500 ? 11 : 0,
          }}
        >
          <InitialText />
          <Cards cards={cardsData} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "end",
          paddingBottom: isLessThen1200 ? 48 : 200,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Form />
        <Label3d />
      </div>
    </div>
  );
}

export default App;
