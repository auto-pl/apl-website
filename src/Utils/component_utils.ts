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

type AppendFunc = <T extends any>(
  list: Array<T>,
  to_append: Array<T>
) => Array<T>;
const append: AppendFunc = (list, to_append) => [...list, ...to_append];
const range = (start: number, end: number): Array<number> => {
  // I used a nested function to clean up the interface.
  // Otherwise, the interface would be (number, number) => number | Array<number>
  // which would suck to work with.
  const _range = (current: number, upper: number): number | Array<number> =>
    current < upper
      ? append([current], _range(current + 1, upper) as Array<number>)
      : [];
  return _range(start, end) as Array<number>;
};
export const get_keys = (length: number): Array<number> => range(0, length);
