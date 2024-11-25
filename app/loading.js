import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Loading...</h1>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-gray-300 animate-pulse"
          >
            {/* Skeleton for Image */}
            <div className="w-full h-32 bg-gray-400 rounded-md" />
            {/* Skeleton for Title */}
            <div className="mt-4 h-5 bg-gray-400 rounded" />
            {/* Skeleton for Subtitle */}
            <div className="mt-2 h-4 bg-gray-400 rounded w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
