// File: src/components/layouts/PMKVYLayout.tsx
import React from 'react';
import { PMKVYSidebar } from '../sidebars/PMKVYSidebar';
import { Header } from '../Header';

interface PMKVYLayoutProps {
  children: React.ReactNode;
}

export const PMKVYLayout: React.FC<PMKVYLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <PMKVYSidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header title="PMKVY Portal" />
        <main className="h-full overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};