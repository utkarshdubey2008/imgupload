import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Video } from '../../types';

export function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosQuery = query(
          collection(db, 'videos'),
          orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(videosQuery);
        const videoData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Video[];
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading videos...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Uploaded Videos</h2>
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-32 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{video.title}</h3>
                <p className="text-sm text-gray-500">
                  Views: {video.views} • Likes: {video.likes}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                Edit
              </button>
              <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}