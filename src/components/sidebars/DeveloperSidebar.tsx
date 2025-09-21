// File: src/components/sidebars/DeveloperSidebar.tsx
import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Package, 
  TrendingUp, 
  Users, 
  BookOpen,
  Settings 
} from 'lucide-react';
import { BaseSidebar } from './BaseSidebar';

const developerItems = [
  { icon: Code, label: 'API Documentation', path: '/developer-portal/api-docs' },
  { icon: Terminal, label: 'Sandbox Environment', path: '/developer-portal/sandbox' },
  { icon: Package, label: 'Theme Marketplace', path: '/developer-portal/marketplace' },
  { icon: TrendingUp, label: 'Revenue Dashboard', path: '/developer-portal/revenue' },
  { icon: Users, label: 'Developer Community', path: '/developer-portal/community' },
  { icon: BookOpen, label: 'Tutorials', path: '/developer-portal/tutorials' },
  { icon: Settings, label: 'Settings', path: '/developer-portal/settings' },
];

export const DeveloperSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BaseSidebar
      items={developerItems}
      title="Developer Portal"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onToggle={() => setIsOpen(!isOpen)}
    />
  );
};