import { useViewportScroll } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { useShoeProps } from "../../stores/shoe";
import { FormInput } from "./components/FormInput";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #141414;
  border-radius: 20px;
  position: absolute;
  opacity: 0;
  right: 48px;
  transform: translateY(50px);
  transition: opacity 0.2s linear, transform 0.2s linear;
  padding: 8px;
  z-index: 10;
  padding: 37px;

  @media (max-width: 1200px) {
    left: 48px;
    max-width: initial;
    width: initial;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const Colors = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 50px;
  flex-wrap: wrap;
  gap: 25px;
  padding-bottom: 24px;
`;

type ColorProps = {
  color: string;
  selected?: boolean;
};
const Color = styled.button<ColorProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${({ color }) => color};
  border: ${({ selected }) =>
    selected ? "5px solid rgba(0, 0, 0, 0.6);" : "none"};
  box-shadow: ${({ selected }) =>
    selected ? "0px 0px 10px rgba(255, 255, 255, 0.4)" : "none"};
  transition: border 0.2s, box-shadow 0.2s;

  cursor: pointer;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: end;
`;

const Submit = styled.button`
  max-width: 161px;
  width: 100%;
  height: 60px;
  background: #230e3e;
  border-radius: 20px;
  right: 0;
  border: 0;
  font-weight: bold;
  font-size: 20.5601px;
  line-height: 31px;
  cursor: pointer;

  transition: background 0.2s;
  &:hover {
    background: #10071d;
  }
`;

const Form = () => {
  const router = useRouter();
  const [scrollFinished, setScrollFinished] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  scrollYProgress.onChange((v) => {
    v === 1 ? setScrollFinished(true) : setScrollFinished(false);
  });
  const formAnimation = {
    opacity: 1,
    transform: "translateY(0px)",
  };

  const { color, changeColor } = useShoeProps();

  const handleClick = () => {
    router.push("/success");
  };

  return (
    <Container style={scrollFinished ? { ...formAnimation } : {}}>
      <Title>escolha a cor</Title>
      <Colors>
        <Color
          color="#000000"
          selected={color === "#000000"}
          onClick={() => changeColor("#000000")}
        />
        <Color
          color="#FF0000"
          selected={color === "#FF0000"}
          onClick={() => changeColor("#FF0000")}
        />
        <Color
          color="#00FF00"
          selected={color === "#00FF00"}
          onClick={() => changeColor("#00FF00")}
        />
        <Color
          color="#0000FF"
          selected={color === "#0000FF"}
          onClick={() => changeColor("#0000FF")}
        />
      </Colors>
      <FormBody>
        <FormInput label="Nome" />
        <FormInput label="E-mail" />
        <Submit onClick={handleClick}>Concluído</Submit>
      </FormBody>
    </Container>
  );
};

export default Form;
