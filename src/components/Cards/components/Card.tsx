import { CardItem } from "..";
import styled from "styled-components";
import { useAnimation } from "../../../pages/index";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

interface CardProps extends CardItem {
  index: number;
  length: number;
}

const Container = styled(motion.div)`
  max-width: 300px;

  @media (max-width: 1500px) {
    max-width: initial;
    text-align: center;
    padding: 24px;
  }
`;

type HeaderProps = {
  isOdd: boolean;
};

const Header = styled.h3<HeaderProps>`
  font-weight: 700;
  font-size: 20.45px;
  line-height: 30.67px;
  margin-bottom: 8px;
  padding-left: ${({ isOdd }) => (isOdd ? "8px" : "0")};
  position: relative;
  display: inline-block;
  top: 10;

  &:before {
    content: "";
    height: 15px;
    width: 3px;
    background-color: white;
    position: absolute;
    left: ${({ isOdd }) => (isOdd ? "0" : "initial")};
    right: ${({ isOdd }) => (isOdd ? "initial" : "-8px")};
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Body = styled.p`
  font-family: "Roboto Slab";
  font-weight: 400;
  font-size: 18px;
  line-height: 23.74px;
  opacity: 0.8;
`;

const Card = ({ title, subtitle, index, length }: CardProps) => {
  const isLessThen1500 = useMediaQuery("(max-width: 1500px)");
  const opacity = useAnimation(
    [
      0,
      0.2668 + 0.1334 * index,
      0.3335 + 0.1334 * index,
      0.4002 + 0.1334 * index,
      0.4669 + 0.1334 * index,
      0.4669 + 0.1334 * (length - 1),
      0.4802 + 0.1334 * (length - 1),
    ],
    [
      0,
      0,
      1,
      1,
      isLessThen1500 ? 0 : 0.2,
      isLessThen1500 ? 0 : 0.2,
      isLessThen1500 ? 0 : 1,
    ]
  );

  return (
    <Container style={{ opacity }}>
      <Header isOdd={index % 2 === 1}>{title}</Header>
      <Body>{subtitle}</Body>
    </Container>
  );
};

export default Card;
