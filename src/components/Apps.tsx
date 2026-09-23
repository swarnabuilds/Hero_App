import { IApp } from "@/type/Apps.type";
import AppCard from "./shared/AppCard";
import { getApps } from "@/lib/apps";

const Apps = async () => {
  const AllData = await getApps();

  return (
    <section className="py-16 bg-slate-50/50 container mx-auto">
      {/* Main Container */}
      <div className=" sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight capitalize">
            Trending <span className="text-primary">Apps</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium">
            Explore all trending apps on the market developed by us
          </p>
        </div>

        {/* 3 Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AllData.slice(0,6).map((data:IApp) => (
            <AppCard key={data.id} data={data} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Apps;