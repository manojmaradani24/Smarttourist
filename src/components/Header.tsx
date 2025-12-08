import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Settings,
  ChevronDown,
  Globe,
  Edit3,
  LogOut,
  User,
  CreditCard,
  HelpCircle,
  FileText,
  Shield,
  Languages,
  MapPin,
  MessageCircle,
  Send,
  X,
  Star,
  Heart,
  Share2,
  Calendar,
  Map,
  Clock,
  Eye,
  ChevronLeft,
  ChevronRight,
  Filter,
  Sparkles,
  Camera,
  Mail
} from "lucide-react";

// Move translations outside to prevent recreation
const translations = {
  EN: {
    searchPlaceholder: "Search destinations, hotels, activities...",
    editProfile: "Edit Profile",
    profile: "Profile",
    billing: "Bookings",
    settings: "Settings",
    help: "Help & Support",
    documentation: "Travel Guides",
    privacy: "Privacy Policy",
    signOut: "Sign out",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    businessName: "Travel Agency",
    businessType: "Travel Style",
    cancel: "Cancel",
    save: "Save Changes",
    pricing: "Packages",
    features: "Destinations",
    successStories: "Travel Stories",
    demo: "Virtual Tour",
    searchOnMap: "Search on Google Maps",
    sendFeedback: "Send Feedback",
    feedback: "Feedback",
    feedbackSubject: "Subject",
    feedbackMessage: "Your Message",
    feedbackType: "Type",
    feedbackTypes: {
      general: "General Feedback",
      bug: "Bug Report",
      feature: "Feature Request",
      support: "Support Request"
    },
    sending: "Sending...",
    send: "Send Message",
    feedbackSuccess: "Thank you! Your feedback has been sent successfully.",
    feedbackError: "Failed to send feedback. Please try again.",
    contactUs: "Contact Us",
    needHelp: "Need help? Send us a message",
    travelExperiences: "Travel Experiences",
    travelerStories: "Traveler Stories & Reviews",
    readFullStory: "Read Full Story",
    duration: "Duration",
    cost: "Approx Cost",
    highlights: "Trip Highlights",
    rating: "Rating",
    likes: "Likes",
    location: "Location",
    date: "Travel Date",
    travelerReviews: "What travelers are saying",
    shareExperience: "Share your experience",
    featuredStories: "Featured Travel Stories",
    notifications: "Notifications",
    recentEmails: "Recent Emails",
    markAllRead: "Mark all as read",
    viewAll: "View all notifications"
  },
  HI: {
    searchPlaceholder: "गंतव्य, होटल, गतिविधियाँ खोजें...",
    editProfile: "प्रोफाइल संपादित करें",
    profile: "प्रोफाइल",
    billing: "बुकिंग",
    settings: "सेटिंग्स",
    help: "सहायता और समर्थन",
    documentation: "यात्रा गाइड",
    privacy: "गोपनीयता नीति",
    signOut: "साइन आउट",
    fullName: "पूरा नाम",
    email: "ईमेल पता",
    phone: "फ़ोन नंबर",
    businessName: "ट्रैवल एजेंसी",
    businessType: "यात्रा शैली",
    cancel: "रद्द करें",
    save: "परिवर्तन सहेजें",
    pricing: "पैकेज",
    features: "गंतव्य",
    successStories: "यात्रा कहानियां",
    demo: "वर्चुअल टूर",
    searchOnMap: "Google Maps पर खोजें",
    sendFeedback: "प्रतिक्रिया भेजें",
    feedback: "प्रतिक्रिया",
    feedbackSubject: "विषय",
    feedbackMessage: "आपका संदेश",
    feedbackType: "प्रकार",
    feedbackTypes: {
      general: "सामान्य प्रतिक्रिया",
      bug: "बग रिपोर्ट",
      feature: "फीचर अनुरोध",
      support: "सहायता अनुरोध"
    },
    sending: "भेज रहे हैं...",
    send: "संदेश भेजें",
    feedbackSuccess: "धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक भेज दी गई है।",
    feedbackError: "प्रतिक्रिया भेजने में विफल। कृपया पुनः प्रयास करें।",
    contactUs: "हमसे संपर्क करें",
    needHelp: "मदद चाहिए? हमें एक संदेश भेजें",
    travelExperiences: "यात्रा अनुभव",
    travelerStories: "यात्री कहानियां और समीक्षाएं",
    readFullStory: "पूरी कहानी पढ़ें",
    duration: "अवधि",
    cost: "अनुमानित लागत",
    highlights: "यात्रा के मुख्य आकर्षण",
    rating: "रेटिंग",
    likes: "लाइक्स",
    location: "स्थान",
    date: "यात्रा तिथि",
    travelerReviews: "यात्री क्या कह रहे हैं",
    shareExperience: "अपना अनुभव साझा करें",
    featuredStories: "फीचर्ड ट्रैवल स्टोरीज",
    notifications: "सूचनाएं",
    recentEmails: "हाल की ईमेल",
    markAllRead: "सभी को पढ़ा हुआ चिह्नित करें",
    viewAll: "सभी सूचनाएं देखें"
  },
  TA: {
    searchPlaceholder: "இலக்குகள், ஹோட்டல்கள், செயல்பாடுகளைத் தேடு...",
    editProfile: "சுயவிவரத்தைத் திருத்து",
    profile: "சுயவிவரம்",
    billing: "முன்பதிவுகள்",
    settings: "அமைப்புகள்",
    help: "உதவி & ஆதரவு",
    documentation: "பயண வழிகாட்டிகள்",
    privacy: "தனியுரிமைக் கொள்கை",
    signOut: "வெளியேறு",
    fullName: "முழு பெயர்",
    email: "மின்னஞ்சல் முகவரி",
    phone: "தொலைபேசி எண்",
    businessName: "பயண முகவர்",
    businessType: "பயண பாணி",
    cancel: "ரத்துசெய்",
    save: "மாற்றங்களை சேமிக்கவும்",
    pricing: "தொகுப்புகள்",
    features: "இலக்குகள்",
    successStories: "பயணக் கதைகள்",
    demo: "மெய்நிகர் பயணம்",
    searchOnMap: "Google Maps இல் தேடு",
    sendFeedback: "கருத்தை அனுப்பவும்",
    feedback: "கருத்து",
    feedbackSubject: "பொருள்",
    feedbackMessage: "உங்கள் செய்தி",
    feedbackType: "வகை",
    feedbackTypes: {
      general: "பொது கருத்து",
      bug: "பிழை அறிக்கை",
      feature: "அம்ச கோரிக்கை",
      support: "ஆதரவு கோரிக்கை"
    },
    sending: "அனுப்புகிறது...",
    send: "செய்தியை அனுப்பவும்",
    feedbackSuccess: "நன்றி! உங்கள் கருத்து வெற்றிகரமாக அனுப்பப்பட்டது.",
    feedbackError: "கருத்தை அனுப்ப முடியவில்லை. தயவு செய்து மீண்டும் முயற்சிக்கவும்.",
    contactUs: "எங்களை தொடர்பு கொள்ள",
    needHelp: "உதவி தேவையா? எங்களுக்கு ஒரு செய்தியை அனுப்புங்கள்",
    travelExperiences: "பயண அனுபவங்கள்",
    travelerStories: "பயணி கதைகள் & மதிப்புரைகள்",
    readFullStory: "முழு கதையையும் படிக்கவும்",
    duration: "கால அளவு",
    cost: "ஏறத்தாழ செலவு",
    highlights: "பயண முன்னணி",
    rating: "மதிப்பீடு",
    likes: "லைக்குகள்",
    location: "இடம்",
    date: "பயண தேதி",
    travelerReviews: "பயணிகள் என்ன சொல்கிறார்கள்",
    shareExperience: "உங்கள் அனுபவத்தைப் பகிரவும்",
    featuredStories: "குறிப்பிடப்பட்ட பயணக் கதைகள்",
    notifications: "அறிவிப்புகள்",
    recentEmails: "சமீபத்திய மின்னஞ்சல்கள்",
    markAllRead: "அனைத்தையும் படித்ததாக குறிக்கவும்",
    viewAll: "அனைத்து அறிவிப்புகளையும் காண்க"
  }
};

