interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
