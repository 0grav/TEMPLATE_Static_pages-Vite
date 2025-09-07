/**
 * Utility function for combining Tailwind CSS classes
 * Useful for conditional classes and overrides
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
