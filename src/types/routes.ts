export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];