// File: src/pages/PMKVYPortal.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Users, Briefcase, TrendingUp, MapPin, IndianRupee, Star, Clock, CheckCircle } from 'lucide-react';

const PMKVYPortal = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const jobListings = [
    {
      title: "Accountant",
      company: "Corporate Finance Dept",
      type: "Full-time",
      location: "Mumbai",
      salary: "₹25,000 - ₹35,000",
      skills: ["Accounting", "Tally", "GST"],
      match: 92
    },
    {
      title: "Manufacturing Supervisor",
      company: "Industrial Products Ltd",
      type: "Full-time",
      location: "Pune",
      salary: "₹20,000 - ₹30,000",
      skills: ["Production", "Quality Control", "Supervision"],
      match: 88
    },
    {
      title: "Commercial Driver",
      company: "Logistics Solutions",
      type: "Full-time",
      location: "Delhi",
      salary: "₹18,000 - ₹25,000",
      skills: ["Driving License", "Logistics", "Transport"],
      match: 95
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
    "Forklift Operation"
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          PMKVY Workers Portal
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Smart job matching with 89% success rate and career progression opportunities
        </p>
      </motion.div>

      {/* Application Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-2 gap-8 mb-12"
      >
        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
            <CardDescription>
              Complete your profile to get better job matches
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
              <input
                type="file"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
              Submit Application
            </Button>
          </CardContent>
        </Card>

        {/* Skill Verification */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Verification</CardTitle>
            <CardDescription>
              Select your verified skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {skillOptions.map((skill, index) => (
                <label 
                  key={index} 
                  className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                    selectedSkills.includes(skill) ? 'bg-indigo-50 border-indigo-200' : ''
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" 
                  />
                  <span className="text-sm">{skill}</span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Job Listings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6">Available Positions</h2>
        <div className="grid gap-4">
          {jobListings.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
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
                  </div>
                  
                  <div className="text-right ml-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-green-600">{job.match}%</span>
                    </div>
                    <span className="text-xs text-gray-500">Match Score</span>
                    <Button className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Application Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Manufacturing Supervisor</h4>
                    <p className="text-sm text-gray-600">Industrial Products Ltd</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm text-yellow-600">Under Review</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Commercial Driver</h4>
                    <p className="text-sm text-gray-600">Logistics Solutions</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">Approved</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PMKVYPortal;