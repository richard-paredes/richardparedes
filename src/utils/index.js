/**
 *
 * @param {Array.<T>} list
 * @template T
 * @returns
 */
export const getRandom = (list) => {
  if (!list || list.length === 0) return undefined;
  return list[Math.floor(Math.random() * list.length)];
};
