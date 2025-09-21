'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CategoryList from '@/components/portofolio/CategoryList';
import CategoryGallery from '@/components/portofolio/CategoryGallery';
import HomeContent from '@/components/content/HomeContent';
import BioContent from '@/components/content/BioContent';
import ContactContent from '@/components/content/ContactContent';
import { AnimatePresence, motion } from "framer-motion";
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
            categoryType={activeCategoryData.type === 'project' ? 'project' : 'standalone'}
          />
        );
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-items-start">
        <div className="flex-[0.15] flex-shrink" />
        <div className="w-full h-auto md:h-full md:w-72 lg:w-90 xl:w-98 md:flex-shrink-0">
          <CategoryList
            categories={portfolioData.categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        <div className="flex-1 w-auto md:overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex-[0.45] flex-shrink" />
      </div>
    </Layout>
  );
}
