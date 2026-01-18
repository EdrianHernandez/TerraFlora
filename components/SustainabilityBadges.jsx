import React from 'react';
import { Icons } from '../constants.jsx';

const SustainabilityBadges = () => {
  return (
    <div className="w-full bg-terra-100 py-6 border-b border-terra-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-terra-800">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-white rounded-full shadow-sm text-moss-600 group-hover:bg-moss-50 transition-colors">
              <Icons.Recycle />
            </div>
            <span className="text-sm font-medium tracking-wide">Eco-friendly Packaging</span>
          </div>
          
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-white rounded-full shadow-sm text-moss-600 group-hover:bg-moss-50 transition-colors">
              <Icons.Leaf />
            </div>
            <span className="text-sm font-medium tracking-wide">100% Peat-Free</span>
          </div>

          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-white rounded-full shadow-sm text-moss-600 group-hover:bg-moss-50 transition-colors">
              <Icons.ShieldCheck />
            </div>
            <span className="text-sm font-medium tracking-wide">7-Day Health Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityBadges;
