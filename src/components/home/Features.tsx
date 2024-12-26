import { features } from '../../data/features';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </section>
  );
}