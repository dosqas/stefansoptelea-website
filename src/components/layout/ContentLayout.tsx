import Footer from "@/components/layout/Footer"

interface ContentLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function ContentLayout({ children, showFooter = true }: ContentLayoutProps) {
  return (
    <>
      <div className="flex flex-col md:hidden overflow-auto no-scrollbar">
        <div className="flex-1">
          {children}
        </div>
        {showFooter && <Footer />}
      </div>

      <div className="hidden md:flex md:flex-1 md:flex-col md:justify-between md:min-h-screen md:pt-30 overflow-auto no-scrollbar">
        <div className="flex-1 overflow-auto no-scrollbar">
          {children}
        </div>
        {showFooter && <Footer />}
      </div>
    </>
  );
}
