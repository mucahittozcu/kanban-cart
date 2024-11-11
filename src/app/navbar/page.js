"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="flex pl-10 pt-5 font-semibold">
      <Link
        href="/boards"
        className={`p-3 bg-white hover:bg-slate-50 px-6 border rounded-b-md rounded-l-lg rounded-r-none rounded-t-md rounded-tr-none ${
          isActive('/boards') ? 'text-blue-700' : ''
        }`}
      >
        Boards
      </Link>
      <Link
        href='/boards'
        className={`p-3 px-8 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${
          isActive('/list') ? 'text-blue-700' : ''
        }`}
      >
        List
      </Link>
      <Link
        href='/boards'
        className={`p-3 px-5 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${
          isActive('/other1') ? 'text-blue-700' : ''
        }`}
      >
        Other 1
      </Link>
      <Link
        href='/boards'
        className={`p-3 px-5 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${
          isActive('/other2') ? 'text-blue-700' : ''
        }`}
      >
        Other 2
      </Link>
      <Link
        href='/boards'
        className={`p-3 px-5 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-none rounded-t-md rounded-tr-none rounded-tl-none ${
          isActive('/other3') ? 'text-blue-700' : ''
        }`}
      >
        Other 3
      </Link>
      <Link
        href='/boards'
        className={`p-3 px-5 bg-white hover:bg-slate-50 border rounded-b-md rounded-l-none rounded-r-lg rounded-t-md rounded-tl-none ${
          isActive('/other4') ? 'text-blue-700' : ''
        }`}
      >
        Other 4
      </Link>
    </div>
  );
};

export default Navbar;
