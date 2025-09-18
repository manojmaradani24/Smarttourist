import React, { useState } from "react";

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

const themes: Theme[] = [
  {
    id: "1",
    name: "Horizon",
    author: "Shopify",
    image: "https://via.placeholder.com/400x250?text=Horizon+Theme",
    price: "Free",
    rating: 4.8,
    description: "A modern, minimalist theme perfect for fashion and lifestyle brands.",
    tags: ["Minimalist", "Fashion", "Responsive"]
  },
  {
    id: "2",
    name: "Savor",
    author: "Shopify",
    image: "https://via.placeholder.com/400x250?text=Savor+Theme",
    price: "$180",
    rating: 4.5,
    description: "Designed for food and beverage businesses with recipe integration.",
    tags: ["Food", "Recipe", "Warm Tones"]
  },
  {
    id: "3",
    name: "Atelier",
    author: "Shopify",
    image: "https://via.placeholder.com/400x250?text=Atelier+Theme",
    price: "$150",
    rating: 4.9,
    description: "Perfect for artisans and creators to showcase their craft.",
    tags: ["Artisan", "Portfolio", "Creative"]
  },
  {
    id: "4",
    name: "Expanse",
    author: "Shopify",
    image: "https://via.placeholder.com/400x250?text=Expanse+Theme",
    price: "Free",
    rating: 4.3,
    description: "Spacious design for stores with large product catalogs.",
    tags: ["Spacious", "Catalog", "Versatile"]
  },
  {
    id: "5",
    name: "Craft",
    author: "Shopify",
    image: "https://via.placeholder.com/400x250?text=Craft+Theme",
    price: "$120",
    rating: 4.7,
    description: "Handcrafted aesthetic for makers and small batch products.",
    tags: ["Handmade", "Artisanal", "Textured"]
  },
  {
    id: "6",
    name: "Streamline",
    author: "Shopify",
    image: "https://via.placeholder.com/400x250?text=Streamline+Theme",
    price: "$200",
    rating: 4.6,
    description: "Optimized for high-volume stores with advanced features.",
    tags: ["Efficient", "High-Volume", "Advanced"]
  },
];

const ThemeStore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredThemes, setFilteredThemes] = useState(themes);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [filter, setFilter] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const filtered = themes.filter(theme => 
      theme.name.toLowerCase().includes(query) || 
      theme.description.toLowerCase().includes(query) ||
      theme.tags.some(tag => tag.toLowerCase().includes(query))
    );
    setFilteredThemes(filtered);
  };

  const handleFilter = (filterType: string) => {
    setFilter(filterType);
    if (filterType === "all") {
      setFilteredThemes(themes);
    } else if (filterType === "free") {
      setFilteredThemes(themes.filter(theme => theme.price === "Free"));
    } else if (filterType === "premium") {
      setFilteredThemes(themes.filter(theme => theme.price !== "Free"));
    }
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Theme Store</h1>
            <nav className="ml-8 hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Themes</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Templates</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Your Themes
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Design your store in seconds ✨</h1>
          <p className="text-lg mb-8 opacity-90">
            Describe your business to create unique themes with personalized content
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. modern handmade jewelry, organic skincare, tech gadgets..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Generate themes
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Popular free themes</h2>
          
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
          Made with core features you can easily customize—no coding needed. All themes are mobile-optimized and include support.
        </p>

        {/* Theme Cards Grid */}
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

        {filteredThemes.length === 0 && (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No themes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
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
  );
};

export default ThemeStore;