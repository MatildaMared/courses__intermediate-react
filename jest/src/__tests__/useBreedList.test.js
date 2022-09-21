/**
 * @jest-environment jsdom
 */

import { expect, it, describe } from "@jest/globals";
import { renderHook } from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";

describe("useBreedList hook", () => {
  it("returns an empty list with no animal", () => {
    const { result } = renderHook(() => useBreedList(""));
    const [breedList, status] = result.current;
    expect(breedList).toHaveLength(0);
    expect(status).toBe("unloaded");
  });

  it("gives back breeds with an animal", async () => {
    const breeds = [
      "Havanese",
      "Bichon Frise",
      "Poodle",
      "Maltese",
      "Golden Retriever",
      "Labrador",
      "Husky",
    ];

    fetch.mockResponseOnce(
      JSON.stringify({
        animal: "dog",
        breeds,
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"));

    await waitForNextUpdate();

    const [breedList, status] = result.current;

    expect(status).toBe("loaded");
    expect(breedList).toEqual(breedList);
  });
});
