import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../types/routes';
import { getNavLinkClass } from '../../utils/navigation';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const { pathname } = useLocation();

  if (!isOpen) return null;

  return (
    <div className="sm:hidden">
      <div className="pt-2 pb-3 space-y-1">
        <Link to={ROUTES.SERVICES} className={getNavLinkClass(pathname, ROUTES.SERVICES, true)}>
          Services
        </Link>
        <Link to={ROUTES.DASHBOARD} className={getNavLinkClass(pathname, ROUTES.DASHBOARD, true)}>
          Dashboard
        </Link>
        <Link to={ROUTES.LOGIN} className={getNavLinkClass(pathname, ROUTES.LOGIN, true)}>
          Login
        </Link>
      </div>
    </div>
  );
}