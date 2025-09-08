import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white font-thin font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="text-center space-y-2 md:space-y-0 md:flex md:justify-between md:items-center">
          <p className="text-black text-sm md:text-base">
            © {new Date().getFullYear()} Stefan Șoptelea. All rights reserved.
          </p>
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
