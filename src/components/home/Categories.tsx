import { categories } from '../../data/categories';
import CategoryCard from './CategoryCard';

export default function Categories() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Popular Service Categories
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category} name={category} />
        ))}
      </div>
    </section>
  );
}