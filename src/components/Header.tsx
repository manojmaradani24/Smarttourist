import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  Settings,
  ChevronDown,
  Globe,
  Edit3,
  Moon,
  Sun,
  LogOut,
  User,
  CreditCard,
  HelpCircle,
  FileText,
  Shield,
  Languages
} from "lucide-react";

const Header = ({ isDashboard = false }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const profileDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  // Profile details state
const [profile, setProfile] = useState({
  name: "Rahul Sharma",
  email: "rahul@example.com",
  phone: "+91 9876543210",
  businessName: "Sharma Enterprises",
  businessType: "Retail"
});

  const [editProfile, setEditProfile] = useState(profile);

  // Language options with translations
  const languages = [
    { code: "EN", name: "English", nativeName: "English" },
    { code: "HI", name: "Hindi", nativeName: "हिंदी" },
    { code: "TA", name: "Tamil", nativeName: "தமிழ்" }
  ];

  // Translations for UI elements
  const translations = {
    EN: {
      searchPlaceholder: "Search orders, products, automation...",
      editProfile: "Edit Profile",
      profile: "Profile",
      billing: "Billing",
      settings: "Settings",
      help: "Help & Support",
      documentation: "Documentation",
      privacy: "Privacy Policy",
      signOut: "Sign out",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      businessName: "Business Name",
      businessType: "Business Type",
      cancel: "Cancel",
      save: "Save Changes",
      pricing: "Pricing",
      features: "Features",
      successStories: "Success Stories",
      demo: "Demo"
    },
    HI: {
      searchPlaceholder: "ऑर्डर, उत्पाद, ऑटोमेशन खोजें...",
      editProfile: "प्रोफाइल संपादित करें",
      profile: "प्रोफाइल",
      billing: "बिलिंग",
      settings: "सेटिंग्स",
      help: "सहायता और समर्थन",
      documentation: "दस्तावेज़ीकरण",
      privacy: "गोपनीयता नीति",
      signOut: "साइन आउट",
      fullName: "पूरा नाम",
      email: "ईमेल पता",
      phone: "फ़ोन नंबर",
      businessName: "व्यवसाय का नाम",
      businessType: "व्यवसाय का प्रकार",
      cancel: "रद्द करें",
      save: "परिवर्तन सहेजें",
      pricing: "मूल्य निर्धारण",
      features: "विशेषताएं",
      successStories: "सफलता की कहानियां",
      demo: "डेमो"
    },
    TA: {
      searchPlaceholder: "ஆர்டர்கள், தயாரிப்புகள், ஆட்டோமேஷன் தேடல்...",
      editProfile: "சுயவிவரத்தைத் திருத்து",
      profile: "சுயவிவரம்",
      billing: "பில்லிங்",
      settings: "அமைப்புகள்",
      help: "உதவி & ஆதரவு",
      documentation: "ஆவணங்கள்",
      privacy: "தனியுரிமைக் கொள்கை",
      signOut: "வெளியேறு",
      fullName: "முழு பெயர்",
      email: "மின்னஞ்சல் முகவரி",
      phone: "தொலைபேசி எண்",
      businessName: "வணிகப் பெயர்",
      businessType: "வணிக வகை",
      cancel: "ரத்துசெய்",
      save: "மாற்றங்களை சேமிக்கவும்",
      pricing: "விலை நிர்ணயம்",
      features: "அம்சங்கள்",
      successStories: "வெற்றிக் கதைகள்",
      demo: "டெமோ"
    }
  };

  // Get current translations
  const t = translations[currentLanguage];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // API call for language change
  const handleLanguageChange = async (langCode) => {
    try {
      // Dummy API request (replace with your backend endpoint)
      await fetch("http://localhost:5000/api/language", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: langCode }),
      });
      setCurrentLanguage(langCode);
      setIsLanguageDropdownOpen(false);
    } catch (error) {
      console.error("Error updating language:", error);
    }
  };

  // API call for profile update
  const handleProfileSave = async () => {
    try {
      // Dummy API request (replace with your backend endpoint)
      await fetch("http://localhost:5000/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editProfile),
      });
      setProfile(editProfile);
      setIsEditProfileOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isDashboard) {
    return (
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4 transition-colors duration-300">
        <div className="flex items-center justify-between">
          {/* Logo + Search */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="font-bold text-xl text-slate-800 dark:text-white">
                SmartMerchant
              </span>
            </Link>

            <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-96 transition-colors duration-300">
              <Search className="h-4 w-4 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="bg-transparent outline-none text-sm flex-1 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
            </button>

            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
                aria-haspopup="true"
                aria-expanded={isLanguageDropdownOpen}
              >
                <Languages className="h-5 w-5" />
                <span className="text-sm font-medium">{currentLanguage}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 transition-opacity duration-300">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        currentLanguage === lang.code 
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300" 
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <span className="flex-1 text-left">{lang.nativeName}</span>
                      <span className="text-xs text-slate-400">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
                aria-haspopup="true"
                aria-expanded={isProfileOpen}
              >
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-300 font-semibold text-sm">
                    {profile.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 transition-opacity duration-300">
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                    <p className="font-semibold text-sm text-slate-800 dark:text-white">
                      {profile.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{profile.email}</p>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => {
                        setIsEditProfileOpen(true);
                        setIsProfileOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                    >
                      <User className="h-4 w-4 mr-2" />
                      {t.profile}
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      {t.billing}
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Settings className="h-4 w-4 mr-2" />
                      {t.settings}
                    </button>
                  </div>

                  <div className="py-1 border-t border-slate-100 dark:border-slate-700">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      {t.help}
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <FileText className="h-4 w-4 mr-2" />
                      {t.documentation}
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Shield className="h-4 w-4 mr-2" />
                      {t.privacy}
                    </button>
                  </div>

                  <div className="py-1 border-t border-slate-100 dark:border-slate-700">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <LogOut className="h-4 w-4 mr-2" />
                      {t.signOut}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Edit Modal */}
        {isEditProfileOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg w-full max-w-md p-6 transition-colors duration-300">
              <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">{t.editProfile}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t.fullName}
                  </label>
                  <input
                    type="text"
                    value={editProfile.name}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, name: e.target.value })
                    }
                    className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    value={editProfile.email}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, email: e.target.value })
                    }
                    className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    value={editProfile.phone}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, phone: e.target.value })
                    }
                    className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t.businessName}
                  </label>
                  <input
                    type="text"
                    value={editProfile.businessName}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, businessName: e.target.value })
                    }
                    className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {t.businessType}
                  </label>
                  <select
                    value={editProfile.businessType}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, businessType: e.target.value })
                    }
                    className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  >
                    <option value="Retail">Retail</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Service">Service</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsEditProfileOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-slate-600 text-slate-800 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-500 transition-colors duration-300"
                >
                  {t.cancel}
                </button>
                <button
                  onClick={handleProfileSave}
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300"
                >
                  {t.save}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    );
  }

  // Landing Page Header
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SM</span>
            </div>
            <span className="font-bold text-2xl text-slate-800 dark:text-white">
              SmartMerchant
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/pricing"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
            >
              {t.pricing}
            </Link>
            <a
              href="#features"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
            >
              {t.features}
            </a>
            <a
              href="#testimonials"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
            >
              {t.successStories}
            </a>
            <Link
              to="/dashboard"
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
            >
              {t.demo}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
                aria-haspopup="true"
                aria-expanded={isLanguageDropdownOpen}
              >
                <Globe className="h-4 w-4 mr-1" />
                {languages.find(lang => lang.code === currentLanguage)?.nativeName}
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 transition-opacity duration-300">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center w-full px-4 py-2 text-sm ${
                        currentLanguage === lang.code 
                          ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300" 
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <span className="flex-1 text-left">{lang.nativeName}</span>
                      <span className="text-xs text-slate-400">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;                                                                                                                                                 