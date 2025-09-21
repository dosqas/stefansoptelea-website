import { PortfolioData, Category, Photo } from '@/types/portfolio';

const projectCategories = [
  { id: 'productDesign', name: 'Product Design' },
  { id: 'visMerchIntDesign', name: 'Visual Merchandise & Interior Design' },
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
  // First two categories - Project type (3 per row, multiple images per project)
  productDesign: [
    {
      id: 'pd1',
      src: '/images/1_productDesign/1_1.jpg',
      thumbnail: '/images/1_productDesign/1_1.jpg',
      alt: 'Product Design Project 1',
      title: 'Modern Chair Design',
      description: 'A minimalist chair design focusing on comfort and aesthetics. This project explores the relationship between form and function in contemporary furniture design.',
      images: ['/images/1_productDesign/1_1.jpg', '/images/1_productDesign/1_2.jpg']
    },
    {
      id: 'pd2',
      src: '/images/1_productDesign/2_1.jpg',
      thumbnail: '/images/1_productDesign/2_1.jpg',
      alt: 'Product Design Project 2',
      title: 'Smart Home Device',
      description: 'An innovative smart home controller that combines intuitive design with advanced technology. Features touch-sensitive surfaces and ambient lighting.',
      images: ['/images/1_productDesign/2_1.jpg', '/images/1_productDesign/2_2.jpg']
    },
    {
      id: 'pd3',
      src: '/images/1_productDesign/3_1.jpg',
      thumbnail: '/images/1_productDesign/3_1.jpg',
      alt: 'Product Design Project 3',
      title: 'Eco-Friendly Packaging',
      description: 'Sustainable packaging solution for consumer goods. Made from recycled materials with innovative folding mechanism.',
      images: ['/images/1_productDesign/3_1.jpg', '/images/1_productDesign/3_2.jpg', '/images/1_productDesign/3_3.jpg']
    },
    {
      id: 'pd4',
      src: '/images/1_productDesign/4_1.jpg',
      thumbnail: '/images/1_productDesign/4_1.jpg',
      alt: 'Product Design Project 3',
      title: 'Eco-Friendly Packaging',
      description: 'Sustainable packaging solution for consumer goods. Made from recycled materials with innovative folding mechanism.',
      images: ['/images/1_productDesign/4_1.jpg', '/images/1_productDesign/4_2.jpg']
    },
    {
      id: 'pd5',
      src: '/images/1_productDesign/5_1.jpg',
      thumbnail: '/images/1_productDesign/5_1.jpg',
      alt: 'Product Design Project 3',
      title: 'Eco-Friendly Packaging',
      description: 'Sustainable packaging solution for consumer goods. Made from recycled materials with innovative folding mechanism.',
      images: ['/images/1_productDesign/5_1.jpg', '/images/1_productDesign/5_2.jpg']
    },
  ],
  visMerchIntDesign: [
    {
      id: 'vm1',
      src: '/placeholder-400x400.jpg',
      thumbnail: '/placeholder-400x400.jpg',
      alt: 'Visual Merchandise Project 1',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/placeholder-400x400.jpg', '/placeholder-400x400.jpg', '/placeholder-400x400.jpg']
    },
    {
      id: 'vm2',
      src: '/placeholder-400x400.jpg',
      thumbnail: '/placeholder-400x400.jpg',
      alt: 'Interior Design Project 1',
      title: 'Modern Office Space',
      description: 'Contemporary office interior design focusing on productivity and employee wellbeing. Features open spaces, natural lighting, and ergonomic furniture.',
      images: ['/placeholder-400x400.jpg', '/placeholder-400x400.jpg']
    },
    {
      id: 'vm3',
      src: '/placeholder-400x400.jpg',
      thumbnail: '/placeholder-400x400.jpg',
      alt: 'Visual Merchandise Project 2',
      title: 'Pop-up Store Design',
      description: 'Temporary retail space design for a tech product launch. Modular design allows for quick setup and teardown.',
      images: ['/placeholder-400x400.jpg', '/placeholder-400x400.jpg', '/placeholder-400x400.jpg', '/placeholder-400x400.jpg']
    },
  ],
  // Other categories - Standalone type (5 per row, single images)
  cinematicPhotography: [
    {
      id: 'cp1',
      src: '/placeholder-400x400.jpg',
      alt: 'Cinematic Photo 1',
      title: 'Urban Nightscape',
      description: 'Dramatic night photography capturing the energy of city life'
    },
    {
      id: 'cp2',
      src: '/placeholder-400x400.jpg',
      alt: 'Cinematic Photo 2',
      title: 'Portrait in Shadows',
      description: 'Moody portrait using dramatic lighting techniques'
    },
    {
      id: 'cp3',
      src: '/placeholder-400x400.jpg',
      alt: 'Cinematic Photo 3',
      title: 'Street Scene',
      description: 'Capturing candid moments in urban environment'
    },
    {
      id: 'cp4',
      src: '/placeholder-400x400.jpg',
      alt: 'Cinematic Photo 4',
      title: 'Architectural Detail',
      description: 'Focus on geometric patterns in modern architecture'
    },
    {
      id: 'cp5',
      src: '/placeholder-400x400.jpg',
      alt: 'Cinematic Photo 5',
      title: 'Nature Abstract',
      description: 'Abstract interpretation of natural forms'
    },
    {
      id: 'cp6',
      src: '/placeholder-400x400.jpg',
      alt: 'Cinematic Photo 6',
      title: 'Industrial Landscape',
      description: 'Documenting the beauty in industrial structures'
    },
  ],
  photoManipulation: [
    {
      id: 'pm1',
      src: '/placeholder-400x400.jpg',
      alt: 'Photo Manipulation 1',
      title: 'Surreal Landscape',
      description: 'Digital art combining multiple photographic elements'
    },
    {
      id: 'pm2',
      src: '/placeholder-400x400.jpg',
      alt: 'Photo Manipulation 2',
      title: 'Floating City',
      description: 'Impossible architecture rendered through digital manipulation'
    },
    {
      id: 'pm3',
      src: '/placeholder-400x400.jpg',
      alt: 'Photo Manipulation 3',
      title: 'Time Warp',
      description: 'Creative manipulation showing temporal distortion'
    },
    {
      id: 'pm4',
      src: '/placeholder-400x400.jpg',
      alt: 'Photo Manipulation 4',
      title: 'Elemental Fusion',
      description: 'Combining fire, water, earth, and air in one composition'
    },
    {
      id: 'pm5',
      src: '/placeholder-400x400.jpg',
      alt: 'Photo Manipulation 5',
      title: 'Digital Dreams',
      description: 'Surreal composition exploring the subconscious mind'
    },
  ],
  architecturePhotography: [
    {
      id: 'ap1',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Photo 1',
      title: 'Modern Skyscraper',
      description: 'Clean lines and geometric patterns in contemporary architecture'
    },
    {
      id: 'ap2',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Photo 2',
      title: 'Historic Building',
      description: 'Preserving architectural heritage through photography'
    },
    {
      id: 'ap3',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Photo 3',
      title: 'Interior Space',
      description: 'Capturing the essence of architectural interiors'
    },
    {
      id: 'ap4',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Photo 4',
      title: 'Structural Detail',
      description: 'Focus on architectural elements and construction details'
    },
    {
      id: 'ap5',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Photo 5',
      title: 'Urban Geometry',
      description: 'Geometric patterns in urban architectural landscape'
    },
  ],
  architectureRenders: [
    {
      id: 'ar1',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Render 1',
      title: 'Futuristic Building',
      description: '3D architectural visualization of innovative design'
    },
    {
      id: 'ar2',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Render 2',
      title: 'Residential Complex',
      description: 'Modern residential development visualization'
    },
    {
      id: 'ar3',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Render 3',
      title: 'Commercial Space',
      description: 'Contemporary commercial building design'
    },
    {
      id: 'ar4',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Render 4',
      title: 'Landscape Integration',
      description: 'Architecture harmoniously integrated with natural landscape'
    },
    {
      id: 'ar5',
      src: '/placeholder-400x400.jpg',
      alt: 'Architecture Render 5',
      title: 'Sustainable Design',
      description: 'Eco-friendly architectural concept visualization'
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
