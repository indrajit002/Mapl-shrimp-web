import React from 'react';

const Test = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          MAPL Shrimp Test Page
        </h1>
        <p className="text-lg text-blue-700 mb-8">
          If you can see this, the React app is working!
        </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <ul className="text-left space-y-2">
            <li>✅ React: Working</li>
            <li>✅ TypeScript: Working</li>
            <li>✅ Tailwind CSS: Working</li>
            <li>✅ Vite: Working</li>
            <li>✅ Development Server: Working</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Test;
