"use client"
import { Sidebar } from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function AdminPage() {
    const [stats, setStats] = useState({
      projects: 0,
      reviews: 0,
      skills: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // useEffect(() => {
    //   const fetchStats = async () => {
    //     try {
    //       const [projectsRes, reviewsRes, skillsRes] = await Promise.all([
    //         fetch('/api/project-operations', { method: 'POST', body: JSON.stringify({ method: 'GET' }) }),
    //         fetch('/api/review-operations', { method: 'POST', body: JSON.stringify({ method: 'GET' }) }),
    //         fetch('/api/skill-operations', { method: 'POST', body: JSON.stringify({ method: 'GET' }) })
    //       ]);
  
    //       const [projects, reviews, skills] = await Promise.all([
    //         projectsRes.json(),
    //         reviewsRes.json(),
    //         skillsRes.json()
    //       ]);
  
    //       setStats({
    //         projects: projects.length || 0,
    //         reviews: reviews.length || 0,
    //         skills: skills.length || 0
    //       });
    //     } catch (err) {
    //       setError('Failed to load dashboard stats');
    //       console.error(err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchStats();
    // }, []);
  
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-inter">
                Welcome to your Dashboard
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400 font-inter">
                Here's an overview of your portfolio management system
              </p>
            </div>
  
            {error && (
              <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-lg font-inter">
                {error}
              </div>
            )}
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    <i className="fas fa-project-diagram text-indigo-600 dark:text-indigo-400 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 font-inter">
                      Total Projects
                    </h2>
                    <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white font-inter">
                      {loading ? (
                        <i className="fas fa-spinner fa-spin text-gray-400"></i>
                      ) : (
                        stats.projects
                      )}
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <i className="fas fa-star text-green-600 dark:text-green-400 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 font-inter">
                      Client Reviews
                    </h2>
                    <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white font-inter">
                      {loading ? (
                        <i className="fas fa-spinner fa-spin text-gray-400"></i>
                      ) : (
                        stats.reviews
                      )}
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <i className="fas fa-code text-purple-600 dark:text-purple-400 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 font-inter">
                      Skills Listed
                    </h2>
                    <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white font-inter">
                      {loading ? (
                        <i className="fas fa-spinner fa-spin text-gray-400"></i>
                      ) : (
                        stats.skills
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-inter">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a 
                  href="/admin/projects"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <i className="fas fa-plus text-indigo-600 dark:text-indigo-400 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300 font-inter">Add New Project</span>
                </a>
                <a 
                  href="/admin/reviews"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <i className="fas fa-plus text-green-600 dark:text-green-400 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300 font-inter">Add New Review</span>
                </a>
                <a 
                  href="/admin/skills"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <i className="fas fa-plus text-purple-600 dark:text-purple-400 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300 font-inter">Add New Skill</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  
  