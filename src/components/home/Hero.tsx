import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { ROUTES } from '../../types/routes';

export default function Hero() {
  return (
    <section className="text-center space-y-8">
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900">
        Find Local Services,{' '}
        <span className="text-indigo-600">Connect with Experts</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        ConnecX-DealZ connects you with trusted local service providers for all your needs.
        Get instant quotes, book services, and pay securely.
      </p>
      <div className="flex justify-center gap-4">
        <Button to={ROUTES.SERVICES}>
          Find Services
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button to={ROUTES.REGISTER} variant="secondary">
          Become a Provider
        </Button>
      </div>
    </section>
  );
}