// Enhanced countries list with 40+ countries
const countries = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "PE", name: "Peru", flag: "🇵🇪" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" }
];

const Header = ({ isDashboard = false }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isTravelStoriesOpen, setIsTravelStoriesOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [feedback, setFeedback] = useState({
    subject: "",
    message: "",
    type: "general"
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  
  const profileDropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const feedbackModalRef = useRef(null);
  const travelStoriesModalRef = useRef(null);
  const notificationsDropdownRef = useRef(null);
  const feedbackSubjectRef = useRef(null);
  const feedbackMessageRef = useRef(null); // Added ref for message textarea

  // Profile details state
  const [profile, setProfile] = useState({
    name: "user",
    email: "user@gmail.com",
    phone: "+91 xxxxxxxxxx",
    businessName: "Travel Explorers",
    businessType: "Adventure"
  });

  const [editProfile, setEditProfile] = useState(profile);

  // Enhanced Travel Stories Data with beautiful content
  const travelStories = useMemo(() => [
    {
      id: 1,
      title: "Magical Kerala Backwaters",
      author: "Priya Sharma",
      location: "Alleppey, Kerala",
      duration: "4 Days",
      rating: 4.8,
      likes: 234,
      views: 1500,
      image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop",
      story: "The houseboat experience in Kerala's backwaters was absolutely magical. Waking up to the sound of water gently lapping against the boat and watching the sunrise over the palm-fringed canals was an unforgettable experience. The local cuisine prepared by our personal chef was incredible - fresh fish caught from the backwaters, traditional appam with stew, and the most flavorful vegetarian dishes. We spent our days cruising through narrow canals, visiting local villages, and watching the vibrant birdlife. The evenings were spent on the deck, sipping coconut water and watching the stars reflect on the calm waters. This journey taught me the true meaning of peace and connection with nature.",
      highlights: ["Luxury Houseboat Stay", "Traditional Kerala Cuisine", "Village Life Experience", "Sunset Cruise", "Bird Watching"],
      date: "March 2024",
      cost: "₹15,000",
      category: "Relaxation",
      difficulty: "Easy",
      bestSeason: "September to March",
      tags: ["backwaters", "houseboat", "ayurveda", "nature"],
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      gallery: [
        "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545567147-6c6c9e27d2d6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578885445663-eae58ce7d1e8?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Himalayan Adventure in Ladakh",
      author: "Rahul Verma",
      location: "Leh, Ladakh",
      duration: "7 Days",
      rating: 4.9,
      likes: 189,
      views: 1200,
      image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&h=600&fit=crop",
      story: "From challenging mountain passes to serene monasteries, Ladakh was a journey of a lifetime. The Pangong Lake's changing colors throughout the day - from deep blue to turquoise to emerald green - left me speechless. The warm hospitality of the locals in remote villages, the spiritual chants echoing through ancient monasteries, and the breathtaking views from Khardung La pass made this adventure truly special. We rode through some of the highest motorable roads in the world, camped under the clearest night skies, and experienced the unique blend of Tibetan and Indian cultures. This trip challenged me physically but rewarded me with memories that will last forever.",
      highlights: ["Pangong Lake", "Khardung La Pass", "Ancient Monasteries", "Magnetic Hill", "Local Homestays"],
      date: "June 2024",
      cost: "₹25,000",
      category: "Adventure",
      difficulty: "Challenging",
      bestSeason: "May to September",
      tags: ["himalayas", "adventure", "biking", "budget"],
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      gallery: [
        "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464822759847-df0a6a516e99?w=800&h=600&fit=crop"
      ]
    }
  ], []);

  // Mock recent emails/notifications
  const recentEmails = useMemo(() => [
    {
      id: 1,
      from: "Travel Support",
      subject: "Your booking confirmation",
      preview: "Your trip to Goa has been confirmed. Check your itinerary...",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      from: "SmartTourist Updates",
      subject: "New features available",
      preview: "We've added new destination guides and travel tips...",
      time: "1 day ago",
      read: true
    },
    {
      id: 3,
      from: "Payment Success",
      subject: "Payment received for your booking",
      preview: "Your payment of ₹25,000 for Ladakh trip has been processed...",
      time: "2 days ago",
      read: true
    }
  ], []);

  const unreadCount = recentEmails.filter(email => !email.read).length;

  // Get unique categories
  const categories = [...new Set(travelStories.map(story => story.category))];

  // Load profile image from localStorage and listen for changes
  useEffect(() => {
    const savedProfileImage = localStorage.getItem('profileImage');
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }

    const handleProfileImageChange = (event) => {
      if (event.detail && event.detail.profileImage) {
        setProfileImage(event.detail.profileImage);
        localStorage.setItem('profileImage', event.detail.profileImage);
      }
    };

    window.addEventListener('profileImageChanged', handleProfileImageChange);

    return () => {
      window.removeEventListener('profileImageChanged', handleProfileImageChange);
    };
  }, []);

  // Get user data from localStorage on component mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserEmail(user.email);
        setProfile(prev => ({
          ...prev,
          name: user.name || prev.name,
          email: user.email || prev.email
        }));
        setEditProfile(prev => ({
          ...prev,
          name: user.name || prev.name,
          email: user.email || prev.email
        }));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  // Language options with translations
  const languages = [
    { code: "EN", name: "English", nativeName: "English" },
    { code: "HI", name: "Hindi", nativeName: "हिंदी" },
    { code: "TA", name: "Tamil", nativeName: "தமிழ்" }
  ];

  // Get current translations
  const t = translations[currentLanguage];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
      if (notificationsDropdownRef.current && !notificationsDropdownRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
      if (feedbackModalRef.current && !feedbackModalRef.current.contains(event.target) && isFeedbackOpen) {
        setIsFeedbackOpen(false);
      }
      if (travelStoriesModalRef.current && !travelStoriesModalRef.current.contains(event.target) && isTravelStoriesOpen) {
        setIsTravelStoriesOpen(false);
        setSelectedStory(null);
        setCurrentImageIndex(0);
        setSearchTerm("");
        setSelectedCategory("all");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFeedbackOpen, isTravelStoriesOpen]);

  // Filter stories based on search and category
  const filteredStories = useMemo(() => travelStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }), [searchTerm, selectedCategory, travelStories]);

  // Render star ratings
  const renderStars = useCallback((rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  }, []);

  // Navigation for image gallery
  const nextImage = useCallback(() => {
    if (selectedStory?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === selectedStory.gallery.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedStory]);

  const prevImage = useCallback(() => {
    if (selectedStory?.gallery) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedStory.gallery.length - 1 : prev - 1
      );
    }
  }, [selectedStory]);

  // Open Google Maps with search query
  const openGoogleMaps = useCallback((query = "") => {
    const searchTerm = query || searchQuery;
    if (searchTerm.trim()) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm + ' India')}`;
      window.open(mapsUrl, '_blank');
    } else {
      const mapsUrl = `https://www.google.com/maps?q=India`;
      window.open(mapsUrl, '_blank');
    }
  }, [searchQuery]);

  // Handle search with Enter key
  const handleSearchKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      openGoogleMaps();
    }
  }, [openGoogleMaps]);

  // Handle search button click
  const handleSearchClick = useCallback(() => {
    openGoogleMaps();
  }, [openGoogleMaps]);

  // Handle feedback form submission
  const handleFeedbackSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("");

    try {
      const userData = localStorage.getItem('user');
      let userName = profile.name;
      let userEmail = profile.email;

      if (userData) {
        try {
          const user = JSON.parse(userData);
          userName = user.name || userName;
          userEmail = user.email || userEmail;
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }

      const response = await fetch("http://localhost:5000/api/email/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          subject: feedback.subject,
          message: feedback.message,
          type: feedback.type,
          language: currentLanguage
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSendStatus("success");
        setFeedback({
          subject: "",
          message: "",
          type: "general"
        });
        
        setTimeout(() => {
          setIsFeedbackOpen(false);
          setSendStatus("");
        }, 2000);
      } else {
        throw new Error(data.message || 'Failed to send feedback');
      }
      
    } catch (error) {
      console.error("Error sending feedback:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  }, [feedback, profile, currentLanguage]);

  // Handle feedback subject change
  const handleSubjectChange = useCallback((e) => {
    setFeedback(prev => ({
      ...prev,
      subject: e.target.value
    }));
  }, []);

  // FIXED: Handle feedback message change - direct function without useCallback dependency issues
  const handleMessageChange = (e) => {
    setFeedback(prev => ({
      ...prev,
      message: e.target.value
    }));
  };

  // Handle feedback type change
  const handleTypeChange = useCallback((type) => {
    setFeedback(prev => ({
      ...prev,
      type
    }));
  }, []);

  // Popular destinations for quick search
  const popularDestinations = useMemo(() => [
    "Goa beaches",
    "Taj Mahal Agra",
    "Kerala backwaters",
    "Jaipur palaces",
    "Ladakh mountains",
    "Varanasi ghats"
  ], []);

  // API call for language change
  const handleLanguageChange = useCallback(async (langCode) => {
    try {
      await fetch("http://localhost:5000/api/language", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: langCode }),
      });
      setCurrentLanguage(langCode);
    } catch (error) {
      console.error("Error updating language:", error);
    }
  }, []);

  // API call for profile update
  const handleProfileSave = useCallback(async () => {
    try {
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
  }, [editProfile]);

  // Handle country change
  const handleCountryChange = useCallback((countryCode) => {
    setSelectedCountry(countryCode);
    setIsCountryDropdownOpen(false);
  }, []);

  // Handle logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  }, []);

  // Feedback Types for Modal
  const feedbackTypes = useMemo(() => [
    { value: "general", label: t?.feedbackTypes?.general || "General Feedback", icon: MessageCircle, color: "blue" },
    { value: "bug", label: t?.feedbackTypes?.bug || "Bug Report", icon: HelpCircle, color: "red" },
    { value: "feature", label: t?.feedbackTypes?.feature || "Feature Request", icon: Sparkles, color: "purple" },
    { value: "support", label: t?.feedbackTypes?.support || "Support", icon: Shield, color: "green" }
  ], [t]);

  // Get color classes for feedback types
  const getColorClasses = useCallback((color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      red: "from-red-500 to-red-600",
      purple: "from-purple-500 to-purple-600", 
      green: "from-green-500 to-green-600"
    };
    return colors[color] || colors.blue;
  }, []);

  // Focus on subject input when modal opens
  useEffect(() => {
    if (isFeedbackOpen && feedbackSubjectRef.current) {
      setTimeout(() => {
        feedbackSubjectRef.current?.focus();
      }, 100);
    }
  }, [isFeedbackOpen]);

  // UPDATED: Enhanced Feedback Button without motion and with text
  const FeedbackButton = useCallback(() => (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsFeedbackOpen(true)}
        className="
          relative bg-gradient-to-br from-blue-600 to-purple-600 
          text-white px-6 py-4 rounded-2xl shadow-2xl 
          transition-all duration-300
          hover:from-blue-700 hover:to-purple-700 hover:shadow-3xl
          flex items-center justify-center space-x-3
          min-w-[200px]
        "
        title={t?.sendFeedback || "Share your feedback"}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-semibold text-sm">
          {t?.needHelp || "Need help?"}
        </span>
      </button>
    </div>
  ), [t]);

  // Notifications Dropdown Component
  const NotificationsDropdown = useCallback(() => (
    <div 
      ref={notificationsDropdownRef}
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50 transition-opacity duration-300"
    >
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800 dark:text-white">
            {t?.notifications || "Notifications"}
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {unreadCount} unread
          </span>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {recentEmails.length > 0 ? (
          <div className="py-2">
            {recentEmails.map((email) => (
              <div
                key={email.id}
                className={`px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-l-2 ${
                  email.read 
                    ? 'border-transparent' 
                    : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                        {email.from}
                      </p>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {email.time}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      {email.subject}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                      {email.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center">
            <Mail className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No recent emails
            </p>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex justify-between">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            {t?.markAllRead || "Mark all as read"}
          </button>
          <button className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">
            {t?.viewAll || "View all"}
          </button>
        </div>
      </div>
    </div>
  ), [recentEmails, t, unreadCount]);

  // Beautiful Full-Screen Feedback Modal Component
  const FeedbackModal = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-0">
        <div 
          ref={feedbackModalRef}
          className="bg-gradient-to-br from-blue-50 to-purple-50 w-full h-full overflow-hidden transition-all duration-500 rounded-none"
        >
          <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-6 px-8 shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    {t?.sendFeedback || "Share Your Feedback"}
                  </h2>
                  <p className="text-blue-200 mt-2">
                    We'd love to hear your thoughts and suggestions
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFeedbackOpen(false)}
                className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-80px)]">
            {sendStatus === "success" ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center max-w-2xl px-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {t?.feedbackSuccess || "Your feedback has been received. We appreciate you taking the time to help us improve!"}
                  </p>
                  <button
                    onClick={() => setIsFeedbackOpen(false)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                  >
                    Continue Exploring
                  </button>
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                        Tell Us What's On Your Mind
                      </h3>
                      
                      <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                        <div>
                          <label className="block text-lg font-semibold text-gray-800 mb-4">
                            {t?.feedbackType || "What type of feedback do you have?"}
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {feedbackTypes.map((type) => {
                              const IconComponent = type.icon;
                              const isSelected = feedback.type === type.value;
                              return (
                                <div
                                  key={type.value}
                                  onClick={() => handleTypeChange(type.value)}
                                  className={`cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 transform hover:scale-105 ${
                                    isSelected 
                                      ? `border-${type.color}-500 bg-gradient-to-br ${getColorClasses(type.color)} text-white shadow-lg` 
                                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                                  }`}
                                >
                                  <div className="flex flex-col items-center text-center space-y-2">
                                    <IconComponent className={`h-6 w-6 ${isSelected ? "text-white" : `text-${type.color}-500`}`} />
                                    <span className={`text-sm font-medium ${isSelected ? "text-white" : "text-gray-700"}`}>
                                      {type.label}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="block text-lg font-semibold text-gray-800 mb-3">
                            {t?.feedbackSubject || "Subject"}
                          </label>
                          <input
                            ref={feedbackSubjectRef}
                            type="text"
                            value={feedback.subject}
                            onChange={handleSubjectChange}
                            placeholder={t?.feedbackSubject || "Brief summary of your feedback"}
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-800 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 focus:outline-none"
                            required
                            autoFocus
                          />
                        </div>

                        <div>
                          <label className="block text-lg font-semibold text-gray-800 mb-3">
                            {t?.feedbackMessage || "Your Message"}
                          </label>
                          <textarea
                            ref={feedbackMessageRef}
                            value={feedback.message}
                            onChange={handleMessageChange}
                            placeholder="Please share your detailed feedback, suggestions, or issues..."
                            rows="6"
                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 bg-white text-gray-800 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none focus:outline-none"
                            required
                          />
                        </div>

                        {sendStatus === "error" && (
                          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                            <p className="text-red-600 font-medium">
                              {t?.feedbackError || "There was an error sending your feedback. Please try again."}
                            </p>
                          </div>
                        )}

                        <div className="flex justify-end space-x-4 pt-4">
                          <button
                            type="button"
                            onClick={() => setIsFeedbackOpen(false)}
                            className="px-8 py-4 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                          >
                            {t?.cancel || "Cancel"}
                          </button>
                          <button
                            type="submit"
                            disabled={isSending}
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                          >
                            {isSending ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                <span>{t?.sending || "Sending..."}</span>
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5" />
                                <span>{t?.send || "Send Feedback"}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg p-6">
                      <h4 className="text-xl font-bold mb-4">Why Your Feedback Matters</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <span>Helps us improve your experience</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <span>Guides our product development</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <span>Creates features you actually want</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-3">What to Expect</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Quick Response</p>
                            <p className="text-sm text-gray-600">We typically reply within 24 hours</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Your Ideas Matter</p>
                            <p className="text-sm text-gray-600">Many features start as user suggestions</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg p-6">
                      <h4 className="text-lg font-bold mb-3">Need Immediate Help?</h4>
                      <p className="text-purple-100 mb-4">
                        For urgent issues, contact our support team directly
                      </p>
                      <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                        Contact Support
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

  // Beautiful Full-Screen Travel Stories Modal
  const TravelStoriesModal = useCallback(() => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-0">
        <div 
          ref={travelStoriesModalRef}
          className="bg-gradient-to-br from-blue-50 to-purple-50 w-full h-full overflow-hidden transition-all duration-500 rounded-none"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-6 px-8 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  {selectedStory ? selectedStory.title : "Travel Stories"}
                </h2>
                <p className="text-blue-200 mt-2">
                  {selectedStory ? "Discover amazing travel experiences" : "Explore captivating journeys from around the world"}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsTravelStoriesOpen(false);
                  setSelectedStory(null);
                  setCurrentImageIndex(0);
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-80px)]">
            {selectedStory ? (
              <div className="p-0">
                <div className="relative">
                  {/* Hero Image Gallery */}
                  <div className="h-96 w-full relative overflow-hidden">
                    <img 
                      src={selectedStory.gallery ? selectedStory.gallery[currentImageIndex] : selectedStory.image} 
                      alt={selectedStory.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {selectedStory.gallery && selectedStory.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {selectedStory.gallery.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                          {selectedStory.category}
                        </span>
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                          {selectedStory.difficulty}
                        </span>
                      </div>
                      <h1 className="text-4xl font-bold mb-4">{selectedStory.title}</h1>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            {selectedStory.authorAvatar ? (
                              <img 
                                src={selectedStory.authorAvatar} 
                                alt={selectedStory.author}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <User className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm text-blue-200">Author</p>
                            <p className="font-semibold">{selectedStory.author}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {renderStars(selectedStory.rating)}
                          </div>
                          <span className="text-yellow-300 font-semibold">
                            {selectedStory.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-6xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
                            Travel Experience
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                            {selectedStory.story}
                          </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8">
                          <h4 className="text-2xl font-bold text-gray-800 mb-6">Journey Highlights</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedStory.highlights.map((highlight, index) => (
                              <div 
                                key={index}
                                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow"
                              >
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-sm">{index + 1}</span>
                                </div>
                                <span className="text-gray-700 font-medium">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg p-6">
                          <h4 className="text-xl font-bold mb-6">Trip Details</h4>
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <MapPin className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-blue-100 text-sm">Location</p>
                                <p className="font-semibold">{selectedStory.location}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <Clock className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-blue-100 text-sm">Duration</p>
                                <p className="font-semibold">{selectedStory.duration}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <Calendar className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-blue-100 text-sm">Best Season</p>
                                <p className="font-semibold">{selectedStory.bestSeason}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <CreditCard className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-blue-100 text-sm">Cost</p>
                                <p className="font-semibold text-xl">{selectedStory.cost}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <h4 className="text-lg font-bold text-gray-800 mb-4">Tags</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedStory.tags?.map((tag, index) => (
                              <span 
                                key={index}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6">
                          <div className="flex items-center justify-between mb-4">
                            <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors">
                              <Heart className="h-6 w-6" />
                              <span className="font-semibold">{selectedStory.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
                              <Share2 className="h-6 w-6" />
                              <span className="font-semibold">Share</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600 transition-colors">
                              <Eye className="h-6 w-6" />
                              <span className="font-semibold">{selectedStory.views || 234}</span>
                            </button>
                          </div>
                          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                            Book Similar Experience
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Travel Stories</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover incredible journeys and get inspired for your next adventure
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search destinations, authors, or experiences..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all focus:outline-none"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Filter className="h-5 w-5 text-gray-500" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all focus:outline-none"
                      >
                        <option value="all">All Categories</option>
                        {categories.map(category => (
                          <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredStories.map((story) => (
                    <div 
                      key={story.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
                      onClick={() => {
                        setSelectedStory(story);
                        setCurrentImageIndex(0);
                      }}
                    >
                      <div className="h-56 relative overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          <span className="bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                            {story.category}
                          </span>
                          <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {story.difficulty}
                          </span>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h4 className="font-bold text-xl mb-2">{story.title}</h4>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {renderStars(story.rating)}
                            </div>
                            <span className="bg-white bg-opacity-20 px-2 py-1 rounded-lg text-sm font-semibold">
                              {story.cost}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>{story.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{story.duration}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                          {story.story}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center overflow-hidden">
                              {story.authorAvatar ? (
                                <img 
                                  src={story.authorAvatar} 
                                  alt={story.author}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-white font-bold text-sm">
                                  {story.author.charAt(0)}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-600 font-medium">
                              By {story.author}
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors">
                              <Heart className="h-4 w-4" />
                              <span className="text-sm font-medium">{story.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600 transition-colors">
                              <Eye className="h-4 w-4" />
                              <span className="text-sm font-medium">{story.views}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredStories.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No stories found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search or filter to find more travel stories
                    </p>
                    <button 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}

                <div className="text-center mt-16">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4">Ready to Share Your Story?</h3>
                    <p className="text-blue-100 mb-6">
                      Join our community of travelers and inspire others with your adventures
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Share Your Journey
                    </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
  }, [selectedStory, currentImageIndex, searchTerm, selectedCategory, filteredStories, categories, renderStars, nextImage, prevImage]);

  if (isDashboard) {
    return (
      <>
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ST</span>
                </div>
                <span className="font-bold text-xl text-slate-800 dark:text-white">
                  SmartTourist
                </span>
              </Link>

              <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-96 transition-colors duration-300 relative">
                <Search className="h-4 w-4 text-slate-400 mr-2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  placeholder={t.searchPlaceholder}
                  className="bg-transparent outline-none text-sm flex-1 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500"
                />
                <button
                  onClick={handleSearchClick}
                  className="p-1 text-slate-400 hover:text-indigo-600 transition-colors duration-300"
                  title={t.searchOnMap}
                >
                  <MapPin className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Country Selector */}
              <div className="relative" ref={countryDropdownRef}>
                <button
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex items-center space-x-2 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
                  aria-haspopup="true"
                  aria-expanded={isCountryDropdownOpen}
                >
                  <span className="text-lg">
                    {countries.find(c => c.code === selectedCountry)?.flag}
                  </span>
                  <span className="text-sm font-medium">
                    {countries.find(c => c.code === selectedCountry)?.code}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isCountryDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 max-h-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 transition-opacity duration-300 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Select Country
                      </p>
                    </div>
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => handleCountryChange(country.code)}
                        className={`flex items-center w-full px-4 py-2 text-sm ${
                          selectedCountry === country.code 
                            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300" 
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        <span className="text-lg mr-3">{country.flag}</span>
                        <span className="flex-1 text-left">{country.name}</span>
                        <span className="text-xs text-slate-400">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300 relative"
                >
                  <Mail className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {isNotificationsOpen && <NotificationsDropdown />}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => handleLanguageChange(currentLanguage === "EN" ? "HI" : currentLanguage === "HI" ? "TA" : "EN")}
                  className="flex items-center space-x-1 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
                >
                  <Languages className="h-5 w-5" />
                  <span className="text-sm font-medium">{currentLanguage}</span>
                </button>
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
                  aria-haspopup="true"
                  aria-expanded={isProfileOpen}
                >
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img 
                        src={profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-indigo-600 dark:text-indigo-300 font-semibold text-sm">
                        {profile.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 transition-opacity duration-300">
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center overflow-hidden">
                          {profileImage ? (
                            <img 
                              src={profileImage} 
                              alt="Profile" 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-indigo-600 dark:text-indigo-300 font-semibold text-lg">
                              {profile.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-slate-800 dark:text-white">
                            {profile.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {userEmail || profile.email}
                          </p>
                        </div>
                      </div>
                      {userEmail && (
                        <div className="mt-1">
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Logged In
                          </span>
                        </div>
                      )}
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
                      <button 
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        {t.signOut}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:hidden mt-4">
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 transition-colors duration-300">
              <Search className="h-4 w-4 text-slate-400 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                placeholder={t.searchPlaceholder}
                className="bg-transparent outline-none text-sm flex-1 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500"
              />
              <button
                onClick={handleSearchClick}
                className="p-1 text-slate-400 hover:text-indigo-600 transition-colors duration-300"
                title={t.searchOnMap}
              >
                <MapPin className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {popularDestinations.map((destination, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(destination);
                    setTimeout(() => openGoogleMaps(destination), 100);
                  }}
                  className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors duration-300"
                >
                  {destination}
                </button>
              ))}
            </div>
          </div>

          {isEditProfileOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg w-full max-w-md p-6 transition-colors duration-300">
                <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">{t.editProfile}</h2>

                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-slate-600 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg mx-auto">
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-10 h-10 text-gray-400 dark:text-slate-400" />
                      )}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer">
                      <Camera className="w-3 h-3" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">
                    Profile photo updated in settings
                  </p>
                </div>

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
                      className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Adventure">Adventure</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Cultural">Cultural</option>
                      <option value="Family">Family</option>
                      <option value="Business">Business</option>
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

        <FeedbackButton />
        {isFeedbackOpen && <FeedbackModal />}
        {isTravelStoriesOpen && <TravelStoriesModal />}
      </>
    );
  }

  // Landing Page Header
  return (
    <>
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ST</span>
              </div>
              <span className="font-bold text-2xl text-slate-800 dark:text-white">
                SmartTourist
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
              <button
                onClick={() => setIsTravelStoriesOpen(true)}
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
              >
                {t.successStories}
              </button>
              <button
                onClick={() => openGoogleMaps("India tourist places")}
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300 flex items-center"
              >
                <MapPin className="h-4 w-4 mr-1" />
                {t.demo}
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 transition-colors duration-300">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  placeholder={t.searchPlaceholder}
                  className="bg-transparent outline-none text-sm w-48 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500"
                />
                <button
                  onClick={handleSearchClick}
                  className="p-1 text-slate-400 hover:text-indigo-600 transition-colors duration-300"
                  title={t.searchOnMap}
                >
                  <MapPin className="h-4 w-4" />
                </button>
              </div>

              {/* Country Selector for Landing Page */}
              <div className="relative" ref={countryDropdownRef}>
                <button
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  className="flex items-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300"
                  aria-haspopup="true"
                  aria-expanded={isCountryDropdownOpen}
                >
                  <span className="text-lg mr-1">
                    {countries.find(c => c.code === selectedCountry)?.flag}
                  </span>
                  {countries.find(c => c.code === selectedCountry)?.name}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {isCountryDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 max-h-80 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 transition-opacity duration-300 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Select Country
                      </p>
                    </div>
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => handleCountryChange(country.code)}
                        className={`flex items-center w-full px-4 py-2 text-sm ${
                          selectedCountry === country.code 
                            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300" 
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        <span className="text-lg mr-3">{country.flag}</span>
                        <span className="flex-1 text-left">{country.name}</span>
                        <span className="text-xs text-slate-400">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <FeedbackButton />
      {isFeedbackOpen && <FeedbackModal />}
      {isTravelStoriesOpen && <TravelStoriesModal />}
    </>
  );
};

export default Header;