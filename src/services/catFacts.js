import { getRandom } from "@/utils";

/**
 * @typedef CatApiResponse
 * @type {{ fact: string; length: number; }}
 */

/**
 * Pulls from an CatFacts API to get a fact
 * @returns {Promise<string>} catFact: A cat fact
 */
export const getCatFact = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  if (response.ok) {
    /** @type {CatApiResponse} */
    const catFact = await response.json();
    return catFact.fact;
  }
  return "No cat fact available today :(";
};
