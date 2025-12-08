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
  Users,
  Code,
  Truck,
  LucideIcon,
  Store,
  Laptop,
  Wrench,
} from "lucide-react";

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
    { icon: Users, label: "Customers", path: "/customers" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Calculator, label: "Accounting", path: "/accounting" },
    { icon: Store, label: "Store Builder", path: "/store-builder" },
    { icon: Laptop, label: "profile", path: "/website-builder" },
    { icon: Factory, label: "Manufacturing Hub", path: "/manufacturing" },
    { icon: Puzzle, label: "Integrations", path: "/integrations" },
    { icon: Zap, label: "Payments", path: "/automation" },
    { icon: HelpCircle, label: "Support Services", path: "/support" },
  ];

  return (
    <aside className="w-64 bg-[#0A1A2F] text-white h-screen">
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
                  ? "bg-indigo-700 text-white"
                  : "text-indigo-200 hover:bg-indigo-800 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
