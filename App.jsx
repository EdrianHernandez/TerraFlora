import React from 'react';
import { Icons } from './constants.jsx';
import SeasonSpecialBanner from './components/SeasonSpecialBanner.jsx';
import SustainabilityBadges from './components/SustainabilityBadges.jsx';
import PlantGrid from './components/PlantGrid.jsx';
import CareGuideSidebar from './components/CareGuideSidebar.jsx';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-terra-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-moss-700"><Icons.Sprout /></span>
            <span className="text-xl font-serif font-bold text-terra-900 tracking-tight">Terra Flora</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-terra-600">
            <a href="#" className="hover:text-moss-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-moss-600 transition-colors">Care Guide</a>
            <a href="#" className="hover:text-moss-600 transition-colors">About</a>
            <button className="relative p-2 text-terra-800 hover:text-moss-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        <SeasonSpecialBanner />
        <SustainabilityBadges />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Responsive Layout: Grid left, Sidebar right (on desktop) */}
          <div className="flex flex-col lg:flex-row gap-12">
            
            <PlantGrid />
            
            <div className="lg:w-80 flex-shrink-0">
               <CareGuideSidebar />
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-terra-900 text-terra-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-white mb-4">Terra Flora</h3>
            <p className="text-sm font-light opacity-80 leading-relaxed">
              Cultivating connections between people and plants. Sustainably grown, carefully shipped, and guaranteed to thrive.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Customer Care</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-terra-800 border-none rounded px-3 py-2 text-sm w-full placeholder:text-terra-400 focus:ring-1 focus:ring-moss-400"
              />
              <button className="bg-moss-700 hover:bg-moss-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-terra-800 text-xs text-terra-500 text-center">
          &copy; {new Date().getFullYear()} Terra Flora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
