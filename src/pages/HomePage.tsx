import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Categories from '../components/home/Categories';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <Categories />
    </div>
  );
}