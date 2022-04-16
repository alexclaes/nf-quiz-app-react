import styled from "styled-components";

export default function Footer({ navItems, onNavItemClick }) {
  return (
    <StyledFooter>
      <nav>
        <ul>
          {navItems.map(({ id, IconComponent }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => {
                  onNavItemClick(id);
                }}
              >
                <IconComponent />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: var(--primary);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-evenly;
  }

  li {
    margin: 1rem 0;
    padding: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  li:not(:first-child) {
    border-left: 1px solid var(--black);
  }

  button {
    color: var(--black);
    background: transparent;
    border: none;
    padding: 0;
  }

  svg {
    fill: currentcolor;
  }
`;
