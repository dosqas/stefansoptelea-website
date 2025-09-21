'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContentLayout from '../layout/ContentLayout';
import ImageOverlay from './ImageOverlay';
import { Photo } from '@/types/portfolio';

interface CategoryGalleryProps {
  categoryName: string;
  photos: Photo[];
  categoryType: 'project' | 'standalone';
}

export default function CategoryGallery({ categoryName, photos, categoryType }: CategoryGalleryProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  const handleIndexChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  const isProjectGallery = categoryType === 'project';
  const gridCols = isProjectGallery ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';

  return (
    <ContentLayout>
      <div className="flex-1 flex flex-col overflow-hidden overflow-auto no-scrollbar">
        <div className="flex-1 p-6 overflow-auto no-scrollbar">    
          {photos.length === 0 ? (
            <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">
                No photos in this category yet.
              </p>
            </div>
          ) : (
            <div className={`grid ${gridCols} gap-4`}>
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={photo.thumbnail || photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes={isProjectGallery ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white px-4">
                        <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
                        {photo.description && (
                          <p className="text-sm text-gray-200">{photo.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Overlay */}
      <ImageOverlay
        isOpen={isOverlayOpen}
        onClose={handleCloseOverlay}
        photos={photos}
        currentIndex={currentImageIndex}
        onIndexChange={handleIndexChange}
        isProjectGallery={isProjectGallery}
      />
    </ContentLayout>
  );
}
