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
