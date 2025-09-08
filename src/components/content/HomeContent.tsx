import ContentLayout from "../layout/ContentLayout";

export default function HomeContent() {
  return (
    <ContentLayout>
      <div className="flex items-center justify-center p-4 md:p-6 h-full">
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            SOPoMATIC
          </h1>
        </div>
      </div>
    </ContentLayout>
  );
}
