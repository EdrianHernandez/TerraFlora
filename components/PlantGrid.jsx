import React from 'react';
import { PLANTS, Icons } from '../constants.jsx';

const PlantGrid = () => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-baseline mb-8">
        <h2 className="text-2xl font-serif text-terra-900">Featured Plants</h2>
        <span className="text-sm text-terra-500 italic">{PLANTS.length} varieties available</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {PLANTS.map((plant) => (
          <div key={plant.id} className="plant-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-terra-200/50 transition-all duration-300 border border-terra-100 flex flex-col h-full">
            
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-terra-100">
              <img 
                src={plant.imageUrl} 
                alt={plant.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay Tags */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {plant.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase text-terra-800 rounded-sm shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quick Add Button (Visible on Hover) */}
              <button className="absolute bottom-4 right-4 bg-white text-terra-900 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-moss-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-serif text-lg text-terra-900 leading-tight group-hover:text-moss-700 transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-xs text-terra-400 italic font-light">{plant.latinName}</p>
                </div>
                <span className="font-medium text-terra-900">${plant.price.toFixed(2)}</span>
              </div>

              <p className="text-sm text-terra-500 mb-4 line-clamp-2 leading-relaxed">
                {plant.description}
              </p>

              <div className="mt-auto pt-4 border-t border-terra-50 flex items-center justify-between text-xs text-terra-600">
                {/* Light Badge */}
                <div className="flex items-center gap-1.5" title="Light Requirement">
                  {plant.lightRequirement === 'high' ? <Icons.Sun /> : 
                   plant.lightRequirement === 'medium' ? <Icons.CloudSun /> : <Icons.Cloud />}
                  <span className="capitalize">{plant.lightRequirement} Light</span>
                </div>

                {/* Water Badge */}
                <div className="flex items-center gap-1.5" title="Watering Frequency">
                  <Icons.Droplet />
                  <span className="capitalize">{plant.waterRequirement} Water</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantGrid;
