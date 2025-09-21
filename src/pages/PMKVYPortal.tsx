// File: src/pages/PMKVYPortal.tsx
import React, { useState } from 'react';
import { PMKVYLayout } from '../components/layouts/PMKVYLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Briefcase, User, BookOpen, TrendingUp, MapPin, IndianRupee, Star, Clock, CheckCircle, Award, Heart, Shield } from 'lucide-react';

const PMKVYPortal = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Welding', 'CNC Operation']);
  const [activeTab, setActiveTab] = useState('dashboard');

  const jobListings = [
    {
      title: "Senior CNC Machine Operator",
      company: "Precision Engineering Ltd",
      type: "Full-time",
      location: "Pune, Maharashtra",
      salary: "₹25,000 - ₹35,000",
      skills: ["CNC Operation", "Technical Drawing", "Precision Work"],
      match: 94,
      posted: "2 days ago",
      applicants: 12
    },
    {
      title: "Quality Control Inspector",
      company: "Automotive Components Inc",
      type: "Full-time",
      location: "Chennai, Tamil Nadu",
      salary: "₹22,000 - ₹30,000",
      skills: ["Quality Control", "Measurement", "ISO Standards"],
      match: 88,
      posted: "1 week ago",
      applicants: 8
    },
    {
      title: "Industrial Electrician",
      company: "Power Solutions Ltd",
      type: "Full-time",
      location: "Bangalore, Karnataka",
      salary: "₹28,000 - ₹38,000",
      skills: ["Electrical", "Maintenance", "Troubleshooting"],
      match: 91,
      posted: "3 days ago",
      applicants: 15
    }
  ];

  const skillOptions = [
    "Plumbing", "Electrical", "Welding", "Carpentry", 
    "Driving License", "CNC Operation", "Quality Control", 
    "Forklift Operation", "Machine Maintenance", "Technical Drawing"
  ];

  const trainingPrograms = [
    {
      name: "Advanced CNC Programming",
      provider: "NSDC Certified",
      duration: "6 weeks",
      level: "Advanced",
      rating: 4.8,
      enrolled: 1240
    },
    {
      name: "Industrial Safety Standards",
      provider: "PMKVY Approved",
      duration: "4 weeks",
      level: "Intermediate",
      rating: 4.6,
      enrolled: 890
    },
    {
      name: "Quality Management Systems",
      provider: "Skill India",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.9,
      enrolled: 1560
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
    <PMKVYLayout>
      <div className="space-y-8">
        {/* Header with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Job Matches</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-green-600">+6 this week</p>
                </div>
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Applications</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-green-600">3 interviews scheduled</p>
                </div>
                <User className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Skills Certified</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-sm text-green-600">+2 this month</p>
                </div>
                <Award className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Profile Score</p>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                  <p className="text-sm text-green-600">Complete your profile</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Jobs Section */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Job Opportunities</CardTitle>
            <CardDescription>Based on your skills and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {jobListings.map((job, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                          <p className="text-gray-600 mb-2">{job.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-green-600">{job.match}%</span>
                          </div>
                          <span className="text-xs text-gray-500">Match Score</span>
                        </div>
                      </div>
                      
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

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Posted {job.posted}</span>
                        <span>{job.applicants} applicants</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 flex-1">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Save Job
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Training Programs Section */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Training Programs</CardTitle>
            <CardDescription>Enhance your skills with these certified programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {program.level}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{program.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{program.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{program.provider}</p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p>Duration: {program.duration}</p>
                    <p>{program.enrolled.toLocaleString()} enrolled</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Enroll Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Verification Section */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Verification</CardTitle>
            <CardDescription>Select and verify your skills to get better job matches</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {skillOptions.map((skill, index) => (
                <label 
                  key={index} 
                  className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedSkills.includes(skill) 
                      ? 'bg-indigo-50 border-indigo-200' 
                      : 'border-gray-200'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" 
                  />
                  <span className="text-sm font-medium">{skill}</span>
                </label>
              ))}
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Verify Selected Skills
            </Button>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle>Worker Benefits</CardTitle>
            <CardDescription>Explore benefits available to PMKVY certified workers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Social Security</h3>
                <p className="text-sm text-gray-600">Health insurance, pension benefits, and accident coverage</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Health Benefits</h3>
                <p className="text-sm text-gray-600">Medical checkups, health camps, and wellness programs</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Skill Certification</h3>
                <p className="text-sm text-gray-600">Government recognized certificates for career growth</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PMKVYLayout>
  );
};

export default PMKVYPortal;