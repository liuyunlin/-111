import React from 'react';

const Legend: React.FC = () => {
  return (
    <div className="mt-8 flex justify-center space-x-8">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-green-200 rounded-md mr-2"></div>
        <span>可用</span>
      </div>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-blue-500 rounded-md mr-2"></div>
        <span>已选择</span>
      </div>
      <div className="flex items-center">
        <div className="w-6 h-6 bg-red-200 rounded-md mr-2"></div>
        <span>已占用</span>
      </div>
    </div>
  );
};

export default Legend;