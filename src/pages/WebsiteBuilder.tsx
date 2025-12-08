import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Camera, MapPin, Globe, Calendar, User, Mail, Phone, Lock, CreditCard, Edit2, Save, X } from "lucide-react";

interface ProfileData {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    nationality: string;
  };
  preferences: {
    travelTypes: string[];
    destinations: string[];
    budgetRange: string;
    travelFrequency: string;
    dietaryRestrictions: string[];
  };
  documents: {
    passportNumber: string;
    passportExpiry: string;
    visaInfo: string;
  };
  payment: {
    cardNumber: string;
    expiryDate: string;
    cardHolder: string;
  };
}

const ProfileSetup: React.FC = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const [editingSections, setEditingSections] = useState({
    personal: true,
    preferences: true,
    documents: true,
    payment: true
  });

  const [profileData, setProfileData] = useState<ProfileData>({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      nationality: ""
    },
    preferences: {
      travelTypes: [],
      destinations: [],
      budgetRange: "",
      travelFrequency: "",
      dietaryRestrictions: []
    },
    documents: {
      passportNumber: "",
      passportExpiry: "",
      visaInfo: ""
    },
    payment: {
      cardNumber: "",
      expiryDate: "",
      cardHolder: ""
    }
  });

  useEffect(() => {
    const savedProfileImage = localStorage.getItem('profileImage');
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []);

  const travelTypes = ["Adventure", "Beach", "Cultural", "Luxury", "Family", "Business", "Solo", "Group"];
  const popularDestinations = ["Goa", "Kerala", "Rajasthan", "Himachal", "Kashmir", "Andaman", "Sikkim", "Maharashtra"];
  const budgetRanges = ["Budget (Under ₹20k)", "Moderate (₹20k-₹50k)", "Premium (₹50k-₹1L)", "Luxury (₹1L+)"];
  const travelFrequencies = ["Rarely", "Once a year", "2-3 times a year", "Monthly", "Frequent traveler"];
  const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "No Restrictions"];

  const toggleSectionEdit = (section: keyof typeof editingSections) => {
    setEditingSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSaveSection = async (section: keyof typeof editingSections) => {
    setSaveStatus("saving");
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveStatus("saved");
      setEditingSections(prev => ({
        ...prev,
        [section]: false
      }));
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (error) {
      setSaveStatus("error");
    }
  };

  const handleCancelEdit = (section: keyof typeof editingSections) => {
    setEditingSections(prev => ({
      ...prev,
      [section]: false
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newProfileImage = e.target?.result as string;
        setProfileImage(newProfileImage);
        localStorage.setItem('profileImage', newProfileImage);
        window.dispatchEvent(new CustomEvent('profileImageChanged', {
          detail: { profileImage: newProfileImage }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (section: keyof ProfileData, field: string, value: any) => {
    setProfileData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayToggle = (section: keyof ProfileData, field: string, value: string) => {
    setProfileData(prev => {
      const currentArray = (prev[section] as any)[field] as string[];
      const updatedArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: updatedArray
        }
      };
    });
  };

  const handleSaveProfile = async () => {
    setSaveStatus("saving");
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSaveStatus("saved");
      setEditingSections({
        personal: false,
        preferences: false,
        documents: false,
        payment: false
      });
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (error) {
      setSaveStatus("error");
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
          <p className="text-sm text-gray-600 mt-1">Your basic personal details and contact information</p>
        </div>
        {!editingSections.personal ? (
          <button
            onClick={() => toggleSectionEdit("personal")}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={() => handleCancelEdit("personal")}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
            <button
              onClick={() => handleSaveSection("personal")}
              disabled={saveStatus === "saving"}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saveStatus === "saving" ? "Saving..." : "Save"}</span>
            </button>
          </div>
        )}
      </div>

      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-16 h-16 text-gray-400" />
            )}
          </div>
          <label htmlFor="profileImage" className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors">
            <Camera className="w-4 h-4" />
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        <p className="text-sm text-gray-500 mt-2">Click the camera icon to update your profile photo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            value={profileData.personal.firstName}
            onChange={(e) => handleInputChange("personal", "firstName", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            value={profileData.personal.lastName}
            onChange={(e) => handleInputChange("personal", "lastName", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="email"
              value={profileData.personal.email}
              onChange={(e) => handleInputChange("personal", "email", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              value={profileData.personal.phone}
              onChange={(e) => handleInputChange("personal", "phone", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="+91 1234567890"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={profileData.personal.dateOfBirth}
              onChange={(e) => handleInputChange("personal", "dateOfBirth", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
          <div className="relative">
            <Globe className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={profileData.personal.nationality}
              onChange={(e) => handleInputChange("personal", "nationality", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="Your nationality"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderTravelPreferences = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Travel Preferences</h2>
          <p className="text-sm text-gray-600 mt-1">Customize your travel experience and preferences</p>
        </div>
        {!editingSections.preferences ? (
          <button
            onClick={() => toggleSectionEdit("preferences")}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={() => handleCancelEdit("preferences")}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
            <button
              onClick={() => handleSaveSection("preferences")}
              disabled={saveStatus === "saving"}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saveStatus === "saving" ? "Saving..." : "Save"}</span>
            </button>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Preferred Travel Types</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {travelTypes.map(type => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profileData.preferences.travelTypes.includes(type)}
                onChange={() => handleArrayToggle("preferences", "travelTypes", type)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Dream Destinations</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {popularDestinations.map(destination => (
            <label key={destination} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profileData.preferences.destinations.includes(destination)}
                onChange={() => handleArrayToggle("preferences", "destinations", destination)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{destination}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range per Trip</label>
          <select
            value={profileData.preferences.budgetRange}
            onChange={(e) => handleInputChange("preferences", "budgetRange", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Travel Frequency</label>
          <select
            value={profileData.preferences.travelFrequency}
            onChange={(e) => handleInputChange("preferences", "travelFrequency", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          >
            <option value="">Select frequency</option>
            {travelFrequencies.map(freq => (
              <option key={freq} value={freq}>{freq}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">Dietary Restrictions</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {dietaryOptions.map(diet => (
            <label key={diet} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={profileData.preferences.dietaryRestrictions.includes(diet)}
                onChange={() => handleArrayToggle("preferences", "dietaryRestrictions", diet)}
                className="rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{diet}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Travel Documents</h2>
          <p className="text-sm text-gray-600 mt-1">Secure storage for your travel documents</p>
        </div>
        {!editingSections.documents ? (
          <button
            onClick={() => toggleSectionEdit("documents")}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={() => handleCancelEdit("documents")}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
            <button
              onClick={() => handleSaveSection("documents")}
              disabled={saveStatus === "saving"}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saveStatus === "saving" ? "Saving..." : "Save"}</span>
            </button>
          </div>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> Your document information is securely encrypted and only used for travel bookings and verification purposes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
          <input
            type="text"
            value={profileData.documents.passportNumber}
            onChange={(e) => handleInputChange("documents", "passportNumber", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Enter passport number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Passport Expiry Date</label>
          <input
            type="date"
            value={profileData.documents.passportExpiry}
            onChange={(e) => handleInputChange("documents", "passportExpiry", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Visa Information</label>
        <textarea
          value={profileData.documents.visaInfo}
          onChange={(e) => handleInputChange("documents", "visaInfo", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          placeholder="Enter any visa details, restrictions, or special requirements..."
        />
      </div>
    </div>
  );

  const renderPaymentInfo = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Payment Information</h2>
          <p className="text-sm text-gray-600 mt-1">Secure payment methods for quick bookings</p>
        </div>
        {!editingSections.payment ? (
          <button
            onClick={() => toggleSectionEdit("payment")}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={() => handleCancelEdit("payment")}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
            <button
              onClick={() => handleSaveSection("payment")}
              disabled={saveStatus === "saving"}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saveStatus === "saving" ? "Saving..." : "Save"}</span>
            </button>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Security:</strong> Your payment information is securely encrypted and processed through PCI-compliant systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={profileData.payment.cardNumber}
              onChange={(e) => handleInputChange("payment", "cardNumber", e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              placeholder="1234 5678 9012 3456"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
          <input
            type="text"
            value={profileData.payment.expiryDate}
            onChange={(e) => handleInputChange("payment", "expiryDate", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="MM/YY"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
        <input
          type="text"
          value={profileData.payment.cardHolder}
          onChange={(e) => handleInputChange("payment", "cardHolder", e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          placeholder="Enter card holder name"
        />
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalInfo();
      case "preferences":
        return renderTravelPreferences();
      case "documents":
        return renderDocuments();
      case "payment":
        return renderPaymentInfo();
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDashboard={true} />

        <div className="flex-1 overflow-auto bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Travel Profile Setup</h1>
              <p className="text-lg text-gray-600">Complete your profile to get personalized travel recommendations and faster bookings</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Profile Completion</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleSaveProfile}
                    disabled={saveStatus === "saving"}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {saveStatus === "saving" ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Saving All...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Save All Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {saveStatus === "saved" && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm">Profile updated successfully!</p>
                </div>
              )}

              {saveStatus === "error" && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-800 text-sm">Failed to save profile. Please try again.</p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
              <nav className="flex overflow-x-auto">
                {[
                  { id: "personal", label: "Personal Info", icon: User },
                  { id: "preferences", label: "Travel Preferences", icon: MapPin },
                  { id: "documents", label: "Documents", icon: Lock },
                  { id: "payment", label: "Payment", icon: CreditCard }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`flex items-center space-x-2 px-6 py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                      activeSection === id
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                    {editingSections[id as keyof typeof editingSections] && (
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              {renderSection()}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Need help? Contact our support team at{" "}
                <a href="mailto:support@smarttourist.com" className="text-indigo-600 hover:text-indigo-700">
                  support@smarttourist.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
