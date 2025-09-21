// File: src/components/sidebars/PMKVYSidebar.tsx
import React, { useState } from 'react';
import { 
  Briefcase, 
  User, 
  BookOpen, 
  TrendingUp, 
  FileText,
  Shield,
  Heart,
  Settings
} from 'lucide-react';
import { BaseSidebar } from './BaseSidebar';

const pmkvyItems = [
  { icon: Briefcase, label: 'Job Matching', path: '/pmkvy-portal/jobs' },
  { icon: User, label: 'Profile Management', path: '/pmkvy-portal/profile' },
  { icon: FileText, label: 'Applications', path: '/pmkvy-portal/applications' },
  { icon: BookOpen, label: 'Skill Development', path: '/pmkvy-portal/skills' },
  { icon: TrendingUp, label: 'Career Progression', path: '/pmkvy-portal/career' },
  { icon: Shield, label: 'Social Security', path: '/pmkvy-portal/security' },
  { icon: Heart, label: 'Health Benefits', path: '/pmkvy-portal/health' },
  { icon: Settings, label: 'Settings', path: '/pmkvy-portal/settings' },
];

export const PMKVYSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BaseSidebar
      items={pmkvyItems}
      title="PMKVY Portal"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onToggle={() => setIsOpen(!isOpen)}
    />
  );
};