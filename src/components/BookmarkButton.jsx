import styled from 'styled-components';
import BookmarkIcon from './icons/BookmarkIcon';

export default function BookmarkButton({ active, ...otherProps }) {
  return (
    <StyledBookmarkButton
      active={active}
      aria-label={active ? 'remove bookmark' : 'save as bookmark'}
      {...otherProps}
    >
      <BookmarkIcon />
    </StyledBookmarkButton>
  );
}

const StyledBookmarkButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--${({ active }) => (active ? 'primary' : 'white')});

  svg {
    fill: currentColor;
  }
`;
