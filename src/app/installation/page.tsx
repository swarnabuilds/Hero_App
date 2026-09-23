"use client";

import AppCard from "@/components/shared/AppCard";
import { AppContext } from "@/context/AppContext";
import { IApp } from "@/type/Apps.type";
import Link from "next/link";
import { useContext } from "react";

const InstallationPage = () => {
  const { installation } = useContext(AppContext);

  if (installation.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800">No Installed Apps Yet!</h2>
        <p className="text-slate-500 mt-2 text-sm">
          You haven&apos;t installed any apps from the showcase.
        </p>
        <Link href="/" className="btn btn-primary mt-4 text-white rounded-xl">
          Browse Apps
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 bg-slate-50/50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Installed Apps ({installation.length})
        </h1>

         
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {
            installation.map((app: IApp) => (
                <div key={app.id} className="w-full">
                <AppCard data={app} />
                </div>
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;