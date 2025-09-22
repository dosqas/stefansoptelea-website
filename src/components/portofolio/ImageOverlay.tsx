'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Photo } from '@/types/portfolio';

interface ImageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  isProjectGallery: boolean;
}

interface ProjectImage {
  src: string;
  alt: string;
  projectId: string;
  projectTitle?: string;
  projectDescription?: string;
}

export default function ImageOverlay({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onIndexChange,
  isProjectGallery
}: ImageOverlayProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const getCurrentProjectImages = (): ProjectImage[] => {
    if (!isProjectGallery) {
      const photo = photos[currentIndex];
      return [{
        src: photo.src,
        alt: photo.alt,
        projectId: photo.id,
        projectTitle: photo.title,
        projectDescription: photo.description
      }];
    }

    const currentPhoto = photos[currentIndex];
    const projectImages: ProjectImage[] = [];
    
    if (currentPhoto.images && currentPhoto.images.length > 0) {
      currentPhoto.images.forEach((imageSrc, index) => {
        projectImages.push({
          src: imageSrc,
          alt: `${currentPhoto.alt} - Image ${index + 1}`,
          projectId: currentPhoto.id,
          projectTitle: currentPhoto.title,
          projectDescription: currentPhoto.description
        });
      });
    } else {
      projectImages.push({
        src: currentPhoto.src,
        alt: currentPhoto.alt,
        projectId: currentPhoto.id,
        projectTitle: currentPhoto.title,
        projectDescription: currentPhoto.description
      });
    }
    
    return projectImages;
  };

  const currentProjectImages = getCurrentProjectImages();
  const totalProjectImages = currentProjectImages.length;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || isAnimating) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNext();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, totalProjectImages, isAnimating]);

  const handlePrevious = () => {
    if (totalProjectImages <= 1 || isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : totalProjectImages - 1;
    setCurrentImageIndex(newIndex);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (totalProjectImages <= 1 || isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = currentImageIndex < totalProjectImages - 1 ? currentImageIndex + 1 : 0;
    setCurrentImageIndex(newIndex);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || photos.length === 0) return null;

  const currentImage = currentProjectImages[currentImageIndex];

  return (
    <>
      <style jsx>{`
        .overlay-button {
          background-color: rgba(25, 60, 184, 0.3);
          transition: background-color 0.2s ease;
        }
        .overlay-button:hover {
          background-color: rgba(25, 60, 184, 0.5);
        }
        .image-counter {
          background-color: rgba(25, 60, 184, 0.3);
        }
      `}</style>
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-4'}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        onClick={handleOverlayClick}
      >
      {/* Main content */}
      <div 
        className={`flex items-center justify-center ${isFullscreen ? 'w-full h-full' : 'max-w-7xl max-h-full'}`}
        style={{ backgroundColor: !isMobile ? 'rgba(0, 0, 0, 0.6)' : "" }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image with sliding animation and buttons */}
          <div className={`relative overflow-hidden ${isFullscreen ? 'max-w-none max-h-none' : 'max-w-4xl max-h-[80vh]'}`}>
            {/* Navigation arrows - positioned inside image container */}
            {totalProjectImages > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  disabled={isAnimating}
                  className="overlay-button absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-1 sm:p-2 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  disabled={isAnimating}
                  className="overlay-button absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-1 sm:p-2 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Close button - positioned inside image container */}
            <button
              onClick={onClose}
              className="overlay-button absolute top-2 sm:top-4 right-2 sm:right-4 z-10 text-white hover:text-gray-300 transition-colors rounded-full p-1 sm:p-2 backdrop-blur-sm"
              aria-label="Close"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Fullscreen toggle button - positioned inside image container */}
            <button
              onClick={toggleFullscreen}
              className="overlay-button absolute top-2 sm:top-4 right-12 sm:right-16 z-10 text-white hover:text-gray-300 transition-colors rounded-full p-1 sm:p-2 backdrop-blur-sm"
              aria-label="Toggle fullscreen"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isFullscreen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                )}
              </svg>
            </button>

            {/* Image counter - positioned inside image container */}
            {totalProjectImages > 1 && (
              <div className="image-counter absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm bg-blue-800 bg-opacity-30 rounded-full px-2 sm:px-3 py-1 backdrop-blur-sm z-10">
                {currentImageIndex + 1} / {totalProjectImages}
              </div>
            )}

            {/* Sliding images */}
            <div 
              className={`flex transition-transform duration-300 ease-in-out ${
                isAnimating ? 'transform-gpu' : ''
              }`}
              style={{
                transform: `translateX(-${currentImageIndex * (100 / totalProjectImages)}%)`,
                width: `${totalProjectImages * 100}%`
              }}
            >
              {currentProjectImages.map((image, index) => (
                <div
                  key={`${image.projectId}-${index}`}
                  className="flex-shrink-0 w-full"
                  style={{ width: `${100 / totalProjectImages}%` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={isFullscreen ? 1920 : 1200}
                    height={isFullscreen ? 1080 : 800}
                    className={`object-contain ${isFullscreen ? 'w-screen h-screen' : 'max-w-full max-h-full'}`}
                    priority={index === currentImageIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info panel (only shown when not in fullscreen) */}
          {!isFullscreen && (
            <div className="text-white max-w-md">
              <h3 className="text-2xl font-bold mb-4">{currentImage.projectTitle}</h3>
              {currentImage.projectDescription && (
                <p className="text-gray-300 leading-relaxed">{currentImage.projectDescription}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
