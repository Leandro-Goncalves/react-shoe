import Card from "./components/Card";
import styled from "styled-components";

export type CardItem = {
  title: string;
  subtitle: string;
};

interface CardsProps {
  cards: CardItem[];
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
`;

type CardContainerProps = {
  isOdd: boolean;
  top: number;
};

const CardContainer = styled.div<CardContainerProps>`
  position: absolute;
  left: ${({ isOdd }) => (isOdd ? "initial" : "200px")};
  right: ${({ isOdd }) => (isOdd ? "200px" : "initial")};
  top: ${({ top }) => top}px;

  @media (max-width: 1500px) {
    left: 0;
    right: 0;
    top: initial;
    bottom: 0;
  }
`;

const Cards = ({ cards }: CardsProps) => {
  return (
    <Container>
      {cards.map((card, index) => (
        <CardContainer
          key={index}
          isOdd={index % 2 === 1}
          top={150 * index + 200}
        >
          <Card {...card} index={index} length={cards.length} />
        </CardContainer>
      ))}
    </Container>
  );
};

export default Cards;
