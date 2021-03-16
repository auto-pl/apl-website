/**
 * Get a function that combines dynamic CSS class names with constant class names.
 * @param constant_classes The CSS class names to always add.
 * @param decide_variable_classes The callback that chooses which variable class names to add.
 */
export const get_class_names = (
  constant_classes: string,
  decide_variable_classes: (...class_values: any[]) => string
): ((...class_values: any[]) => string) => {
  return (...class_values) =>
    [decide_variable_classes(...class_values), constant_classes].join(" ");
};

type AppendFunc = <T extends Array<any>, Z extends any>(
  list: T,
  to_append: Z
) => [...T, Z];
const append: AppendFunc = (list, to_append) => list.slice().concat(to_append);
const range = (start: number, end: number): Array<number> => {
  const _range = (current: number, end: number): number | Array<number> =>
    current < end ? append([current], _range(current + 1, end) as number) : [];
  return range(start, end) as Array<number>;
};
export const get_keys = (length: number): Array<number> => range(0, length);
