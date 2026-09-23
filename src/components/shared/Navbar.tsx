"use client";

import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link 
          href="/" 
          className={`font-semibold transition-colors ${
            pathname === '/' 
              ? 'text-primary bg-primary/10 font-bold' 
              : 'text-slate-600 hover:text-primary active:bg-primary/10'
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          href="/apps" 
          className={`font-semibold transition-colors ${
            pathname === '/apps' 
              ? 'text-primary bg-primary/10 font-bold' 
              : 'text-slate-600 hover:text-primary active:bg-primary/10'
          }`}
        >
          Apps
        </Link>
      </li>
      <li>
        <Link 
          href="/installation" 
          className={`font-semibold transition-colors ${
            pathname === '/installation' 
              ? 'text-primary bg-primary/10 font-bold' 
              : 'text-slate-600 hover:text-primary active:bg-primary/10'
          }`}
        >
          Installation
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 border-b border-slate-100 sticky top-0 z-50 container mx-auto">
      <div className="navbar container mx-auto px-4 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 mr-2">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-52 p-3 shadow-xl border border-slate-100 gap-1">
              {links}
            </ul>
          </div>
          
          <Link href="/" className="flex items-center gap-2">
            <div className="w-36 sm:w-40">
              <Image src={logo} alt="HERO.IO Logo" priority className="w-[50px] h-auto object-contain" />
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-sm">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-white font-medium rounded-xl border-none shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 transition-all duration-200 capitalize min-h-0 h-10 px-6"
          >
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;