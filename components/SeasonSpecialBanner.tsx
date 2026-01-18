import React from 'react';

const SeasonSpecialBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-[500px] flex items-center nursery-banner">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Greenhouse interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-terra-900/90 via-terra-800/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-lg text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-moss-600/90 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-sm">
            Spring Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6 leading-tight">
            Bring the <br/>
            <span className="italic text-moss-200">Outdoors</span> In
          </h1>
          <p className="text-lg text-terra-100 mb-8 font-light leading-relaxed">
            Discover our curated selection of air-purifying giants and delicate ferns. 
            Sustainably grown and delivered to your door.
          </p>
          <button className="bg-moss-600 hover:bg-moss-500 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-lg shadow-moss-900/20">
            Shop New Arrivals
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonSpecialBanner;
