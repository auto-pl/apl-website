import get from "axios";

type URLTree = { name: string; children?: Array<URLTree> };
/**
 * The valid endpoints
 */
const url_tree: Array<URLTree> = [
  { name: "bases", children: [{ name: "info" }, { name: "status" }] },
  { name: "servers", children: [{ name: "info" }, { name: "status" }] },
  { name: "continents", children: [{ name: "info" }, { name: "status" }] },
  { name: "outfits", children: [{ name: "info" }] },
];

const tree_in_url = (url: string) => (
  tree: Array<URLTree>
): URLTree | undefined => tree.find((e) => url.includes(e.name));

class ValidationError extends Error {}

const validate_query = (url: string): string => {
  const in_url = tree_in_url(url);
  const parent = in_url(url_tree); // check that the URL queries a valid folder
  if (!parent) throw new ValidationError("Invalid folder for query");
  const child = parent.children ? in_url(parent.children) : undefined; // check that the URL queries a valid endpoint
  if (!child) throw new ValidationError("Invalid endpoint for query");
  return url; // return URL if all goes well
};

/**
 * Fetch something from the AutoPL API.
 * This function validates that the query uses valid collections to make debugging easier.
 * @param url The APL API query
 * @returns The response
 * @throws `ValidationError` if the URL is invalid.
 * @throws Errors from `axios.get` are not handled
 */
export const query_url = async (url: string): Promise<object> => {
  const validated = validate_query(url);
  return await get(validated);
};
