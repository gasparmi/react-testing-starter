import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no users when the users array is empty", () => {
    render(<UserList users={[]} />);

    const noUsersTag = screen.getByText(/no users/i);
    expect(noUsersTag).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      {
        id: 0,
        name: "Miguel",
        isAdmin: false,
      },
      {
        id: 1,
        name: "John",
        isAdmin: false,
      },
      {
        id: 2,
        name: "Luke",
        isAdmin: true,
      },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const userLink = screen.getByRole("link", { name: user.name });
      expect(userLink).toBeInTheDocument();
      expect(userLink).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
