/**
 * Get the appropriate animation class names for the priority level
 * @param priority The priority score assigned by the AI
 * @returns a CSS class name in `src/stlyes/hex.sass`
 */
export const get_priority_style = (priority: number): string => {
  switch (Math.round(priority / 25)) {
    case 1:
      return "HexPrioritised LowPriorityHex";
    case 2:
      return "HexPrioritised MedPriorityHex";
    case 3:
      return "HexPrioritised HighPriorityHex";
    case 4:
      return "HexPrioritised ExtremePriorityHex";
    default:
      return "Hex";
  }
};
