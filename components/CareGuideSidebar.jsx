import React from 'react';
import { Icons, STATIC_CARE_TIPS } from '../constants.js';

const CareGuideSidebar = () => {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0 bg-white rounded-xl shadow-sm border border-terra-100 p-6 flex flex-col gap-8 h-fit lg:sticky lg:top-24">
      
      {/* Static Tips Section */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-moss-600"><Icons.Sprout /></span>
          <h2 className="text-xl font-serif font-semibold text-terra-900">Care Guide</h2>
        </div>
        
        <div className="space-y-6">
          {STATIC_CARE_TIPS.map((tip, idx) => (
            <div key={idx} className="flex gap-4 care-badge">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terra-50 flex items-center justify-center text-terra-600">
                {tip.icon}
              </div>
              <div>
                <h3 className="font-medium text-terra-800 text-sm mb-1">{tip.title}</h3>
                <p className="text-xs text-terra-500 leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CareGuideSidebar;
