import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Hero App",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Card */}
      <div className="max-w-md w-full text-center z-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-2xl shadow-2xl">
        {/* Badge / Code */}
        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-6">
          Error 404
        </div>

        {/* Hero Text */}
        <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mb-4">
          Lost in Space?
        </h1>

        <p className="text-slate-400 text-base leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons using Link */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-95 text-center"
          >
            Back to Home
          </Link>
          
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl border border-slate-700 transition-all duration-200 active:scale-95 text-center"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}