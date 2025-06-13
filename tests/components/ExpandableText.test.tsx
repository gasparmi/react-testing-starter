import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpandableText from "../../src/components/ExpandableText";

describe("ExpandableText", () => {
  it("should render text without Expand button when text is <= limit (255 chars)", () => {
    render(
      <ExpandableText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias." />
    );

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent("Lorem");
  });

  it("should render text with Show More button when text is > limit (255 chars)", () => {
    render(
      <ExpandableText text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos illo molestias nobis, voluptas earum assumenda vel placeat dolores quae itaque accusantium consectetur officia aliquid minima! Iste, quas! Nobis harum, exercitationem tempore at veniam ipsum qui quaerat id similique, numquam necessitatibus nisi maxime reprehenderit laborum voluptatem. Expedita unde temporibus asperiores quos sunt commodi maxime. Vel temporibus expedita doloremque dolorem illo, nostrum possimus excepturi consequatur facere, voluptatem, quae harum saepe? Nemo illo expedita alias, voluptate mollitia maiores assumenda corrupti consectetur iusto quam maxime, dolorem dolore! Accusantium, aut perspiciatis suscipit minima alias deleniti saepe labore odit, unde ipsam veniam nihil laboriosam vel ipsum!" />
    );

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent("Lorem");

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/show more/i);
  });

  it("should render text with Show Less button when Show More btn is clicked AND vice-versa", async () => {
    render(
      <ExpandableText text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos illo molestias nobis, voluptas earum assumenda vel placeat dolores quae itaque accusantium consectetur officia aliquid minima! Iste, quas! Nobis harum, exercitationem tempore at veniam ipsum qui quaerat id similique, numquam necessitatibus nisi maxime reprehenderit laborum voluptatem. Expedita unde temporibus asperiores quos sunt commodi maxime. Vel temporibus expedita doloremque dolorem illo, nostrum possimus excepturi consequatur facere, voluptatem, quae harum saepe? Nemo illo expedita alias, voluptate mollitia maiores assumenda corrupti consectetur iusto quam maxime, dolorem dolore! Accusantium, aut perspiciatis suscipit minima alias deleniti saepe labore odit, unde ipsam veniam nihil laboriosam vel ipsum!" />
    );

    /*** 1st TEST ***/
    // Test that Show More button exists
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/show more/i);

    // ACT: Click on Show More button
    const user = userEvent.setup();
    await user.click(button);

    // Assert
    expect(button).toHaveTextContent(/show less/i);

    /*** 2nd TEST ***/
    // Click on SHOW LESS
    await user.click(button);
    expect(button).toHaveTextContent(/show more/i);
  });
});
