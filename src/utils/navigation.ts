import { RoutePath } from '../types/routes';

export function getNavLinkClass(currentPath: string, path: RoutePath, isMobile = false): string {
  const isActive = currentPath === path;
  
  return isMobile
    ? `${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-500 hover:text-gray-900'} block px-3 py-2 text-base font-medium`
    : `${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'} px-3 py-2 text-sm font-medium`;
}