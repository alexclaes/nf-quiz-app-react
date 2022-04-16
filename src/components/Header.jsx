import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 0;
  background: var(--primary);
  text-align: center;
`;
