import Card from "./Card";
import styled from "styled-components";

export default function CardList({ cards = [], onToggleBookmark }) {
  return (
    <StyledCardList>
      {cards.map((card) => (
        <li key={card.id}>
          <Card {...card} onToggleBookmark={onToggleBookmark} />
        </li>
      ))}
    </StyledCardList>
  );
}

const StyledCardList = styled.ul`
  li:not(:last-child) {
    margin: 0 0 4rem 0;
  }
`;
