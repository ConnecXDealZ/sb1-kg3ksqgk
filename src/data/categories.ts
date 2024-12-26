export const categories = [
  'Home Maintenance',
  'Cleaning',
  'Electronics Repair',
  'Personal Care',
] as const;

export type Category = typeof categories[number];