import { Link } from 'react-router-dom';
import { COLORS } from '../../constants/theme';
import type { RoutePath } from '../../types/routes';

interface ButtonProps {
  children: React.ReactNode;
  to?: RoutePath;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  to, 
  variant = 'primary',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md';
  const variantStyles = variant === 'primary' 
    ? `${COLORS.primary.DEFAULT} ${COLORS.primary.hover} text-white`
    : `${COLORS.secondary.DEFAULT} ${COLORS.secondary.hover} ${COLORS.secondary.text} border ${COLORS.secondary.border}`;
  
  const styles = `${baseStyles} ${variantStyles} ${className}`;

  if (to) {
    return <Link to={to} className={styles}>{children}</Link>;
  }

  return (
    <button type="button" className={styles} onClick={onClick}>
      {children}
    </button>
  );
}