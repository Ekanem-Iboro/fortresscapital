const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-purple-900/80 backdrop-blur-sm flex items-center justify-center z-[9999] w-full">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-purple-200 rounded-full opacity-30 animate-ping" />

        {/* Inner spinner */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-white rounded-full border-t-transparent animate-spin" />

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingOverlay;
