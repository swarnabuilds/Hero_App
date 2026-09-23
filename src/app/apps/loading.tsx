import React from 'react';

const Appsloading = () => {
  return (
    <section className="py-16 bg-slate-50/50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Skeleton */}
        <div className="flex flex-col items-center max-w-2xl mx-auto mb-12 gap-3">
          <div className="skeleton h-8 w-48 rounded-lg"></div>
          <div className="skeleton h-4 w-72 rounded-md"></div>
        </div>

        {/* 3 Column Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-full bg-base-100 rounded-2xl border border-slate-200/80 p-5 flex flex-col justify-between shadow-sm gap-5"
            >
              <div>
                {/* Top Section Skeleton */}
                <div className="flex items-start gap-4">
                  <div className="skeleton h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-2xl"></div>
                  <div className="flex-1 space-y-2 py-1">
                    <div className="skeleton h-5 w-3/4 rounded"></div>
                    <div className="skeleton h-3 w-1/2 rounded"></div>
                    <div className="skeleton h-5 w-14 rounded-md mt-2"></div>
                  </div>
                </div>

                {/* Description Skeleton */}
                <div className="space-y-2 mt-5">
                  <div className="skeleton h-3 w-full rounded"></div>
                  <div className="skeleton h-3 w-4/5 rounded"></div>
                  <div className="skeleton h-3 w-2/3 rounded"></div>
                </div>

                {/* Stats Box Skeleton */}
                <div className="grid grid-cols-2 gap-2 mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="skeleton h-8 w-8 rounded-lg shrink-0"></div>
                    <div className="space-y-1 flex-1">
                      <div className="skeleton h-2 w-10 rounded"></div>
                      <div className="skeleton h-3 w-12 rounded"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="skeleton h-8 w-8 rounded-lg shrink-0"></div>
                    <div className="space-y-1 flex-1">
                      <div className="skeleton h-2 w-10 rounded"></div>
                      <div className="skeleton h-3 w-12 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Skeleton */}
              <div className="skeleton h-10 w-full rounded-xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Appsloading;