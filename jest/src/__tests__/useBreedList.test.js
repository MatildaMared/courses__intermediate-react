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
});
