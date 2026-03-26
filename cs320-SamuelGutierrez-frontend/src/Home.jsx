import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Image, Heart } from 'lucide-react';
import { API_URL } from './config';

const Home = () => {
  const [counts, setCounts] = useState({
    timeline: null,
    memories: null,
    loveNotes: null,
  });

  useEffect(() => {
    const fetchCount = async (endpoint) => {
      const response = await fetch(`${API_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error('Count request failed');
      }
      const data = await response.json();
      return Array.isArray(data) ? data.length : 0;
    };

    const loadCounts = async () => {
      try {
        const [timelineCount, memoriesCount, loveNotesCount] = await Promise.all([
          fetchCount('/timeline'),
          fetchCount('/memories/photos'),
          fetchCount('/lovenotes'),
        ]);

        setCounts({
          timeline: timelineCount,
          memories: memoriesCount,
          loveNotes: loveNotesCount,
        });
      } catch {
        setCounts({
          timeline: null,
          memories: null,
          loveNotes: null,
        });
      }
    };

    loadCounts();
  }, []);

  const formatCount = (value, noun) => {
    if (value === null) {
      return 'Unavailable';
    }
    if (value === 1) {
      return `1 ${noun}`;
    }
    return `${value} ${noun}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl overflow-hidden shadow-lg mb-12">
          <div className="aspect-[21/9] flex items-center justify-center">
            <div className="text-center text-white">
              <Heart className="w-24 h-24 mx-auto mb-4 opacity-60" />
              <p className="text-xl opacity-80">Hero Image Placeholder</p>
              <p className="text-sm opacity-60">(Couple Photo)</p>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-gray-800 mb-4">
            Welcome to Our Story
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A beautiful collection of our cherished moments, memories, and the journey we've shared together.
            Every moment tells a part of our love story.
          </p>
        </div>

        {/* Three Large Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link
            to="/timeline"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">Timeline</h3>
              <p className="text-sm font-medium text-pink-600 mb-2">{formatCount(counts.timeline, 'event')}</p>
              <p className="text-gray-600">
                Explore our journey through time and relive special moments together
              </p>
            </div>
          </Link>

          <Link
            to="/memories"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">Memories</h3>
              <p className="text-sm font-medium text-purple-600 mb-2">{formatCount(counts.memories, 'photo')}</p>
              <p className="text-gray-600">
                Browse through our beautiful photo gallery and cherished memories
              </p>
            </div>
          </Link>

          <Link
            to="/lovenotes"
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-gray-800">Love Notes</h3>
              <p className="text-sm font-medium text-blue-600 mb-2">{formatCount(counts.loveNotes, 'note')}</p>
              <p className="text-gray-600">
                Sweet messages and notes we've shared with each other
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;