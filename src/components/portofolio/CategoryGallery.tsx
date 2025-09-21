'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContentLayout from '../layout/ContentLayout';
import ImageOverlay from './ImageOverlay';
import { Photo } from '@/types/portfolio';

interface CategoryGalleryProps {
  categoryName: string;
  photos: Photo[];
  categoryType: 'fixed' | 'project';
  projectType: string;
}

export default function CategoryGallery({ photos, categoryType, projectType }: CategoryGalleryProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const isProjectGallery = projectType === 'ample';
  const gridCols = isProjectGallery ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';

  return (
    <ContentLayout>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 p-4 overflow-auto no-scrollbar" style={{ scrollbarGutter: 'stable' }}>    
          <div className={`grid ${gridCols} gap-2`}>
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: hoveredIndex === index ? '#f3f4f6' : '#ffffff',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
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
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <div 
                      className="text-center text-white px-4 transition-opacity duration-300"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    >
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
