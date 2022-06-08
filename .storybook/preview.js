import GlobalStyle from '../src/GlobalStyle';

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
];
