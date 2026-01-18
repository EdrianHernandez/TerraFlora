import React from 'react';
import { Plant, CareTip } from './types';

// Icons
export const Icons = {
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  ),
  CloudSun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/></svg>
  ),
  Cloud: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-1.7-1.3-3-3-3h-11a3 3 0 0 1-3-3c0-1.3 0-2.3 2-3h.7c.3-3 2.5-5 5.3-5 3.5 0 5 2.5 5 5 3 1 4 2 4 4.5s-2 3.5-4 3.5"/></svg>
  ),
  Droplet: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
  ),
  Leaf: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 1.45 10t-7.37 7z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  ),
  Recycle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 9.5a3 3 0 0 1 1.53-2.64l1.821-1.05a3 3 0 0 1 3.09 0l1.828 1.05a3 3 0 0 1 1.531 2.64L12 13v6"/><path d="m17 13 3-3-3-3"/></svg>
  ),
  ShieldCheck: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  Sprout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
  ),
  Search: () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  Sparkles: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
  )
};

export const PLANTS: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    latinName: 'Monstera deliciosa',
    price: 35.00,
    imageUrl: 'https://picsum.photos/400/500?random=1',
    lightRequirement: 'medium',
    waterRequirement: 'medium',
    isPetFriendly: false,
    description: 'The iconic Swiss Cheese Plant. Fast growing and dramatic.',
    tags: ['Best Seller', 'Easy Care']
  },
  {
    id: '2',
    name: 'Snake Plant',
    latinName: 'Dracaena trifasciata',
    price: 22.50,
    imageUrl: 'https://picsum.photos/400/500?random=2',
    lightRequirement: 'low',
    waterRequirement: 'low',
    isPetFriendly: false,
    description: 'Indestructible and architectural. Perfect for beginners.',
    tags: ['Air Purifying', 'Low Light']
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    latinName: 'Ficus lyrata',
    price: 55.00,
    imageUrl: 'https://picsum.photos/400/500?random=3',
    lightRequirement: 'high',
    waterRequirement: 'medium',
    isPetFriendly: false,
    description: 'A statement tree with large, violin-shaped leaves.',
    tags: ['Statement Piece']
  },
  {
    id: '4',
    name: 'Calathea Orbifolia',
    latinName: 'Calathea orbifolia',
    price: 38.00,
    imageUrl: 'https://picsum.photos/400/500?random=4',
    lightRequirement: 'medium',
    waterRequirement: 'high',
    isPetFriendly: true,
    description: 'Stunning oversized leaves with silver stripes.',
    tags: ['Pet Friendly']
  },
  {
    id: '5',
    name: 'Pothos Marble Queen',
    latinName: 'Epipremnum aureum',
    price: 18.00,
    imageUrl: 'https://picsum.photos/400/500?random=5',
    lightRequirement: 'low',
    waterRequirement: 'medium',
    isPetFriendly: false,
    description: 'Trailing vine with beautiful white and green variegation.',
    tags: ['Hanging', 'Fast Growing']
  },
  {
    id: '6',
    name: 'ZZ Plant',
    latinName: 'Zamioculcas zamiifolia',
    price: 28.00,
    imageUrl: 'https://picsum.photos/400/500?random=6',
    lightRequirement: 'low',
    waterRequirement: 'low',
    isPetFriendly: false,
    description: 'Glossy leaves that thrive on neglect.',
    tags: ['Low Light', 'Drought Tolerant']
  }
];

export const STATIC_CARE_TIPS: CareTip[] = [
  {
    title: 'Water Wisely',
    description: 'Overwatering is the #1 killer. Check the top inch of soil before watering.',
    icon: <Icons.Droplet />
  },
  {
    title: 'Light Matters',
    description: 'South-facing windows offer the most intense light, while North is gentler.',
    icon: <Icons.Sun />
  },
  {
    title: 'Dust Leaves',
    description: 'Clean leaves photosynthesize better. Wipe them gently with a damp cloth.',
    icon: <Icons.Leaf />
  }
];
