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
      <div className="flex flex-col md:flex-row min-h-screen justify-items-start md:pt-10">
        <div className="flex-[0.15] flex-shrink" />
        <div className="w-full h-auto md:h-full md:w-72 lg:w-90 xl:w-98 md:flex-shrink-0">
          <CategoryList
            categories={portfolioData.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        <div className="flex-1 w-auto md:overflow-hidden">
          {renderContent()}
        </div>
        <div className="flex-[0.45] flex-shrink" />
      </div>
    </Layout>
  );
}
