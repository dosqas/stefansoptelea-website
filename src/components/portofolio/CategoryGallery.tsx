import Image from 'next/image';
import ContentLayout from '../layout/ContentLayout';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface CategoryGalleryProps {
  categoryName: string;
  photos: Photo[];
}

export default function CategoryGallery({ categoryName, photos }: CategoryGalleryProps) {
  return (
    <ContentLayout>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {categoryName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
            </p>
          </div>
          
          {photos.length === 0 ? (
            <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">
                No photos in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  {(photo.title || photo.description) && (
                    <div className="p-4">
                      {photo.title && (
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {photo.title}
                        </h3>
                      )}
                      {photo.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {photo.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ContentLayout>
  );
}
