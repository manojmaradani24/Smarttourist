// File: src/components/sidebars/BaseSidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

interface SidebarItem {
  icon: React.ComponentType<any>;
  label: string;
  path: string;
}

interface BaseSidebarProps {
  items: SidebarItem[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export const BaseSidebar: React.FC<BaseSidebarProps> = ({ 
  items, 
  title, 
  isOpen, 
  onClose, 
  onToggle 
}) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile sidebar button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-md"
        onClick={onToggle}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-indigo-600">{title}</h1>
          <button
            className="lg:hidden p-1"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={onClose}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};