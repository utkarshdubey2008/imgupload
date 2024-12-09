import React from 'react';
import { VideoCard } from '../components/VideoCard';
import { Video } from '../types/video';

export function HomePage() {
  const videos: Video[] = []; // TODO: Fetch videos from Firebase

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Latest Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}