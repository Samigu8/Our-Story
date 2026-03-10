import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors">
            <Heart className="w-6 h-6 fill-current" />
            <span className="font-semibold text-lg">Our Story</span>
          </Link>
          
          <div className="flex gap-8">
            <Link
              to="/"
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive('/')
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/timeline"
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive('/timeline')
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
              }`}
            >
              Timeline
            </Link>
            <Link
              to="/memories"
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive('/memories')
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
              }`}
            >
              Memories
            </Link>
            <Link
              to="/lovenotes"
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive('/lovenotes')
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
              }`}
            >
              Love Notes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
