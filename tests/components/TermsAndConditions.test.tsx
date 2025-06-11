import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";

describe("TermsAndConditions", () => {
  it("should render with correct text and initial state", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // If we had more than one button, we can specify its name
    // const button = screen.getByRole("button", {name: /submit/i});

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    // expect(button).toHaveTextContent(/submit/i);
    expect(button).toBeDisabled();
  });
});
