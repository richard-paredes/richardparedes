import { getRandom } from "@/utils";

/**
 * @typedef CatApiResponse
 * @type {{ _id: string, _v: number, user: string, text: string, updatedAt: string, sendDate: string, deleted: boolean, source: string, type: string, status: {verified: boolean, feedback: string, sentCount: number}}
 */

/**
 * Pulls from an CatFacts API to get a fact
 * @returns {Promise<string>} catFact: A cat fact
 */
export const getCatFact = async () => {
  const response = await fetch("https://cat-fact.herokuapp.com/facts");
  /** @type {CatApiResponse[]} */
  const catFacts = await response.json();
  const verifiedFacts = catFacts.filter((fact) => fact.status.verified);
  const verifiedFact = getRandom(verifiedFacts);
  if (verifiedFact) return verifiedFact.text;
  return "No cat fact available today :(";
};
