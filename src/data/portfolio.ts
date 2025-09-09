import { PortfolioData, Category, Photo } from '@/types/portfolio';

const projectCategories = [
  { id: 'productDesign', name: 'Product Design' },
  { id: 'interiorDesign', name: 'Interior Design' },
  { id: 'cinematicPhotography', name: 'Cinematic Photography' },
  { id: 'photoManipulation', name: 'Photo Manipulation' },
  { id: 'architecturePhotography', name: 'Architecture Photography' },
  { id: 'architectureRenders', name: 'Architecture Renders' },
];

const fixedCategories = [
  { id: 'home', name: 'Home', order: 0 },
  { id: 'bio', name: 'Bio', order: 1000 }, 
  { id: 'contact', name: 'Contact', order: 1001 },
];

function generateCategories(): Category[] {
  const categories: Category[] = [];
  
  fixedCategories.forEach(cat => {
    categories.push({
      id: cat.id,
      name: cat.name,
      type: 'fixed',
      order: cat.order,
      displayName: cat.name
    });
  });
  
  projectCategories.forEach((cat, index) => {
    categories.push({
      id: cat.id,
      name: cat.name,
      type: 'project',
      order: index + 1,
      displayName: `${index + 1}. ${cat.name}`
    });
  });
  
  return categories.sort((a, b) => a.order - b.order);
}

const portfolioPhotos: Record<string, Photo[]> = {
  portraits: [
    {
      id: 'p1',
      src: '/placeholder-400x400.jpg',
      alt: 'Portrait 1',
      title: 'Classic Portrait',
      description: 'Natural lighting portrait session'
    },
    {
      id: 'p2',
      src: '/placeholder-400x400.jpg',
      alt: 'Portrait 2',
      title: 'Studio Portrait',
      description: 'Professional studio setup'
    },
  ],
  landscape: [
    {
      id: 'l1',
      src: '/placeholder-400x400.jpg',
      alt: 'Landscape 1',
      title: 'Mountain Vista',
      description: 'Early morning mountain landscape'
    },
    {
      id: 'l2',
      src: '/placeholder-400x400.jpg',
      alt: 'Landscape 2',
      title: 'Ocean Sunset',
      description: 'Golden hour at the coast'
    },
  ],
  street: [
    {
      id: 's1',
      src: '/placeholder-400x400.jpg',
      alt: 'Street Photo 1',
      title: 'City Life',
      description: 'Candid street moment'
    },
  ],
  events: [
    {
      id: 'e1',
      src: '/placeholder-400x400.jpg',
      alt: 'Event Photo 1',
      title: 'Wedding Ceremony',
      description: 'Beautiful wedding moment'
    },
  ],
  macro: [
    {
      id: 'm1',
      src: '/placeholder-400x400.jpg',
      alt: 'Macro Photo 1',
      title: 'Flower Detail',
      description: 'Close-up nature photography'
    },
  ],
  home: [],
  bio: [],
  contact: [],
};

export const portfolioData: PortfolioData = {
  categories: generateCategories(),
  photosByCategory: portfolioPhotos,
};
