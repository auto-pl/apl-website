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
 *
 * @param collections The folders to query (E.G `[bases, info]` -> `base/info`)
 * @param parameters The extra arguments for the query
 * @returns
 */
const build_url = (collections: Array<string>) => (
  parameters?: Array<Record<string, string | number>>
): string => {
  const domain = "http://127.0.0.1:5000/";
  const path = domain + collections.join("/");
  return parameters
    ? path +
        "?" +
        parameters
          .map((p) => `${Object.keys(p)[0]}=${Object.values(p)[0]}`)
          .join("&")
    : path;
};

/**
 * Fetch something from the AutoPL API.
 * This function validates that the query uses valid collections to make debugging easier.
 * @param url The APL API query
 * @returns The response
 * @throws `ValidationError` if the URL is invalid.
 * @throws Errors from `axios.get` are not handled
 */
export const query = (collections: Array<string>) => async (
  parameters?: Array<Record<string, string | number>>
): Promise<object> => {
  const url = build_url(collections)(parameters);
  const validated = validate_query(url);
  return (await get(validated)).data;
};
