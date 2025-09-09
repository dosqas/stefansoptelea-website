'use client';
import { Category } from "@/types/portfolio"
import { useEffect, useState } from 'react';

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
  const [viewBox, setViewBox] = useState("0 0 300 60");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const adjustSVGViewBox = () => {
      const titleSvg = document.getElementById("titlesvg");
      if (titleSvg) {
        const textElement = titleSvg.querySelector("text");
        if (textElement) {
          try {
            const bbox = textElement.getBBox();
            const newViewBox = [
              bbox.x, 
              bbox.y, 
              bbox.width, 
              bbox.height
            ].join(" ");
            setViewBox(newViewBox);
            setIsLoaded(true);
          } catch {
            setTimeout(adjustSVGViewBox, 50);
          }
        }
      }
    };

    // Run immediately and on font load
    adjustSVGViewBox();
    document.fonts.ready.then(adjustSVGViewBox);

    window.addEventListener('resize', adjustSVGViewBox);
    
    return () => {
      window.removeEventListener('resize', adjustSVGViewBox);
    };
  }, []);

  return (
    <div className="bg-white h-auto md:h-screen pt-4">
      <div className="p-3 md:p-6">
        <div className="mb-1 md:mb-3 text-left md:text-center h-12 md:h-16 flex items-center">
          <svg 
            id="titlesvg"
            className={`w-full h-full transition-opacity duration-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
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
