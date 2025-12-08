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
      <div className={`w-12 h-12 ${iconBg} flex items-center justify-center rounded-lg`}>
        {icon}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <p className="text-gray-600 text-sm">{description}</p>

      <ul className="space-y-2 text-sm text-gray-700">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      {highlight && (
        <div
          className={`mt-2 text-white font-semibold rounded-lg px-4 py-2 text-center ${highlightColor}`}
        >
          {highlight}
        </div>
      )}

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
        <FeatureCard
          title="Smart Travel Hub"
          subtitle="Complete travel planning solution"
          description="AI-powered itinerary planning, budget management, and travel analytics. Transform your travel experience with 80% time reduction in planning tasks."
          features={[
            "Smart Itinerary Planning (10.22hrs → 2hrs)",
            "AI Travel Analytics Dashboard",
            "Multi-destination Integration",
            "Local Guide Matching",
          ]}
          highlight="80% Time Saved in travel planning"
          highlightColor="bg-blue-700"
          buttonText="Access Dashboard"
          iconBg="bg-blue-100"
        />

        <FeatureCard
          title="Travel Partner Platform"
          subtitle="Build on SmartTourist ecosystem"
          description="Access comprehensive APIs, development tools, and partnership opportunities. Create travel packages, themes, and integrations for global travelers."
          features={[
            "Complete Travel API Documentation",
            "Sandbox Environment",
            "Package Marketplace",
            "Revenue Sharing Program",
          ]}
          highlight="50+ Travel API Endpoints ready to use"
          highlightColor="bg-orange-500"
          buttonText="Access Dashboard"
          iconBg="bg-orange-100"
        />

        <FeatureCard
          title="Local Experience Portal"
          subtitle="Smart matching for authentic experiences"
          description="AI-powered experience matching from 24.3 thousand certified local guides database. Cultural immersion, skill sharing, and authentic travel opportunities."
          features={[
            "AI Experience Matching",
            "24.3K Local Guide Database",
            "Cultural Immersion Programs",
            "Sustainable Tourism",
          ]}
          highlight="89% Satisfaction Rate for local experiences"
          highlightColor="bg-green-600"
          buttonText="Access Dashboard"
          iconBg="bg-green-100"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
