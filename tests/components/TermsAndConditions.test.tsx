import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  // Simplifying Tests
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };

  it("should render with correct text and initial state", () => {
    const { heading, checkbox, button } = renderComponent();
    // render(<TermsAndConditions />);

    // const heading = screen.getByRole("heading");

    // NO LONGER NEEDED BECAUSE ABOVE RETURN WOULD FAIL (first), if it's not in the DOM
    // expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    // const checkbox = screen.getByRole("checkbox");
    // expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // If we had more than one button, we can specify its name
    // const button = screen.getByRole("button", {name: /submit/i});

    // const button = screen.getByRole("button");
    // expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent(/submit/i);
    expect(button).toBeDisabled();
  });

  // USER INTERACTIONS
  it("should enable the button when the checkbox is checked", async () => {
    // Arrange part
    // render(<TermsAndConditions />);
    const { checkbox, button } = renderComponent();

    // Action
    // const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    // Assert
    expect(button).toBeEnabled();
  });
});
