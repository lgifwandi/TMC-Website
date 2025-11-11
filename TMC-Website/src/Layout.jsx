
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Layout({ children }) {
  const nav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Ministries", href: "/ministries" },
    { label: "Events", href: "/events" },
    { label: "Sermons", href: "/sermons" },
    { label: "Give", href: "/give" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full ring-2 ring-pink-400 bg-pink-100 flex items-center justify-center font-bold text-pink-700">T</div>
            <span className="font-semibold tracking-tight">Transfiguration Ministry Church</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <NavLink key={n.href} to={n.href} end={n.href==='/'}
                className={({isActive}) => 'hover:text-pink-600 ' + (isActive ? 'text-pink-600' : '')}>
                {n.label}
              </NavLink>
            ))}
            <NavLink to="/give" className="px-4 py-2 rounded-2xl bg-pink-600 text-white hover:bg-pink-700">Give</NavLink>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full ring-2 ring-pink-400 bg-pink-100 flex items-center justify-center font-bold text-pink-700">T</div>
            <div>
              <p className="font-semibold text-sm">Transfiguration Ministry Church</p>
              <p className="text-xs text-slate-500">Matthew 17:1–9</p>
            </div>
          </div>
          <nav className="text-sm flex flex-wrap gap-4 md:justify-center">
            {nav.map((n) => (<NavLink key={n.href} to={n.href} className="hover:text-pink-600">{n.label}</NavLink>))}
          </nav>
          <p className="text-xs text-slate-500 md:text-right">© {new Date().getFullYear()} Transfiguration Ministry Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
