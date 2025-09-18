interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[rgb(243,243,243)]">
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
