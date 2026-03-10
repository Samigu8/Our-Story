import { Upload, Image as ImageIcon } from 'lucide-react';

function PhotoTile({ caption, index }) {
  const gradients = [
    'from-pink-300 to-rose-300',
    'from-purple-300 to-indigo-300',
    'from-blue-300 to-cyan-300',
    'from-pink-300 to-purple-300',
    'from-purple-300 to-blue-300',
    'from-rose-300 to-pink-300',
  ];

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
      {/* Image Placeholder */}
      <div className={`aspect-square bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}>
        <ImageIcon className="w-16 h-16 text-white opacity-60" />
      </div>
      
      {/* Caption Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white text-sm">{caption}</p>
      </div>
      
      {/* Caption Below (visible on mobile) */}
      <div className="p-3 md:hidden">
        <p className="text-gray-600 text-sm">{caption}</p>
      </div>
    </div>
  );
}

export default function Memories() {
  const photos = [
    { caption: "Sunset at the beach during our first vacation together" },
    { caption: "Coffee date where we first met and fell in love" },
    { caption: "Cozy winter evening by the fireplace" },
    { caption: "Hiking adventure in the mountains" },
    { caption: "Celebrating our first anniversary" },
    { caption: "Dancing under the stars at the summer festival" },
    { caption: "Cooking together in our new home" },
    { caption: "Road trip memories and scenic views" },
    { caption: "Laughing together at the amusement park" },
    { caption: "Quiet moment reading books on a lazy Sunday" },
    { caption: "Our families meeting for the first time" },
    { caption: "Spontaneous picnic in the park" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-4">Our Memories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A collection of beautiful moments captured through our journey together
          </p>
          
          {/* Upload Button */}
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
            <Upload className="w-5 h-5" />
            Upload New Photo
          </button>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <PhotoTile key={index} caption={photo.caption} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
