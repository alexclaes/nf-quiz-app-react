import Card from "./Card";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("The Card component", () => {
  it("render the question card on the screen", () => {
    render(<Card question="some question" />);

    const questionText = screen.getByText(/some question/i);

    expect(questionText).toBeInTheDocument();
    expect(questionText.tagName).toBe("H2");
  });

  it("should show the answer after clicking the button", async () => {
    render(<Card answer="the answer" />);

    const answerTextBefore = screen.queryByText(/the answer/i);
    expect(answerTextBefore).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: /show answer/i });
    await userEvent.click(button);

    const answerTextAfter = screen.getByText(/the answer/i);
    expect(answerTextAfter).toBeInTheDocument();
  });

  it("should call the toggle bookmark handler with the given id", async () => {
    const handleToggle = jest.fn();

    render(<Card onToggleBookmark={handleToggle} id="1234" />);

    const button = screen.getByRole("button", { name: /save as bookmark/i });

    await userEvent.click(button);

    expect(handleToggle).toHaveBeenCalledWith("1234");
  });
});
