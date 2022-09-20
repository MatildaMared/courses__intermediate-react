/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "@jest/globals";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react";
import Pet from "../Pet";

describe("Pet omponent", () => {
  it("displays a default thumbnail", () => {
    const pet = render(
      <StaticRouter>
        <Pet />
      </StaticRouter>
    );
    const petThumbnail = pet.getByTestId("thumbnail");

    expect(petThumbnail.src).toContain("none.jpg");
  });
});
