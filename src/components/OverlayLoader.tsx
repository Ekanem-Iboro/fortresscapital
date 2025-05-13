import { useEffect, useState } from "react";

interface LoadingOverlayProps {
  delay?: number; // Delay in ms before showing the overlay
}

const LoadingOverlay = ({ delay = 300 }: LoadingOverlayProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Only show the overlay after a delay to prevent flashing for quick loads
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!showOverlay) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-purple-900/60 backdrop-blur-sm flex items-center justify-center z-[9999] w-full transition-opacity duration-300">
      <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-md">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-purple-200 rounded-full opacity-30 animate-ping" />

          {/* Inner spinner */}
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-white rounded-full border-t-transparent animate-spin" />

          {/* Center dot */}
          <div className="absolute top-1/2 left-[2rem] w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>
        <p className="text-white text-center mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
