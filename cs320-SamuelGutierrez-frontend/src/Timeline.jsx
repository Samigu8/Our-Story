import { Calendar, Edit, Trash2 } from 'lucide-react';

function TimelineCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center">
        <Calendar className="w-16 h-16 text-white opacity-60" />
      </div>
      
      {/* Card Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl text-gray-800">{title}</h3>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-blue-50 text-blue-500 transition-colors">
              <Edit className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full hover:bg-red-50 text-red-500 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <p className="text-sm text-pink-500 mb-3">{date}</p>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  const timelineEvents = [
    {
      title: "First Date",
      date: "January 15, 2023",
      description: "The day we met at the cozy coffee shop downtown. We talked for hours and knew something special was beginning."
    },
    {
      title: "Beach Vacation",
      date: "March 22, 2023",
      description: "Our first trip together. Watching the sunset by the ocean, creating memories that would last forever."
    },
    {
      title: "Moving In Together",
      date: "June 10, 2023",
      description: "We found our perfect little apartment and started building our home together, filling it with love and laughter."
    },
    {
      title: "Anniversary Dinner",
      date: "January 15, 2024",
      description: "Celebrating one year together at our favorite restaurant where it all began. So grateful for this journey."
    },
    {
      title: "Road Trip Adventure",
      date: "April 8, 2024",
      description: "An unforgettable cross-country road trip, discovering new places and making countless memories along the way."
    },
    {
      title: "Family Gathering",
      date: "August 20, 2024",
      description: "The first time our families met. A beautiful day filled with warmth, love, and new connections."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-gray-800 mb-4">Our Timeline</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A chronological journey through all the special moments we've shared
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineEvents.map((event, index) => (
            <TimelineCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
