import { Heart, Plus, MoreVertical } from 'lucide-react';

function LoveNote({ message, author, date, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-3xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300 relative`}>
      <button className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 text-white transition-colors">
        <MoreVertical className="w-4 h-4" />
      </button>
      
      <div className="flex items-start gap-3 mb-4">
        <Heart className="w-6 h-6 text-white fill-white flex-shrink-0 mt-1" />
        <p className="text-white leading-relaxed italic text-lg">
          "{message}"
        </p>
      </div>
      
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/30">
        <p className="text-white/90">{author}</p>
        <p className="text-white/70 text-sm">{date}</p>
      </div>
    </div>
  );
}

export default function LoveNotes() {
  const notes = [
    {
      message: "Every moment with you feels like a dream come true. Thank you for being my person.",
      author: "From You",
      date: "Feb 14, 2024",
      color: "from-pink-400 to-rose-400"
    },
    {
      message: "I love how you make me laugh even on the hardest days. You're my sunshine.",
      author: "From Me",
      date: "Feb 10, 2024",
      color: "from-purple-400 to-indigo-400"
    },
    {
      message: "The way you look at me makes me feel like the luckiest person in the world.",
      author: "From You",
      date: "Jan 28, 2024",
      color: "from-blue-400 to-cyan-400"
    },
    {
      message: "Home isn't a place, it's you. Wherever we are together, that's where I belong.",
      author: "From Me",
      date: "Jan 15, 2024",
      color: "from-pink-400 to-purple-400"
    },
    {
      message: "Thank you for loving all of me - the good, the bad, and everything in between.",
      author: "From You",
      date: "Jan 5, 2024",
      color: "from-rose-400 to-pink-400"
    },
    {
      message: "You make ordinary moments extraordinary just by being there. I love our little life together.",
      author: "From Me",
      date: "Dec 25, 2023",
      color: "from-indigo-400 to-purple-400"
    },
    {
      message: "I fall in love with you more and more each day. Here's to forever and always.",
      author: "From You",
      date: "Dec 10, 2023",
      color: "from-cyan-400 to-blue-400"
    },
    {
      message: "Your smile is my favorite thing in the world. Never stop being your wonderful self.",
      author: "From Me",
      date: "Nov 22, 2023",
      color: "from-purple-400 to-pink-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
          </div>
          <h1 className="text-4xl text-gray-800 mb-4">Love Notes</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Sweet messages and heartfelt words we've shared with each other
          </p>
          
          {/* Add New Note Button */}
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
            <Plus className="w-5 h-5" />
            Write a Love Note
          </button>
        </div>

        {/* Love Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <LoveNote
              key={index}
              message={note.message}
              author={note.author}
              date={note.date}
              color={note.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
