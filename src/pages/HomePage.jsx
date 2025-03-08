import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleStudentClick = () => {
    navigate('/student');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">Student Marksheet System</h1>
          <p className="text-indigo-100 mt-2">Manage and view student examination results</p>
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Select Your Role</h2>
            <p className="text-gray-600">Access the system as an administrator or student</p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <button 
              onClick={handleAdminClick}
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Admin
            </button>
            
            <button 
              onClick={handleStudentClick}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Student
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">© 2025 Student Marksheet System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;