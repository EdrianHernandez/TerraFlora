import React from 'react';

export interface Plant {
  id: string;
  name: string;
  latinName: string;
  price: number;
  imageUrl: string;
  lightRequirement: 'low' | 'medium' | 'high';
  waterRequirement: 'low' | 'medium' | 'high';
  isPetFriendly: boolean;
  description: string;
  tags: string[];
}

export interface CareTip {
  title: string;
  description: string;
  icon: React.ReactNode;
}