import { Link, useLocation } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { ROUTES } from '../../types/routes';
import { getNavLinkClass } from '../../utils/navigation';

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <div className="hidden sm:flex sm:items-center sm:space-x-8">
      <Link to={ROUTES.SERVICES} className={getNavLinkClass(pathname, ROUTES.SERVICES)}>
        Services
      </Link>
      <Link to={ROUTES.DASHBOARD} className={getNavLinkClass(pathname, ROUTES.DASHBOARD)}>
        Dashboard
      </Link>
      <Link
        to={ROUTES.LOGIN}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <LogIn className="h-4 w-4 mr-2" />
        Login
      </Link>
    </div>
  );
}