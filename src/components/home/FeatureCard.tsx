import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center space-y-4 p-6 rounded-lg bg-white shadow-sm">
      <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}