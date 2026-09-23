import { getApps } from "@/lib/apps";
import { IApp } from "@/type/Apps.type";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaDownload, FaArrowLeft } from "react-icons/fa";
import { FiHardDrive } from "react-icons/fi";

interface IAppDetails {
  params: {
    id: string;
  };
}

const AppDetailsPage = async ({ params }: IAppDetails) => {
  const { id } = await params;
  const AllApps = await getApps();
  const app = AllApps.find((app: IApp) => app.id === Number(id));

  if (!app) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800">App Not Found!</h2>
        <Link href="/" className="btn btn-primary mt-4 text-white rounded-xl">
          Back to Home
        </Link>
      </div>
    );
  }

  // Calculate Total Ratings Count Dynamic Vabe
  const totalRatingCount = app.ratings?.reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0
  ) || 1; // 1 to avoid division by zero

  return (
    <div className="py-10 bg-slate-50/50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
          >
            <FaArrowLeft className="text-xs" /> Back
          </Link>
        </div>

        {/* Selected Single App Details Card */}
        <div className="bg-base-100 rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            
            {/* App Icon */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title & Basic Stats */}
            <div className="flex-1 space-y-3 w-full">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                  {app.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {app.companyName}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs sm:text-sm font-semibold text-slate-700 max-w-fit">
                <span className="flex items-center gap-1">
                  <FaStar className="text-amber-500" /> {app.ratingAvg}
                </span>
                <span className="h-3 w-[1px] bg-slate-200"></span>
                <span className="flex items-center gap-1">
                  <FaDownload className="text-primary" /> {app.downloads}
                </span>
                <span className="h-3 w-[1px] bg-slate-200"></span>
                <span className="flex items-center gap-1">
                  <FiHardDrive className="text-emerald-600" /> {app.size} MB
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button className="btn btn-primary text-white font-semibold rounded-xl border-none shadow-md shadow-primary/20 hover:shadow-lg transition-all w-full sm:w-auto h-11 px-6 text-sm">
                  Install App ({app.size} MB)
                </button>
              </div>
            </div>
          </div>

          {/* About App */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-2">About this App</h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {app.description}
            </p>
          </div>

          {/* DYNAMIC RATINGS SECTION */}
          {app.ratings && app.ratings.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                Ratings & Reviews ({app.reviews})
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                
                {/* Left Side: Rating Avg */}
                <div className="text-center sm:text-left flex-shrink-0">
                  <p className="text-4xl font-extrabold text-slate-800">{app.ratingAvg}</p>
                  <div className="flex items-center gap-1 text-amber-500 my-1 justify-center sm:justify-start">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-slate-300" />
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Out of 5.0</p>
                </div>

                {/* Right Side: Dynamic Progress Bars (5 Star to 1 Star) */}
                <div className="w-full space-y-2">
                  {[...app.ratings].reverse().map((item, index) => {
                    const percentage = Math.round((item.count / totalRatingCount) * 100);

                    return (
                      <div key={index} className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                        <span className="w-12 whitespace-nowrap">{item.name}</span>
                        <progress
                          className="progress progress-primary w-full h-2.5"
                          value={percentage}
                          max="100"
                        ></progress>
                        <span className="w-9 text-right text-slate-400 font-medium">
                          {percentage}%
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default AppDetailsPage;