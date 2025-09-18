import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Zap,
  Factory,
  BarChart3,
  Calculator,
  HelpCircle,
  Puzzle,
  Globe,
  Users, // ✅ Added for Customers
  LucideIcon,
} from "lucide-react";

// Type for menu items
interface MenuItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: ShoppingCart, label: "Orders", path: "/orders" },
    { icon: Package, label: "Products & Inventory", path: "/products" },
    { icon: Users, label: "Customers", path: "/customers" }, // ✅ New Customers section
    { icon: Globe, label: "Website Builder", path: "/website-builder" },
    { icon: Zap, label: "Automation Playbooks", path: "/automation" },
    { icon: Factory, label: "Manufacturing Hub", path: "/manufacturing" },
    { icon: BarChart3, label: "Analytics & Insights", path: "/analytics" },
    { icon: Puzzle, label: "Integrations", path: "/integrations" },
    { icon: Calculator, label: "Accounting & GST", path: "/accounting" },
    { icon: HelpCircle, label: "Support & Services", path: "/support" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen">
      <nav className="p-4 space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700 border-r-2 border-indigo-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-indigo-600" : ""}`} />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;