
const Loading = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-4">
      {/* DaisyUI / Tailwind Animated Spinner */}
      <div className="relative flex items-center justify-center">
        {/* Outer Ring Accent */}
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        
        {/* Inner Glowing Core */}
        <div className="absolute w-8 h-8 bg-primary/10 rounded-full animate-ping"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-sm font-semibold text-slate-700 tracking-wide animate-pulse">
          Loading Apps...
        </p>
        <p className="text-xs text-slate-400 mt-0.5">Please wait a moment</p>
      </div>
    </div>
  );
};

export default Loading;