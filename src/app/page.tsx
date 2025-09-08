'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CategoryList from '@/components/portofolio/CategoryList';
import CategoryGallery from '@/components/portofolio/CategoryGallery';
import HomeContent from '@/components/content/HomeContent';
import BioContent from '@/components/content/BioContent';
import ContactContent from '@/components/content/ContactContent';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('home');

  const activeCategoryData = portfolioData.categories.find(cat => cat.id === activeCategory);
  const photos = portfolioData.photosByCategory[activeCategory] || [];

  const renderContent = () => {
    if (!activeCategoryData) return null;

    switch (activeCategory) {
      case 'home':
        return <HomeContent/>;
      case 'bio':
        return <BioContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return (
          <CategoryGallery
            categoryName={activeCategoryData.displayName}
            photos={photos}
          />
        );
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full h-auto md:h-full md:w-64 lg:w-82 xl:w-90 md:flex-shrink-0">
          <CategoryList
            categories={portfolioData.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        <div className="flex-1 md:overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
}
