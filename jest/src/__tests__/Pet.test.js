/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Pet from "../Pet";

describe("Pet omponent", () => {
  it("displays a default thumbnail", () => {
    const pet = render(<Pet />);
    const petThumbnail = pet.getByTestId("thumbnail");

    expect(petThumbnail.src).toContain("none.jpg");
  });
});
