
import React from 'react';
import { motion } from 'framer-motion';
import {
  Church, PlayCircle, CalendarDays, HeartHandshake, MapPin, Phone, Mail,
  Facebook, Youtube, Instagram, Send, ArrowRight
} from 'lucide-react';
import logo from './assets/logo.jpg';

const brand = {
  name: "Transfiguration Ministry Church",
  address: "15121 McKnew Rd, Burtonsville, MD 20866",
  phone: "(xxx) xxx-xxxx",
  email: "info@tmc.org",
  mission:
    "Be transformed by Christ’s presence, equipped by His Word, and sent to serve our community.",
  verse: "Matthew 17:1–9",
};

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Ministries", href: "#ministries" },
  { label: "Events", href: "#events" },
  { label: "Sermons", href: "#sermons" },
  { label: "Give", href: "#give" },
  { label: "Contact", href: "#contact" },
];

const ministries = [
  {
    title: "Kids & Families",
    text: "Safe, joyful spaces where children encounter Jesus through age-appropriate teaching.",
  },
  { title: "Youth", text: "Mentoring, small groups, and service projects for middle & high schoolers." },
  { title: "Prayer", text: "Weekly prayer gatherings and intercessory support for our church & city." },
  { title: "Outreach", text: "Food drives, neighborhood care, and partnerships with local shelters." },
];

const events = [
  { date: "Sundays", time: "10:00 AM", name: "Worship Gathering", location: "Main Sanctuary" },
  { date: "Wednesdays", time: "7:00 PM", name: "Midweek Prayer", location: "Chapel" },
  { date: "Monthly", time: "1st Saturday, 9:00 AM", name: "Community Serve Day", location: "Fellowship Hall" },
];

const sermons = [
  {
    title: "Transformed on the Mountain",
    speaker: "Pastor",
    date: "2025-11-01",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Shaped by the Word",
    speaker: "Guest Speaker",
    date: "2025-10-20",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut" }, viewport: { once: true, amount: 0.2 } };

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full ring-2 ring-pink-400 object-cover" />
            <span className="font-semibold tracking-tight">{brand.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-pink-600">
                {n.label}
              </a>
            ))}
            <a href="#give" className="px-4 py-2 rounded-2xl bg-pink-600 text-white hover:bg-pink-700">Give</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-fuchsia-600 to-pink-500 pt-20 pb-28 md:pb-36">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp}>
              <p className="uppercase text-white/80 text-xs tracking-widest">{brand.verse}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-3">Encounter. Transform. Serve.</h1>
              <p className="text-white/90 mt-4 max-w-prose">{brand.mission}</p>
              <div className="mt-6 flex gap-3">
                <a href="#sermons" className="px-4 py-2 rounded-2xl bg-white text-pink-700 inline-flex items-center gap-2"><PlayCircle size={18}/> Watch sermons</a>
                <a href="#visit" className="px-4 py-2 rounded-2xl bg-pink-700 text-white inline-flex items-center gap-2"><MapPin size={18}/> Plan a visit</a>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="hidden md:block">
              <div className="rounded-3xl shadow-xl border border-white/20 bg-white/90 p-6">
                <div className="flex items-center gap-2 text-blue-800 font-semibold mb-2"><Church/> Welcome</div>
                <p className="text-sm leading-relaxed">
                  We gather every Sunday at <b>10:00 AM</b>. Join us as we worship Jesus, teach the Scriptures, and love our neighbors.
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <MapPin size={18}/> {brand.address}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="mt-3 max-w-3xl">
              Transfiguration Ministry Church is a Christ-centered community in Burtonsville, Maryland. We seek
              to encounter God’s presence, be transformed by His grace, and serve our city through practical love.
              Our core beliefs affirm the authority of the Bible, salvation by grace through faith, and the power of the Holy Spirit
              to change lives and communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="ministries" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold mb-8">Ministries</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministries.map((m) => (
              <motion.div key={m.title} {...fadeUp} className="h-full">
                <div className="rounded-3xl border p-5 hover:shadow-lg transition-shadow h-full">
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp} className="flex items-center gap-3 mb-6">
            <CalendarDays />
            <h2 className="text-3xl font-semibold">Events</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <motion.div key={e.name} {...fadeUp} className="h-full">
                <div className="rounded-3xl border p-5 h-full">
                  <h3 className="text-xl font-semibold">{e.name}</h3>
                  <p className="text-sm mt-2"><b>{e.date}</b> · {e.time}</p>
                  <p className="text-sm text-slate-600">{e.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sermons" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp} className="flex items-center gap-3 mb-6">
            <PlayCircle />
            <h2 className="text-3xl font-semibold">Sermons & Livestream</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {sermons.map((s) => (
              <motion.div key={s.title} {...fadeUp} className="rounded-3xl overflow-hidden border">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    className="w-full h-full"
                    src={s.youtube.replace("watch?v=", "embed/")}
                    title={s.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.speaker} · {new Date(s.date).toLocaleDateString()}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="give" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp} className="flex items-center gap-3 mb-4">
            <HeartHandshake />
            <h2 className="text-3xl font-semibold">Give</h2>
          </motion.div>
          <p className="max-w-3xl mb-6">
            Your generosity advances our mission in Burtonsville and beyond. Use the secure options below to
            give a one-time gift or set up recurring support.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="px-4 py-2 rounded-2xl bg-pink-600 text-white">Tithely</a>
            <a href="#" className="px-4 py-2 rounded-2xl bg-white border">PayPal</a>
            <a href="#" className="px-4 py-2 rounded-2xl bg-white border">Cash App</a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-semibold">Contact & Visit Us</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2"><MapPin size={18}/> {brand.address}</div>
              <div className="flex items-center gap-2"><Phone size={18}/> {brand.phone} (replace)</div>
              <div className="flex items-center gap-2"><Mail size={18}/> {brand.email} (replace)</div>
            </div>
            <div className="mt-5 flex gap-3 text-slate-600">
              <a href="#" className="hover:text-pink-600" aria-label="Facebook"><Facebook/></a>
              <a href="#" className="hover:text-pink-600" aria-label="YouTube"><Youtube/></a>
              <a href="#" className="hover:text-pink-600" aria-label="Instagram"><Instagram/></a>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid grid-cols-1 gap-3">
              <input className="border rounded-xl px-3 py-2" placeholder="Your name"/>
              <input className="border rounded-xl px-3 py-2" placeholder="Your email"/>
              <textarea className="border rounded-xl px-3 py-2" rows={4} placeholder="How can we pray for you or help?"/>
              <button className="px-4 py-2 rounded-2xl bg-pink-600 text-white inline-flex items-center gap-2">Send <Send size={16}/></button>
            </form>
          </motion.div>

          <motion.div {...fadeUp} id="visit">
            <div className="w-full rounded-3xl overflow-hidden shadow border">
              <iframe
                title="Map"
                className="w-full h-[360px]"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full ring-2 ring-pink-400 object-cover" />
            <div>
              <p className="font-semibold text-sm">{brand.name}</p>
              <p className="text-xs text-slate-500">{brand.verse}</p>
            </div>
          </div>
          <nav className="text-sm flex flex-wrap gap-4 md:justify-center">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-pink-600 flex items-center gap-1">
                {n.label} <ArrowRight size={14}/>
              </a>
            ))}
          </nav>
          <p className="text-xs text-slate-500 md:text-right">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
