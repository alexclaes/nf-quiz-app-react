import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card', () => {
  it('render the question on the card', () => {
    render(<Card question="This is the question?" />);

    const questionText = screen.getByText(/This is the question?/i);

    expect(questionText).toBeInTheDocument();
  });

  it('should show the answer after clicking the button', async () => {
    render(
      <Card question="This is the question?" answer="This is the answer!" />
    );

    const answerText = screen.queryByText(/This is the answer!/i);
    expect(answerText).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: /show answer/i });
    await userEvent.click(button);

    const answerTextAfterClick = screen.getByText(/This is the answer!/i);
    expect(answerTextAfterClick).toBeInTheDocument();
  });

  it('should call the toggle bookmark handler with the given id', async () => {
    const handleToggle = jest.fn();

    render(<Card id="123" onToggleBookmark={handleToggle} />);

    const button = screen.getByRole('button', { name: /save as bookmark/i });
    await userEvent.click(button);

    expect(handleToggle).toHaveBeenCalledWith('123');
  });
});
