import { NextPage } from "next";
import styled, { keyframes } from "styled-components";

import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const breatheAnimation = keyframes`
 0% {width: 0 }
 100% { width: 100% }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Subtitle = styled(motion.p)`
  font-size: 5rem;
  z-index: 2;
  color: "#fff";
  text-align: center;

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

const Title = styled.p`
  font-size: 5rem;
  z-index: 2;
  color: rgba(0, 0, 0, 1);
  -webkit-text-stroke: 1px #fff;
  position: relative;

  @media (max-width: 550px) {
    font-size: 3rem;
  }

  &:before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    width: 0;
    height: 100%;
    color: white;
    -webkit-text-stroke: 0px #fff;
    overflow: hidden;
    animation: ${breatheAnimation} 2s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

interface SuccessProps {
  color: string;
}

const Success: NextPage<SuccessProps> = ({ color }) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      });
    };
  }, []);

  return (
    <Container>
      <Confetti width={width} height={height} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title data-text="Sucesso!">Sucesso!</Title>
        <Subtitle
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
        >
          Compra realizada com sucesso
        </Subtitle>
      </div>
    </Container>
  );
};

export default Success;
