import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
}

export default function CategoryCard({ name }: CategoryCardProps) {
  return (
    <Link
      to={`/services?category=${name.toLowerCase().replace(' ', '-')}`}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 mt-2">Find trusted professionals</p>
    </Link>
  );
}