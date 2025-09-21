import React, { useState } from "react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// Theme interface
interface Theme {
  id: string;
  name: string;
  author: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  tags: string[];
}

const ThemeStore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredThemes, setFilteredThemes] = useState<Theme[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [filter, setFilter] = useState("all");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false); // New state to track if user has generated themes

  // Sample initial themes
  const initialThemes: Theme[] = [
    {
      id: "1",
      name: "Horizon",
      author: "Shopify",
      image: "https://media.istockphoto.com/id/905432958/photo/nautilus-blue-background.jpg?s=612x612&w=0&k=20&c=S9k_YHGScrv99OIsdiWU39-J7AgEEVrTDogVHIOu5qo=",
      price: "Free",
      rating: 4.8,
      description: "A modern, minimalist theme perfect for fashion and lifestyle brands.",
      tags: ["Minimalist", "Fashion", "Responsive"]
    },
    {
      id: "2",
      name: "Savor",
      author: "Shopify",
      image: "https://media.istockphoto.com/id/2217627248/photo/empty-blank-plain-bright-dark-gray-black-colored-textured-chart-paper-horizontal-backgrounds.jpg?s=612x612&w=0&k=20&c=-ffAtA0Vpdz4O_SMmvVzPpsYkPcwJp5UfNjoa51XlTs=",
      price: "$180",
      rating: 4.5,
      description: "Designed for food and beverage businesses with recipe integration.",
      tags: ["Food", "Recipe", "Warm Tones"]
    },
    {
      id: "3",
      name: "Atelier",
      author: "Shopify",
      image: "https://media.istockphoto.com/id/157558108/photo/shining-gold-texture.jpg?s=612x612&w=0&k=20&c=ZoupnDM_0RIzuFTvDYpy_XQ1f2_D9e7g3xkW5YOO7_A=",
      price: "$150",
      rating: 4.9,
      description: "Perfect for artisans and creators to showcase their craft.",
      tags: ["Artisan", "Portfolio", "Creative"]
    },
    {
      id: "4",
      name: "Expanse",
      author: "Shopify",
      image: "https://media.istockphoto.com/id/1131561170/photo/sky-blue-solid.jpg?s=612x612&w=0&k=20&c=rr9cEosTVKgAMIQle08D49sq7ltGnJgTUazkXQ2jrd0=",
      price: "Free",
      rating: 4.3,
      description: "Spacious design for stores with large product catalogs.",
      tags: ["Spacious", "Catalog", "Versatile"]
    },
    {
      id: "5",
      name: "Craft",
      author: "Shopify",
      image: "https://media.istockphoto.com/id/1146251979/photo/yellow-background.jpg?s=612x612&w=0&k=20&c=2C9v4l4NzMQLvl7thIVCnd2GpT6W86kocwHU7JsUgg0=",
      price: "$120",
      rating: 4.7,
      description: "Handcrafted aesthetic for makers and small batch products.",
      tags: ["Handmade", "Artisanal", "Textured"]
    },
    {
      id: "6",
      name: "Streamline",
      author: "Shopify",
      image: "https://media.istockphoto.com/id/182153599/photo/metal-surface.jpg?s=612x612&w=0&k=20&c=QnWMfgmlgPMrRNx7_k5bI4EcMcfglcQY4sbP-bqhr_4=",
      price: "$200",
      rating: 4.6,
      description: "Optimized for high-volume stores with advanced features.",
      tags: ["Efficient", "High-Volume", "Advanced"]
    },
    {
      id: "7",
      name: "Nova",
      author: "ThemeCrafters",
      image: "https://media.istockphoto.com/id/1029340324/photo/pink-red-wall-texture.jpg?s=612x612&w=0&k=20&c=9NQNS3sBK6jlbxk3r8pgIDZ08pMYvgdrpAJ7nZlQ44k=",
      price: "$180",
      rating: 4.8,
      description: "Modern theme with dark mode support and animated transitions.",
      tags: ["Dark Mode", "Modern", "Animated"]
    },
    {
      id: "8",
      name: "EcoNature",
      author: "GreenDesigns",
      image: "https://media.istockphoto.com/id/1351119561/photo/christmas-green-dark-background-grunge-wall-old-paper-abstract-bulletin-board-canvas-fabric.jpg?s=612x612&w=0&k=20&c=CwW5dmfbBN-qKOHT3twHxYqHdhxY1-VnNutsXkBbCnw=",
      price: "$160",
      rating: 4.4,
      description: "Eco-friendly design for sustainable and organic businesses.",
      tags: ["Eco-Friendly", "Organic", "Sustainable"]
    }
  ];

  // Function to call AI API and generate themes based on prompt
  const generateThemesFromPrompt = async (prompt: string): Promise<Theme[]> => {
    setIsGenerating(true);
    setError(null);
    setHasGenerated(true); // Set to true when user generates themes
    
    try {
      // In a real implementation, you would call your AI API here
      // This is a simulation of what the response might look like
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Analyze the prompt to generate relevant themes
      const promptLower = prompt.toLowerCase();
      let generatedThemes: Theme[] = [];
      
      if (promptLower.includes("fashion") || promptLower.includes("clothing")) {
        generatedThemes = [
          {
            id: "gen-1",
            name: "Boutique Elegance",
            author: "AI Designer",
            image: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Fashion+Theme",
            price: "$190",
            rating: 4.7,
            description: "Elegant theme designed for fashion boutiques and clothing stores with lookbook features.",
            tags: ["Fashion", "Elegant", "Lookbook", "AI Generated"]
          },
          {
            id: "gen-2",
            name: "Runway",
            author: "AI Designer",
            image: "https://via.placeholder.com/400x250/4ECDC4/FFFFFF?text=Runway+Theme",
            price: "$220",
            rating: 4.9,
            description: "High-end theme for luxury fashion brands with full-screen visuals and video support.",
            tags: ["Luxury", "Full-screen", "Video", "AI Generated"]
          }
        ];
      } else if (promptLower.includes("food") || promptLower.includes("restaurant")) {
        generatedThemes = [
          {
            id: "gen-3",
            name: "Gourmet Delight",
            author: "AI Designer",
            image: "https://via.placeholder.com/400x250/45B7D1/FFFFFF?text=Food+Theme",
            price: "$160",
            rating: 4.6,
            description: "Delicious theme for restaurants, cafes and food businesses with menu highlighting.",
            tags: ["Food", "Menu", "Restaurant", "AI Generated"]
          },
          {
            id: "gen-4",
            name: "Fresh Market",
            author: "AI Designer",
            image: "https://via.placeholder.com/400x250/96CEB4/FFFFFF?text=Market+Theme",
            price: "$140",
            rating: 4.5,
            description: "Fresh and organic design perfect for grocery stores and farmers markets.",
            tags: ["Grocery", "Organic", "Fresh", "AI Generated"]
          }
        ];
      } else {
        // Default generated themes for any other prompt
        generatedThemes = [
          {
            id: "gen-5",
            name: "Modern AI",
            author: "AI Designer",
            image: "https://via.placeholder.com/400x250/F7DC6F/000000?text=Modern+Theme",
            price: "$190",
            rating: 4.8,
            description: `AI-generated theme perfect for ${prompt} businesses with clean design and modern aesthetics.`,
            tags: ["Modern", "Clean", "AI Generated", "Responsive"]
          },
          {
            id: "gen-6",
            name: "Premium AI",
            author: "AI Designer",
            image: "https://via.placeholder.com/400x250/BB8FCE/FFFFFF?text=Premium+Theme",
            price: "$260",
            rating: 4.9,
            description: `High-end AI-generated theme optimized for ${prompt} businesses with advanced features.`,
            tags: ["Premium", "Advanced", "AI Generated", "E-commerce"]
          }
        ];
      }
      
      return generatedThemes;
    } catch (err) {
      setError("Failed to generate themes. Please try again.");
      console.error("API Error:", err);
      return [];
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const filtered = initialThemes.filter(theme => 
      theme.name.toLowerCase().includes(query) || 
      theme.description.toLowerCase().includes(query) ||
      theme.tags.some(tag => tag.toLowerCase().includes(query))
    );
    setFilteredThemes(filtered);
    setHasGenerated(true); // Show results after search
  };

  const handleGenerateThemes = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const generatedThemes = await generateThemesFromPrompt(searchQuery);
    setFilteredThemes(generatedThemes);
  };

  const handleFilter = (filterType: string) => {
    setFilter(filterType);
    if (filterType === "all") {
      setFilteredThemes(initialThemes);
    } else if (filterType === "free") {
      setFilteredThemes(initialThemes.filter(theme => theme.price === "Free"));
    } else if (filterType === "premium") {
      setFilteredThemes(initialThemes.filter(theme => theme.price !== "Free"));
    }
    setHasGenerated(true); // Show results after filter
  };

  const openThemeDetails = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  const closeThemeDetails = () => {
    setSelectedTheme(null);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    
    return stars;
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">AI Theme Generator</h1>
            <nav className="ml-8 hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Themes</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Templates</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
            </nav>
          </div>
          
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Theme Generation ✨</h1>
          <p className="text-lg mb-8 opacity-90">
            Describe your business to create unique themes with personalized content
          </p>
          
          <form onSubmit={handleGenerateThemes} className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. modern handmade jewelry, organic skincare, tech gadgets..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              type="submit"
              disabled={isGenerating}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : "Generate themes"}
            </button>
          </form>
          {error && <p className="text-red-200 mt-4">{error}</p>}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section - Only show after generating themes */}
        {hasGenerated && (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Templates</h2>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleFilter("all")} 
                  className={`px-4 py-2 rounded-md ${filter === "all" ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-700"} hover:bg-gray-200 transition-colors`}
                >
                  All Themes
                </button>
                <button 
                  onClick={() => handleFilter("free")} 
                  className={`px-4 py-2 rounded-md ${filter === "free" ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-700"} hover:bg-gray-200 transition-colors`}
                >
                  Free
                </button>
                <button 
                  onClick={() => handleFilter("premium")} 
                  className={`px-4 py-2 rounded-md ${filter === "premium" ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-700"} hover:bg-gray-200 transition-colors`}
                >
                  Premium
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-8 max-w-3xl">
              {filteredThemes.length > 0 
                ? "AI-generated themes based on your prompt. All themes are mobile-optimized and include support."
                : "No themes found matching your criteria."}
            </p>
          </>
        )}

        {/* Theme Cards Grid - Only show after generating themes */}
        {hasGenerated && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThemes.map((theme) => (
              <div
                key={theme.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={theme.image}
                    alt={theme.name}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => openThemeDetails(theme)}
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-semibold shadow-sm">
                    {theme.price}
                  </div>
                  {theme.tags.includes("AI Generated") && (
                    <div className="absolute top-3 left-3 bg-indigo-100 text-indigo-700 rounded-full px-2 py-1 text-xs font-semibold shadow-sm">
                      AI Generated
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 
                      className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-indigo-600"
                      onClick={() => openThemeDetails(theme)}
                    >
                      {theme.name}
                    </h3>
                    <div className="flex items-center">
                      {renderStars(theme.rating)}
                      <span className="ml-1 text-sm text-gray-500">({theme.rating})</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3">by {theme.author}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{theme.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {theme.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
                      onClick={() => openThemeDetails(theme)}
                    >
                      Preview & Add
                    </button>
                    <button className="text-gray-500 hover:text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!hasGenerated && !isGenerating && (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No themes yet</h3>
            <p className="text-gray-500">Enter a description of your business to generate custom themes.</p>
          </div>
        )}

        {isGenerating && (
          <div className="text-center py-12">
            <svg className="animate-spin h-12 w-12 mx-auto text-indigo-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Generating themes</h3>
            <p className="text-gray-500">Analyzing your prompt and creating custom themes...</p>
          </div>
        )}
      </div>

      {/* Theme Detail Modal */}
      {selectedTheme && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={closeThemeDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={selectedTheme.image} alt={selectedTheme.name} className="w-full h-64 object-cover" />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTheme.name}</h2>
                  <p className="text-gray-500">by {selectedTheme.author}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold">{selectedTheme.price}</p>
                  <div className="flex items-center justify-end mt-1">
                    {renderStars(selectedTheme.rating)}
                    <span className="ml-1 text-sm text-gray-500">({selectedTheme.rating})</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedTheme.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedTheme.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex-1">
                  Add to Store
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex-1">
                  Live Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
    </div>
  );
};

export default ThemeStore;