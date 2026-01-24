
import React from 'react';

export interface PricingPlan {
  name: string;
  price: number;
  minutes: number;
  overage: number;
  features: string[];
  recommended?: boolean;
  link?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}