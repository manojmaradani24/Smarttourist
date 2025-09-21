// File: src/components/layouts/DeveloperLayout.tsx
import React from 'react';
import { DeveloperSidebar } from '../sidebars/DeveloperSidebar';
import { Header } from '../Header';

interface DeveloperLayoutProps {
  children: React.ReactNode;
}

export const DeveloperLayout: React.FC<DeveloperLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <DeveloperSidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header title="Developer Portal" />
        <main className="h-full overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};