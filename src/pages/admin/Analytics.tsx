import React from 'react';
import { VideoAnalytics } from '../../types';

export function Analytics() {
  const analytics: VideoAnalytics = {
    videoId: '',
    views: 0,
    uniqueViewers: 0,
    averageViewDuration: 0,
    likes: 0,
    dislikes: 0,
    comments: 0,
    shares: 0,
    retention: []
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Views</h3>
          <p className="mt-2 text-3xl font-semibold">{analytics.views}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Unique Viewers</h3>
          <p className="mt-2 text-3xl font-semibold">{analytics.uniqueViewers}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Average View Duration</h3>
          <p className="mt-2 text-3xl font-semibold">
            {Math.round(analytics.averageViewDuration)}s
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Engagement Rate</h3>
          <p className="mt-2 text-3xl font-semibold">
            {((analytics.likes + analytics.comments) / analytics.views * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}