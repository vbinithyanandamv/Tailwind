import React from "react";


const SideLayoutMain = (props) => {
    return (
        <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none" tabindex="0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
        
    );
};


export default SideLayoutMain;