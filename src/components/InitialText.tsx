import { motion } from "framer-motion";
import styled from "styled-components";
import { useAnimation } from "../pages/index";

const Title = styled(motion.h1)`
  font-weight: 700;
  font-size: 100px;
  line-height: 150px;

  @media (max-width: 1200px) {
    font-size: 70px;
    line-height: 100px;
  }

  @media (max-width: 900px) {
    font-size: 50px;
    line-height: 80px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

const Subtitles = styled(motion.h2)`
  font-weight: 700;
  font-size: 33.75px;
  line-height: 50.62px;
  padding: 8px;
  text-align: initial;
  background: linear-gradient(
    270deg,
    #83709b -27.38%,
    rgba(35, 14, 62, 0) 100%
  );
  margin-left: auto;
  width: 725px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const InitialText = () => {
  const title = {
    y: useAnimation([0, 0.0667], [100, 0]),
    opacity: useAnimation([0, 0.0667], [0, 1]),
  };

  const subtitle = {
    x: useAnimation([0, 0.1067, 0.1667], [725, 725, 0]),
    opacity: useAnimation([0, 0.1067, 0.1667], [0, 0, 1]),
  };

  return (
    <motion.div
      style={{
        width: "100%",
        textAlign: "center",
        position: "absolute",
        top: 8,
        overflow: "hidden",
      }}
    >
      <Title
        style={{
          ...title,
        }}
      >
        Seu futuro do seu jeito
      </Title>
      <Subtitles
        style={{
          ...subtitle,
        }}
      >
        o futuro começa aqui
      </Subtitles>
    </motion.div>
  );
};

export default InitialText;
