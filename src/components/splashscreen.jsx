// src/components/SplashScreen.jsx
import React, { useEffect, useRef } from 'react';

const SplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.onended = () => {
        onFinish();
      };
    }
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/introsplash.mp4"
        className="w-full h-full object-cover"
        muted
        autoPlay
        playsInline
      />
    </div>
  );
};

export default SplashScreen;
