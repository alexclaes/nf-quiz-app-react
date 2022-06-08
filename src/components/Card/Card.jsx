import { useState } from 'react';
import styled from 'styled-components';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import Button from '../Button/Button';

export default function Card({
  id,
  question,
  answer,
  isBookmarked,
  onToggleBookmark,
}) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <StyledCard>
      <h2>{question}</h2>
      <Button
        onClick={() => {
          setIsAnswerVisible(!isAnswerVisible);
        }}
      >
        {isAnswerVisible ? 'Hide answer' : 'Show answer'}
      </Button>
      {isAnswerVisible && <p>{answer}</p>}
      <StyledCardBookmark>
        <BookmarkButton
          active={isBookmarked}
          onClick={() => {
            onToggleBookmark(id);
          }}
        />
      </StyledCardBookmark>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  background: var(--primary-light);
  padding: 3rem;
  position: relative;

  h2 {
    margin: 0 0 3rem 0;
  }

  p {
    padding: 2rem;
    font-style: italic;
  }
`;

const StyledCardBookmark = styled.div`
  position: absolute;
  right: 1rem;
  top: -1.5rem;
`;
