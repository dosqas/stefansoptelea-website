'use client';
import { Category } from "@/types/portfolio"

interface CategoryListProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryList({ 
  categories, 
  activeCategory, 
  onCategoryChange
}: CategoryListProps) {
  return (
    <div className="bg-white h-auto md:h-screen pt-4">
      <div className="p-3 md:p-6">
        <div className="mb-4 md:mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-britannic-bold text-blue-800">
            SOPoMATIC
          </h1>
        </div>
        <nav className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full border border-blue-800 text-left px-2 md:px-4 py-1 my-1 md:my-2 transition-colors duration-400 flex justify-between items-center font-thin font-roboto text-sm md:text-base ${
                activeCategory === category.id
                  ? 'bg-blue-800 text-white'
                  : 'bg-white text-black hover:bg-blue-800 hover:text-white'
              }`}
            >
              <span>{category.displayName}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
