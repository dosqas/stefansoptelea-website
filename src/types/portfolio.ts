export interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'fixed' | 'project';
  order: number;
  displayName: string;
}

export interface PortfolioData {
  categories: Category[];
  photosByCategory: Record<string, Photo[]>;
}
