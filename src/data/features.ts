import { Shield, Star, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    Icon: Zap,
    title: 'Instant Booking',
    description: 'Book services instantly with our real-time availability system.',
  },
  {
    Icon: Shield,
    title: 'Secure Payments',
    description: 'Pay securely through our integrated PayFast payment system.',
  },
  {
    Icon: Star,
    title: 'Verified Providers',
    description: 'All service providers are verified and rated by our community.',
  },
];