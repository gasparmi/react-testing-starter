import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render an empty DOM, no image URLs present", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);

    expect(container).toBeEmptyDOMElement();

    // expect(screen.queryByRole("img")).toBeNull();
  });

  it("should render list of image URLs", () => {
    const imageLinks: string[] = [
      "https://example.com/images/fake1.jpg",
      "https://example.com/images/fake2.jpg",
      "https://example.com/images/fake3.jpg",
      "https://example.com/images/fake4.jpg",
      "https://example.com/images/fake5.jpg",
    ];

    render(<ProductImageGallery imageUrls={imageLinks} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(5);
    imageLinks.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
