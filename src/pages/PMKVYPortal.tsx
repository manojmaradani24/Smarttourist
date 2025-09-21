// File: src/pages/PMKVYPortal.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  MapPin, 
  IndianRupee, 
  Star, 
  Clock, 
  CheckCircle, 
  BookOpen,
  Award,
  FileText,
  User,
  Settings,
  LogOut,
  Bell,
  Search,
  BarChart3,
  Calendar,
  MessageSquare,
  Heart,
  Shield,
  Download,
  Upload,
  Filter,
  ChevronDown
} from 'lucide-react';

const PMKVYPortal = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('jobs');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const jobListings = [
    {
      id: 1,
      title: "Accountant",
      company: "Corporate Finance Dept",
      type: "Full-time",
      location: "Mumbai",
      salary: "₹25,000 - ₹35,000",
      skills: ["Accounting", "Tally", "GST"],
      match: 92,
      posted: "2 days ago",
      applicants: 24,
      description: "We are looking for a skilled accountant with experience in GST filing and financial management.",
      requirements: ["2+ years experience", "Tally certification", "GST knowledge"]
    },
    {
      id: 2,
      title: "Manufacturing Supervisor",
      company: "Industrial Products Ltd",
      type: "Full-time",
      location: "Pune",
      salary: "₹20,000 - ₹30,000",
      skills: ["Production", "Quality Control", "Supervision"],
      match: 88,
      posted: "1 week ago",
      applicants: 18,
      description: "Supervise manufacturing operations and ensure quality standards are met.",
      requirements: ["3+ years supervisory experience", "Quality control certification", "Technical degree"]
    },
    {
      id: 3,
      title: "Commercial Driver",
      company: "Logistics Solutions",
      type: "Full-time",
      location: "Delhi",
      salary: "₹18,000 - ₹25,000",
      skills: ["Driving License", "Logistics", "Transport"],
      match: 95,
      posted: "3 days ago",
      applicants: 32,
      description: "Transport goods safely and efficiently across designated routes.",
      requirements: ["Valid commercial license", "3+ years driving experience", "Clean driving record"]
    },
    {
      id: 4,
      title: "Electrician",
      company: "Power Solutions Inc",
      type: "Full-time",
      location: "Bangalore",
      salary: "₹22,000 - ₹32,000",
      skills: ["Electrical Wiring", "Maintenance", "Safety Protocols"],
      match: 90,
      posted: "5 days ago",
      applicants: 15,
      description: "Install, maintain, and repair electrical wiring, equipment, and fixtures.",
      requirements: ["ITI Electrician certification", "3+ years experience", "Knowledge of safety standards"]
    },
    {
      id: 5,
      title: "Welder",
      company: "Metal Works Ltd",
      type: "Full-time",
      location: "Chennai",
      salary: "₹20,000 - ₹28,000",
      skills: ["Arc Welding", "MIG Welding", "Metal Fabrication"],
      match: 87,
      posted: "1 day ago",
      applicants: 12,
      description: "Fabricate and assemble metal structures and equipment through welding.",
      requirements: ["ITI Welder certification", "2+ years experience", "Knowledge of different welding techniques"]
    }
  ];

  const skillOptions = [
    "Plumbing",
    "Electrical",
    "Welding",
    "Carpentry",
    "Driving License",
    "CNC Operation",
    "Quality Control",
    "Forklift Operation",
    "Masonry",
    "Painting",
    "HVAC",
    "Machine Operation"
  ];

  const courses = [
    {
      id: 1,
      title: "Advanced Welding Techniques",
      provider: "NSDC Skill University",
      duration: "6 weeks",
      level: "Advanced",
      rating: 4.8,
      enrolled: 1250,
      certificate: true,
      cost: "Free"
    },
    {
      id: 2,
      title: "GST Accounting Practices",
      provider: "Finance Skill Council",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.6,
      enrolled: 980,
      certificate: true,
      cost: "₹2,499"
    },
    {
      id: 3,
      title: "Industrial Safety Standards",
      provider: "Safety Training Institute",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.7,
      enrolled: 1560,
      certificate: true,
      cost: "Free"
    }
  ];

  const applications = [
    {
      id: 1,
      title: "Manufacturing Supervisor",
      company: "Industrial Products Ltd",
      status: "Under Review",
      date: "2023-06-15",
      statusColor: "text-yellow-600",
      icon: Clock
    },
    {
      id: 2,
      title: "Commercial Driver",
      company: "Logistics Solutions",
      status: "Approved",
      date: "2023-06-10",
      statusColor: "text-green-600",
      icon: CheckCircle
    },
    {
      id: 3,
      title: "Electrician",
      company: "Power Solutions Inc",
      status: "Rejected",
      date: "2023-06-05",
      statusColor: "text-red-600",
      icon: CheckCircle
    }
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white w-64 min-h-screen flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-0' : '-ml-64'}`}>
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold flex items-center">
            <Award className="mr-2" />
            PMKVY Portal
          </h1>
          <p className="text-gray-400 text-sm mt-1">Skilled Workers Platform</p>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'dashboard' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <BarChart3 className="h-5 w-5 mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'jobs' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('jobs')}
              >
                <Briefcase className="h-5 w-5 mr-3" />
                Job Matches
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'courses' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('courses')}
              >
                <BookOpen className="h-5 w-5 mr-3" />
                Skill Development
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'applications' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('applications')}
              >
                <FileText className="h-5 w-5 mr-3" />
                My Applications
              </button>
            </li>
            <li>
              <button 
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left ${activeTab === 'profile' ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="h-5 w-5 mr-3" />
                Profile
              </button>
            </li>
          </ul>
          
          <div className="mt-8 pt-4 border-t border-gray-800">
            <h3 className="text-xs uppercase text-gray-500 tracking-wider mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-gray-300 hover:text-white">
                  <Shield className="h-4 w-4 mr-3" />
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 hover:text-white">
                  <MessageSquare className="h-4 w-4 mr-3" />
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 hover:text-white">
                  <TrendingUp className="h-4 w-4 mr-3" />
                  Career Guidance
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Rajesh Kumar</p>
              <p className="text-xs text-gray-400">Electrician</p>
            </div>
          </div>
          <button className="w-full flex items-center text-gray-300 hover:text-white text-sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1 rounded-md hover:bg-gray-100 mr-4"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search jobs, courses..." 
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                RK
              </div>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-md rounded-lg mb-6"
          >
            <h1 className="text-2xl font-bold mb-2">PMKVY Workers Portal</h1>
            <p className="text-blue-100">Smart job matching with 89% success rate and career progression opportunities</p>
            <div className="flex mt-4 space-x-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">24.3L+</div>
                <div className="text-sm">Skilled Workers</div>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm">Placement Rate</div>
              </div>
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-sm">Employers</div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Application Form Section */}
              {activeTab === 'dashboard' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Complete Your Profile</CardTitle>
                      <CardDescription>
                        Increase your job matches by completing your profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Profile Completion</span>
                        <span className="text-sm font-bold">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Complete Profile
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Skill Verification</CardTitle>
                      <CardDescription>
                        Get your skills verified to stand out to employers
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {skillOptions.slice(0, 4).map((skill, index) => (
                          <label 
                            key={index} 
                            className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                              selectedSkills.includes(skill) ? 'bg-blue-50 border-blue-200' : ''
                            }`}
                          >
                            <input 
                              type="checkbox" 
                              checked={selectedSkills.includes(skill)}
                              onChange={() => toggleSkill(skill)}
                              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                            />
                            <span className="text-sm">{skill}</span>
                          </label>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Award className="h-4 w-4 mr-2" />
                        Verify Skills
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Job Listings */}
              {(activeTab === 'jobs' || activeTab === 'dashboard') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Recommended Jobs</h2>
                    <Button variant="outline" className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                  <div className="grid gap-4">
                    {jobListings.map((job, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span className="font-bold text-green-600">{job.match}%</span>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-3">{job.company}</p>
                              
                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center gap-1">
                                  <Briefcase className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{job.type}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <IndianRupee className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{job.salary}</span>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2 mb-3">
                                {job.skills.map((skill, i) => (
                                  <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                    {skill}
                                  </span>
                                ))}
                              </div>

                              <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                              
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{job.posted} • {job.applicants} applicants</span>
                              </div>
                            </div>
                            
                            <div className="text-right ml-4 flex flex-col items-end">
                              <span className="text-xs text-gray-500 mb-2">Match Score</span>
                              <Button className="bg-blue-600 hover:bg-blue-700 mb-2">
                                Apply Now
                              </Button>
                              <Button variant="outline" className="text-xs">
                                Save Job
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Skill Development Courses */}
              {(activeTab === 'courses' || activeTab === 'dashboard') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Skill Development Courses</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {courses.map((course, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold">{course.title}</h3>
                            <span className={`px-2 py-1 text-xs rounded ${course.cost === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                              {course.cost}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{course.provider}</p>
                          
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4 text-gray-500" />
                              <span className="text-sm">{course.level}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{course.rating}</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{course.enrolled} enrolled</span>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              Enroll Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Application Status */}
              {(activeTab === 'applications' || activeTab === 'dashboard') && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Your Applications</h2>
                  <div className="space-y-4">
                    {applications.map((app, index) => {
                      const Icon = app.icon;
                      return (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                  <Icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold">{app.title}</h4>
                                  <p className="text-sm text-gray-600">{app.company}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Icon className={`w-4 h-4 ${app.statusColor}`} />
                                <span className={`text-sm ${app.statusColor}`}>{app.status}</span>
                              </div>
                            </div>
                            <div className="mt-3 text-sm text-gray-500">
                              Applied on {app.date}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Strength</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Basic Info</span>
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Skills</span>
                      <span className="text-sm text-blue-600">65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Certifications</span>
                      <span className="text-sm text-yellow-600">40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Work Experience</span>
                      <span className="text-sm text-red-600">20%</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Complete Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Interviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Industrial Products Ltd</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Tomorrow</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Manufacturing Supervisor</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>10:00 AM • Video Call</span>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Logistics Solutions</h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">In 3 days</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Commercial Driver</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>11:30 AM • Office Visit</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Jobs Applied</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Interviews</span>
                      <span className="font-bold">5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Profile Views</span>
                      <span className="font-bold">28</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Skill Badges</span>
                      <span className="font-bold">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload your resume to apply faster</p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Download className="w-4 h-4 mr-2" />
                      Upload Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PMKVY Workers Portal</h3>
              <p className="text-gray-400">Connecting skilled workers with employment opportunities across India.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Workers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find Jobs</a></li>
                <li><a href="#" className="hover:text-white">Skill Development</a></li>
                <li><a href="#" className="hover:text-white">Career Guidance</a></li>
                <li><a href="#" className="hover:text-white">Certification</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Post Jobs</a></li>
                <li><a href="#" className="hover:text-white">Browse Candidates</a></li>
                <li><a href="#" className="hover:text-white">Skill Verification</a></li>
                <li><a href="#" className="hover:text-white">Training Programs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2023 PMKVY Workers Portal. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PMKVYPortal;