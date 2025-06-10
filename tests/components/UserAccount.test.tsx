import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render the heading User Profile", () => {
    render(<UserAccount user={{ id: 0, name: "" }} />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/user profile/i);
  });

  it("should render the User name when name is provided", () => {
    render(<UserAccount user={{ id: 1, name: "Miguel" }} />);

    // getByText(), For tags that have no role or non-interactive elements, like divs
    const userName = screen.getByText("Miguel");
    expect(userName).toBeInTheDocument;
  });

  it("should render the Edit button when user is Admin", () => {
    render(<UserAccount user={{ id: 0, name: "Miguel", isAdmin: true }} />);

    const editButton = screen.getByRole("button");
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/edit/i);
  });

  it("should NOT render the Edit button when user is NOT Admin", () => {
    render(<UserAccount user={{ id: 1, name: "Miguel", isAdmin: false }} />);

    // queryByRole, for tags that are not in the DOM
    const editButton = screen.queryByRole("button");
    expect(editButton).not.toBeInTheDocument();
  });
});
