'use client';
import { Category } from "@/types/portfolio"
import { useEffect } from 'react';

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
  useEffect(() => {
    const adjustSVGViewBox = () => {
      const titleSvg = document.getElementById("titlesvg");
      if (titleSvg) {
        const textElement = titleSvg.querySelector("text");
        if (textElement) {
          try {
            const bbox = textElement.getBBox();
            const viewBox = [
              bbox.x, 
              bbox.y, 
              bbox.width, 
              bbox.height
            ].join(" ");
            titleSvg.setAttribute("viewBox", viewBox);
          } catch {
            console.log("SVG not ready yet, retrying...");
            setTimeout(adjustSVGViewBox, 100);
          }
        }
      }
    };

    setTimeout(adjustSVGViewBox, 100);

    window.addEventListener('resize', adjustSVGViewBox);
    
    return () => {
      window.removeEventListener('resize', adjustSVGViewBox);
    };
  }, []);

  return (
    <div className="bg-white h-auto md:h-screen pt-4">
      <div className="p-3 md:p-6">
        <div className="mb-1 md:mb-3 text-left md:text-center">
          <svg 
            id="titlesvg"
            className="w-full h-auto" 
            viewBox="0 0 300 60" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="45"
              className="fill-blue-800"
              style={{
                fontFamily: 'Britannic Bold, Arial Black, sans-serif',
                fontWeight: 'bold',
                fontSize: '40px'
              }}
            >
              SOPoMATIC
            </text>
          </svg>
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
