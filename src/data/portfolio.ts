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
      src: '/images/2_visMerchIntDesign/1_1.jpg',
      thumbnail: '/images/2_visMerchIntDesign/1_1.jpg',
      alt: 'Visual Merchandise Project 1',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/images/2_visMerchIntDesign/1_1.jpg', '/images/2_visMerchIntDesign/1_2.jpg', '/images/2_visMerchIntDesign/1_3.jpg', '/images/2_visMerchIntDesign/1_4.jpg', '/images/2_visMerchIntDesign/1_5.jpg']
    },
    {
      id: 'vm2',
      src: '/images/2_visMerchIntDesign/2_1.jpg',
      thumbnail: '/images/2_visMerchIntDesign/2_1.jpg',
      alt: 'Visual Merchandise Project 2',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/images/2_visMerchIntDesign/2_1.jpg', '/images/2_visMerchIntDesign/2_2.jpg', '/images/2_visMerchIntDesign/2_3.jpg', '/images/2_visMerchIntDesign/2_4.jpg']
    },
    {
      id: 'vm3',
      src: '/images/2_visMerchIntDesign/3_1.jpg',
      thumbnail: '/images/2_visMerchIntDesign/3_1.jpg',
      alt: 'Visual Merchandise Project 3',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/images/2_visMerchIntDesign/3_1.jpg', '/images/2_visMerchIntDesign/3_2.jpg']
    },
    {
      id: 'vm4',
      src: '/images/2_visMerchIntDesign/4_1.jpg',
      thumbnail: '/images/2_visMerchIntDesign/4_1.jpg',
      alt: 'Visual Merchandise Project 4',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/images/2_visMerchIntDesign/4_1.jpg', '/images/2_visMerchIntDesign/4_2.jpg', '/images/2_visMerchIntDesign/4_3.jpg']
    },
    {
      id: 'vm5',
      src: '/images/2_visMerchIntDesign/5_1.jpg',
      thumbnail: '/images/2_visMerchIntDesign/5_1.jpg',
      alt: 'Visual Merchandise Project 5',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/images/2_visMerchIntDesign/5_1.jpg', '/images/2_visMerchIntDesign/5_2.jpg', '/images/2_visMerchIntDesign/5_3.jpg', '/images/2_visMerchIntDesign/5_4.jpg', '/images/2_visMerchIntDesign/5_5.jpg', '/images/2_visMerchIntDesign/5_6.jpg']
    },
    {
      id: 'vm6',
      src: '/images/2_visMerchIntDesign/6_1.jpg',
      thumbnail: '/images/2_visMerchIntDesign/6_1.jpg',
      alt: 'Visual Merchandise Project 6',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/images/2_visMerchIntDesign/6_1.jpg', '/images/2_visMerchIntDesign/6_2.jpg', '/images/2_visMerchIntDesign/6_3.jpg']
    },
    {
      id: 'vm7',
      src: '/images/2_visMerchIntDesign/7_1.jpg',
      thumbnail: '/images/2_visMerchIntDesign/7_1.jpg',
      alt: 'Visual Merchandise Project 7',
      title: 'Retail Store Layout',
      description: 'Complete visual merchandising solution for a luxury fashion boutique. Includes window displays, product placement, and lighting design.',
      images: ['/images/2_visMerchIntDesign/7_1.jpg', '/images/2_visMerchIntDesign/7_2.jpg', '/images/2_visMerchIntDesign/7_3.jpg']
    },
  ],
  // Other categories - Standalone type (5 per row, single images)
  cinematicPhotography: [
    {
      id: 'cp1',
      src: '/images/3_cinematicPhotography/1.jpg',
      alt: 'Cinematic Photo 1',
      title: 'Urban Nightscape',
      description: 'Dramatic night photography capturing the energy of city life with neon reflections'
    },
    {
      id: 'cp2',
      src: '/images/3_cinematicPhotography/2.jpg',
      alt: 'Cinematic Photo 2',
      title: 'Portrait in Shadows',
      description: 'Moody portrait using dramatic chiaroscuro lighting techniques'
    },
    {
      id: 'cp3',
      src: '/images/3_cinematicPhotography/3.jpg',
      alt: 'Cinematic Photo 3',
      title: 'Street Scene',
      description: 'Capturing candid moments in urban environment during golden hour'
    },
    {
      id: 'cp4',
      src: '/images/3_cinematicPhotography/4.jpg',
      alt: 'Cinematic Photo 4',
      title: 'Architectural Detail',
      description: 'Focus on geometric patterns in modern architecture with dramatic angles'
    },
    {
      id: 'cp5',
      src: '/images/3_cinematicPhotography/5.jpg',
      alt: 'Cinematic Photo 5',
      title: 'Nature Abstract',
      description: 'Abstract interpretation of natural forms through cinematic lens'
    },
    {
      id: 'cp6',
      src: '/images/3_cinematicPhotography/6.jpg',
      alt: 'Cinematic Photo 6',
      title: 'Industrial Landscape',
      description: 'Documenting the raw beauty in industrial structures and machinery'
    },
    {
      id: 'cp7',
      src: '/images/3_cinematicPhotography/7.jpg',
      alt: 'Cinematic Photo 7',
      title: 'Misty Morning',
      description: 'Ethereal landscape photography with atmospheric fog and soft lighting'
    },
    {
      id: 'cp8',
      src: '/images/3_cinematicPhotography/8.jpg',
      alt: 'Cinematic Photo 8',
      title: 'Underground Passage',
      description: 'Mysterious underground tunnel with dramatic perspective and lighting'
    },
    {
      id: 'cp9',
      src: '/images/3_cinematicPhotography/9.jpg',
      alt: 'Cinematic Photo 9',
      title: 'Rain Reflections',
      description: 'Urban street photography enhanced by rain reflections and bokeh'
    },
    {
      id: 'cp10',
      src: '/images/3_cinematicPhotography/10.jpg',
      alt: 'Cinematic Photo 10',
      title: 'Silhouette Study',
      description: 'Powerful silhouettes against dramatic sky during sunset'
    },
    {
      id: 'cp11',
      src: '/images/3_cinematicPhotography/11.jpg',
      alt: 'Cinematic Photo 11',
      title: 'Window Light',
      description: 'Interior portrait utilizing natural window light for cinematic effect'
    },
    {
      id: 'cp12',
      src: '/images/3_cinematicPhotography/12.jpg',
      alt: 'Cinematic Photo 12',
      title: 'Abandoned Places',
      description: 'Haunting beauty of abandoned locations with atmospheric lighting'
    },
    {
      id: 'cp13',
      src: '/images/3_cinematicPhotography/13.jpg',
      alt: 'Cinematic Photo 13',
      title: 'Motion Blur',
      description: 'Dynamic street photography with intentional motion blur effects'
    },
    {
      id: 'cp14',
      src: '/images/3_cinematicPhotography/14.jpg',
      alt: 'Cinematic Photo 14',
      title: 'Color Grading',
      description: 'Experimental color grading creating surreal cinematic atmosphere'
    },
    {
      id: 'cp15',
      src: '/images/3_cinematicPhotography/15.jpg',
      alt: 'Cinematic Photo 15',
      title: 'Contrast Play',
      description: 'High contrast black and white photography with dramatic shadows'
    },
    {
      id: 'cp16',
      src: '/images/3_cinematicPhotography/16.jpg',
      alt: 'Cinematic Photo 16',
      title: 'Urban Canyon',
      description: 'Looking up between skyscrapers creating canyon-like perspective'
    },
    {
      id: 'cp17',
      src: '/images/3_cinematicPhotography/17.jpg',
      alt: 'Cinematic Photo 17',
      title: 'Smoke and Mirrors',
      description: 'Atmospheric photography using smoke effects and reflective surfaces'
    },
    {
      id: 'cp18',
      src: '/images/3_cinematicPhotography/18.jpg',
      alt: 'Cinematic Photo 18',
      title: 'Golden Hour',
      description: 'Warm golden hour lighting creating cinematic depth and atmosphere'
    },
    {
      id: 'cp19',
      src: '/images/3_cinematicPhotography/19.jpg',
      alt: 'Cinematic Photo 19',
      title: 'Neon Dreams',
      description: 'Cyberpunk-inspired urban photography with neon color palette'
    },
    {
      id: 'cp20',
      src: '/images/3_cinematicPhotography/20.jpg',
      alt: 'Cinematic Photo 20',
      title: 'Long Exposure',
      description: 'Long exposure photography creating light trails and smooth water effects'
    },
    {
      id: 'cp21',
      src: '/images/3_cinematicPhotography/21.jpg',
      alt: 'Cinematic Photo 21',
      title: 'Symmetry',
      description: 'Perfect symmetrical composition with architectural elements'
    },
    {
      id: 'cp22',
      src: '/images/3_cinematicPhotography/22.jpg',
      alt: 'Cinematic Photo 22',
      title: 'Atmospheric Depth',
      description: 'Layered composition creating sense of depth through atmospheric haze'
    },
    {
      id: 'cp23',
      src: '/images/3_cinematicPhotography/23.jpg',
      alt: 'Cinematic Photo 23',
      title: 'Final Frame',
      description: 'Culminating piece showcasing mastery of cinematic photography techniques'
    },
  ],
  photoManipulation: [
    {
      id: 'pm1',
      src: '/images/4_photoManipulation/1.jpg',
      alt: 'Photo Manipulation 1',
      title: 'Surreal Landscape',
      description: 'Digital art combining multiple photographic elements into dreamscape'
    },
    {
      id: 'pm2',
      src: '/images/4_photoManipulation/2.jpg',
      alt: 'Photo Manipulation 2',
      title: 'Floating City',
      description: 'Impossible architecture rendered through digital manipulation techniques'
    },
    {
      id: 'pm3',
      src: '/images/4_photoManipulation/3.jpg',
      alt: 'Photo Manipulation 3',
      title: 'Time Warp',
      description: 'Creative manipulation showing temporal distortion and reality bending'
    },
    {
      id: 'pm4',
      src: '/images/4_photoManipulation/4.jpg',
      alt: 'Photo Manipulation 4',
      title: 'Elemental Fusion',
      description: 'Combining fire, water, earth, and air in one mystical composition'
    },
    {
      id: 'pm5',
      src: '/images/4_photoManipulation/5.jpg',
      alt: 'Photo Manipulation 5',
      title: 'Digital Dreams',
      description: 'Surreal composition exploring the subconscious mind through imagery'
    },
    {
      id: 'pm6',
      src: '/images/4_photoManipulation/6.jpg',
      alt: 'Photo Manipulation 6',
      title: 'Portal Fantasy',
      description: 'Creating magical portals between different worlds and dimensions'
    },
    {
      id: 'pm7',
      src: '/images/4_photoManipulation/7.jpg',
      alt: 'Photo Manipulation 7',
      title: 'Double Exposure',
      description: 'Artistic double exposure effects creating layered storytelling'
    },
    {
      id: 'pm8',
      src: '/images/4_photoManipulation/8.jpg',
      alt: 'Photo Manipulation 8',
      title: 'Metamorphosis',
      description: 'Transformation sequences showing evolution and change'
    },
    {
      id: 'pm9',
      src: '/images/4_photoManipulation/9.jpg',
      alt: 'Photo Manipulation 9',
      title: 'Fractured Reality',
      description: 'Breaking the boundaries of reality through digital fragmentation'
    },
    {
      id: 'pm10',
      src: '/images/4_photoManipulation/10.jpg',
      alt: 'Photo Manipulation 10',
      title: 'Cosmic Journey',
      description: 'Space-themed manipulation exploring interstellar landscapes'
    },
    {
      id: 'pm11',
      src: '/images/4_photoManipulation/11.jpg',
      alt: 'Photo Manipulation 11',
      title: 'Mirror Worlds',
      description: 'Parallel dimensions and reflective realities in digital form'
    },
    {
      id: 'pm12',
      src: '/images/4_photoManipulation/12.jpg',
      alt: 'Photo Manipulation 12',
      title: 'Nature Hybrid',
      description: 'Blending human elements with natural forms and textures'
    },
    {
      id: 'pm13',
      src: '/images/4_photoManipulation/13.jpg',
      alt: 'Photo Manipulation 13',
      title: 'Abstract Emotions',
      description: 'Visual representation of emotions through abstract digital art'
    },
  ],
  architecturePhotography: [
    {
      id: 'ap1',
      src: '/images/5_architecturePhotography/1.jpg',
      alt: 'Architecture Photo 1',
      title: 'Modern Skyscraper',
      description: 'Clean lines and geometric patterns in contemporary glass architecture'
    },
    {
      id: 'ap2',
      src: '/images/5_architecturePhotography/2.jpg',
      alt: 'Architecture Photo 2',
      title: 'Historic Building',
      description: 'Preserving architectural heritage through detailed photography'
    },
    {
      id: 'ap3',
      src: '/images/5_architecturePhotography/3.jpg',
      alt: 'Architecture Photo 3',
      title: 'Interior Space',
      description: 'Capturing the essence of architectural interiors and natural light'
    },
    {
      id: 'ap4',
      src: '/images/5_architecturePhotography/4.jpg',
      alt: 'Architecture Photo 4',
      title: 'Structural Detail',
      description: 'Focus on architectural elements and construction details'
    },
    {
      id: 'ap5',
      src: '/images/5_architecturePhotography/5.jpg',
      alt: 'Architecture Photo 5',
      title: 'Urban Geometry',
      description: 'Geometric patterns in urban architectural landscape design'
    },
    {
      id: 'ap6',
      src: '/images/5_architecturePhotography/6.jpg',
      alt: 'Architecture Photo 6',
      title: 'Spiral Staircase',
      description: 'Elegant curved architecture showcasing spiral design elements'
    },
    {
      id: 'ap7',
      src: '/images/5_architecturePhotography/7.jpg',
      alt: 'Architecture Photo 7',
      title: 'Bridge Structure',
      description: 'Engineering marvel captured from unique architectural perspective'
    },
    {
      id: 'ap8',
      src: '/images/5_architecturePhotography/8.jpg',
      alt: 'Architecture Photo 8',
      title: 'Glass Reflection',
      description: 'Playing with reflections and transparency in modern buildings'
    },
    {
      id: 'ap9',
      src: '/images/5_architecturePhotography/9.jpg',
      alt: 'Architecture Photo 9',
      title: 'Brutalist Design',
      description: 'Bold concrete structures showcasing brutalist architectural style'
    },
    {
      id: 'ap10',
      src: '/images/5_architecturePhotography/10.jpg',
      alt: 'Architecture Photo 10',
      title: 'Rooftop Perspective',
      description: 'Aerial view of architectural elements from elevated position'
    },
    {
      id: 'ap11',
      src: '/images/5_architecturePhotography/11.jpg',
      alt: 'Architecture Photo 11',
      title: 'Shadow Play',
      description: 'Dramatic shadows creating patterns on architectural surfaces'
    },
    {
      id: 'ap12',
      src: '/images/5_architecturePhotography/12.jpg',
      alt: 'Architecture Photo 12',
      title: 'Minimalist Design',
      description: 'Clean, minimal architectural forms emphasizing space and light'
    },
    {
      id: 'ap13',
      src: '/images/5_architecturePhotography/13.jpg',
      alt: 'Architecture Photo 13',
      title: 'Gothic Revival',
      description: 'Traditional gothic architecture with intricate stone work'
    },
    {
      id: 'ap14',
      src: '/images/5_architecturePhotography/14.jpg',
      alt: 'Architecture Photo 14',
      title: 'Curved Lines',
      description: 'Flowing architectural curves creating dynamic visual movement'
    },
    {
      id: 'ap15',
      src: '/images/5_architecturePhotography/15.png',
      alt: 'Architecture Photo 15',
      title: 'Symmetrical Facade',
      description: 'Perfect symmetry in classical architectural composition'
    },
    {
      id: 'ap16',
      src: '/images/5_architecturePhotography/16.jpg',
      alt: 'Architecture Photo 16',
      title: 'Industrial Heritage',
      description: 'Converted industrial spaces maintaining original character'
    },
    {
      id: 'ap17',
      src: '/images/5_architecturePhotography/17.jpg',
      alt: 'Architecture Photo 17',
      title: 'Atrium Space',
      description: 'Grand atrium showcasing vertical architectural elements'
    },
    {
      id: 'ap18',
      src: '/images/5_architecturePhotography/18.jpg',
      alt: 'Architecture Photo 18',
      title: 'Contemporary Lines',
      description: 'Sharp contemporary lines intersecting at dramatic angles'
    },
    {
      id: 'ap19',
      src: '/images/5_architecturePhotography/19.jpg',
      alt: 'Architecture Photo 19',
      title: 'Natural Integration',
      description: 'Architecture harmoniously integrated with natural environment'
    },
    {
      id: 'ap20',
      src: '/images/5_architecturePhotography/20.jpg',
      alt: 'Architecture Photo 20',
      title: 'Textural Contrast',
      description: 'Contrasting materials and textures in architectural design'
    },
    {
      id: 'ap21',
      src: '/images/5_architecturePhotography/21.jpg',
      alt: 'Architecture Photo 21',
      title: 'Urban Context',
      description: 'Building relationship with surrounding urban environment'
    },
    {
      id: 'ap22',
      src: '/images/5_architecturePhotography/22.jpg',
      alt: 'Architecture Photo 22',
      title: 'Structural Details',
      description: 'Focus on structural engineering and construction details'
    },
    {
      id: 'ap23',
      src: '/images/5_architecturePhotography/23.jpg',
      alt: 'Architecture Photo 23',
      title: 'Light and Space',
      description: 'Masterful use of natural light in architectural space'
    },
    {
      id: 'ap24',
      src: '/images/5_architecturePhotography/24.jpg',
      alt: 'Architecture Photo 24',
      title: 'Facade Pattern',
      description: 'Repetitive patterns creating rhythm in building facades'
    },
    {
      id: 'ap25',
      src: '/images/5_architecturePhotography/25.jpg',
      alt: 'Architecture Photo 25',
      title: 'Corner Detail',
      description: 'Architectural corner showcasing design precision and craft'
    },
    {
      id: 'ap26',
      src: '/images/5_architecturePhotography/26.jpg',
      alt: 'Architecture Photo 26',
      title: 'Vertical Emphasis',
      description: 'Strong vertical elements creating upward visual movement'
    },
    {
      id: 'ap27',
      src: '/images/5_architecturePhotography/27.jpg',
      alt: 'Architecture Photo 27',
      title: 'Architectural Legacy',
      description: 'Timeless architectural design transcending temporal boundaries'
    },
  ],
  architectureRenders: [
    {
      id: 'ar1',
      src: '/images/6_architectureRenders/1.jpg',
      alt: 'Architecture Render 1',
      title: 'Futuristic Building',
      description: '3D architectural visualization of innovative glass tower design'
    },
    {
      id: 'ar2',
      src: '/images/6_architectureRenders/2.jpg',
      alt: 'Architecture Render 2',
      title: 'Residential Complex',
      description: 'Modern residential development with sustainable features'
    },
    {
      id: 'ar3',
      src: '/images/6_architectureRenders/3.jpg',
      alt: 'Architecture Render 3',
      title: 'Commercial Space',
      description: 'Contemporary commercial building with mixed-use design'
    },
    {
      id: 'ar4',
      src: '/images/6_architectureRenders/4.jpg',
      alt: 'Architecture Render 4',
      title: 'Landscape Integration',
      description: 'Architecture harmoniously integrated with natural landscape'
    },
    {
      id: 'ar5',
      src: '/images/6_architectureRenders/5.jpg',
      alt: 'Architecture Render 5',
      title: 'Sustainable Design',
      description: 'Eco-friendly architectural concept with green technology'
    },
    {
      id: 'ar6',
      src: '/images/6_architectureRenders/6.jpg',
      alt: 'Architecture Render 6',
      title: 'Urban Masterplan',
      description: 'Large-scale urban development with integrated public spaces'
    },
    {
      id: 'ar7',
      src: '/images/6_architectureRenders/7.jpg',
      alt: 'Architecture Render 7',
      title: 'Museum Design',
      description: 'Contemporary museum architecture with dramatic entrance'
    },
    {
      id: 'ar8',
      src: '/images/6_architectureRenders/8.jpg',
      alt: 'Architecture Render 8',
      title: 'Waterfront Development',
      description: 'Coastal architecture designed to embrace waterfront views'
    },
    {
      id: 'ar9',
      src: '/images/6_architectureRenders/9.jpg',
      alt: 'Architecture Render 9',
      title: 'High-Rise Tower',
      description: 'Sleek residential tower with innovative facade system'
    },
    {
      id: 'ar10',
      src: '/images/6_architectureRenders/10.jpg',
      alt: 'Architecture Render 10',
      title: 'Cultural Center',
      description: 'Multi-purpose cultural facility with flexible interior spaces'
    },
    {
      id: 'ar11',
      src: '/images/6_architectureRenders/11.jpg',
      alt: 'Architecture Render 11',
      title: 'Office Complex',
      description: 'Modern office building promoting collaborative work environments'
    },
    {
      id: 'ar12',
      src: '/images/6_architectureRenders/12.jpg',
      alt: 'Architecture Render 12',
      title: 'Public Library',
      description: 'Community library design emphasizing natural light and openness'
    },
    {
      id: 'ar13',
      src: '/images/6_architectureRenders/13.jpg',
      alt: 'Architecture Render 13',
      title: 'Healthcare Facility',
      description: 'Healing-focused hospital design with therapeutic environments'
    },
    {
      id: 'ar14',
      src: '/images/6_architectureRenders/14.jpg',
      alt: 'Architecture Render 14',
      title: 'Educational Campus',
      description: 'University campus design fostering learning and collaboration'
    },
    {
      id: 'ar15',
      src: '/images/6_architectureRenders/15.jpg',
      alt: 'Architecture Render 15',
      title: 'Sports Complex',
      description: 'Multi-sport facility with innovative structural solutions'
    },
    {
      id: 'ar16',
      src: '/images/6_architectureRenders/16.jpg',
      alt: 'Architecture Render 16',
      title: 'Transportation Hub',
      description: 'Transit station design integrating multiple transport modes'
    },
    {
      id: 'ar17',
      src: '/images/6_architectureRenders/17.jpg',
      alt: 'Architecture Render 17',
      title: 'Luxury Resort',
      description: 'Tropical resort architecture blending with natural surroundings'
    },
    {
      id: 'ar18',
      src: '/images/6_architectureRenders/18.jpg',
      alt: 'Architecture Render 18',
      title: 'Industrial Conversion',
      description: 'Adaptive reuse of industrial building for contemporary use'
    },
    {
      id: 'ar19',
      src: '/images/6_architectureRenders/19.jpg',
      alt: 'Architecture Render 19',
      title: 'Mixed-Use Development',
      description: 'Integrated living, working, and retail spaces in urban setting'
    },
    {
      id: 'ar20',
      src: '/images/6_architectureRenders/20.jpg',
      alt: 'Architecture Render 20',
      title: 'Parametric Design',
      description: 'Algorithmic architecture exploring computational design methods'
    },
    {
      id: 'ar21',
      src: '/images/6_architectureRenders/21.jpg',
      alt: 'Architecture Render 21',
      title: 'Modular Housing',
      description: 'Prefabricated housing system with customizable configurations'
    },
    {
      id: 'ar22',
      src: '/images/6_architectureRenders/22.jpg',
      alt: 'Architecture Render 22',
      title: 'Concert Hall',
      description: 'Acoustic-focused performance venue with dramatic interior'
    },
    {
      id: 'ar23',
      src: '/images/6_architectureRenders/23.jpg',
      alt: 'Architecture Render 23',
      title: 'Shopping Center',
      description: 'Retail destination with integrated public amenities'
    },
    {
      id: 'ar24',
      src: '/images/6_architectureRenders/24.jpg',
      alt: 'Architecture Render 24',
      title: 'Residential Tower',
      description: 'Luxury residential high-rise with panoramic city views'
    },
    {
      id: 'ar25',
      src: '/images/6_architectureRenders/25.jpg',
      alt: 'Architecture Render 25',
      title: 'Conceptual Vision',
      description: 'Visionary architectural concept pushing design boundaries'
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
