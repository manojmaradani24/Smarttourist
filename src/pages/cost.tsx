import React from "react";
import { CheckCircle } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight?: string;
  highlightColor?: string;
  buttonText: string;
  iconBg: string;
  icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  description,
  features,
  highlight,
  highlightColor = "bg-blue-600",
  buttonText,
  iconBg,
  icon,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 border hover:shadow-lg transition">
      {/* Icon */}
      <div className={`w-12 h-12 ${iconBg} flex items-center justify-center rounded-lg`}>
        {icon}
      </div>

      {/* Title + Subtitle */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm">{description}</p>

      {/* Features */}
      <ul className="space-y-2 text-sm text-gray-700">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      {/* Highlight */}
      {highlight && (
        <div
          className={`mt-2 text-white font-semibold rounded-lg px-4 py-2 text-center ${highlightColor}`}
        >
          {highlight}
        </div>
      )}

      {/* Button */}
      <button className="mt-auto bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-800 transition">
        {buttonText}
      </button>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        {/* MSME Business Hub */}
        <FeatureCard
          title="MSME Business Hub"
          subtitle="Complete business management solution"
          description="AI-powered GST compliance, inventory management, and growth analytics. Transform your business operations with 80% time reduction in compliance tasks."
          features={[
            "GST Automation (10.22hrs → 2hrs)",
            "AI Analytics Dashboard",
            "E-commerce Integration",
            "Employment Matching",
          ]}
          highlight="80% Time Saved in GST compliance"
          highlightColor="bg-blue-700"
          buttonText="Access Dashboard"
          iconBg="bg-blue-100"
        />

        {/* Developer Platform */}
        <FeatureCard
          title="Developer Platform"
          subtitle="Build on SmartMerchant ecosystem"
          description="Access comprehensive APIs, development tools, and marketplace opportunities. Create themes, plugins, and integrations for India's growing MSME sector."
          features={[
            "Complete API Documentation",
            "Sandbox Environment",
            "Theme Marketplace",
            "Revenue Sharing",
          ]}
          highlight="50+ API Endpoints ready to use"
          highlightColor="bg-orange-500"
          buttonText="Access Dashboard"
          iconBg="bg-orange-100"
        />

        {/* PMKVY Workers Portal */}
        <FeatureCard
          title="PMKVY Workers Portal"
          subtitle="Smart job matching for skilled workers"
          description="AI-powered job matching from 24.3 lakh certified workers database. Career growth tracking, skill development, and employment opportunities."
          features={[
            "AI Job Matching",
            "24.3L Worker Database",
            "Skill Development",
            "Career Progression",
          ]}
          highlight="89% Success Rate job placements"
          highlightColor="bg-green-600"
          buttonText="Access Dashboard"
          iconBg="bg-green-100"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
