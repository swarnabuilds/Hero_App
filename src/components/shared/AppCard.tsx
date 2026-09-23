 
import { IApp } from '@/type/Apps.type';
import Image from 'next/image';
import { FaStar, FaDownload } from 'react-icons/fa';
import { FiHardDrive } from 'react-icons/fi';

interface IDataProps {
    data: IApp
}
const AppCard = ({ data }:IDataProps) => {
  const { image, title, companyName, description, size, ratingAvg, downloads } = data;

  return (
    <div className="w-full max-w-full bg-base-100 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group">
      <div>
        {/* Top Section: App Icon & Title */}
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-slate-800 truncate group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5 truncate">
              {companyName}
            </p>

            {/* Badge Info */}
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-600 border border-amber-200">
                <FaStar className="text-amber-500 text-[10px]" />
                {ratingAvg}
              </span>
              <span className="text-xs text-slate-400 font-medium">App</span>
            </div>
          </div>
        </div>

        {/* Middle Section: App Description */}
        <p className="mt-4 text-xs text-slate-600 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Stats Section: Downloads & Size */}
        <div className="grid grid-cols-2 gap-2 mt-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white shadow-xs text-primary">
              <FaDownload className="text-xs" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Downloads</p>
              <p className="text-xs font-bold text-slate-700">{downloads}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white shadow-xs text-emerald-600">
              <FiHardDrive className="text-xs" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Size</p>
              <p className="text-xs font-bold text-slate-700">{size} MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Action Button */}
      <div className="mt-5">
        <button className="w-full btn btn-primary text-white font-semibold rounded-xl border-none shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 capitalize min-h-0 h-10 text-sm">
          Install App
        </button>
      </div>
    </div>
  );
};

export default AppCard;