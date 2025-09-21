import { FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontLoaded(true);
    });
  }, []);

  return (
    <footer className="font-thin font-helvetica overflow-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 py-4 md:py-8">
        <div className="text-center space-y-2 md:space-y-0 md:flex md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="text-black text-sm md:text-base md:pr-1">
              © {new Date().getFullYear()} Ștefan Șoptelea.
            </p>
            <h1 className={`text-sm md:text-base font-black font-britannic-bold text-blue-800 opacity-100`}>
              SOPoMATIC
            </h1>
          </div>
          <p className="text-gray-600 text-xs md:text-sm flex items-center justify-center md:justify-end">
            Site by{' '}
            <a 
              href="https://github.com/dosqas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 inline-flex items-center gap-1 ml-1"
            >
              <FaGithub className="w-4 h-4" />
              dosqas
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
