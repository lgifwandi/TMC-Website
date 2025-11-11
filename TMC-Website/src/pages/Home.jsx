
import React from 'react';
import { motion } from 'framer-motion';
import { Church, MapPin, PlayCircle } from 'lucide-react';
export default function Home() {
  const brand = { address: "15121 McKnew Rd, Burtonsville, MD 20866", mission: "Be transformed by Christ’s presence, equipped by His Word, and sent to serve our community.", verse: "Matthew 17:1–9" };
  const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 } };
  return (<section className="relative overflow-hidden">
    <div className="bg-gradient-to-br from-fuchsia-600 to-pink-500 pt-20 pb-28 md:pb-36">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...fadeUp}>
          <p className="uppercase text-white/80 text-xs tracking-widest">{brand.verse}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-3">Encounter. Transform. Serve.</h1>
          <p className="text-white/90 mt-4 max-w-prose">{brand.mission}</p>
          <div className="mt-6 flex gap-3">
            <a href="/sermons" className="px-4 py-2 rounded-2xl bg-white text-pink-700 inline-flex items-center gap-2"><PlayCircle size={18}/> Watch sermons</a>
            <a href="/contact#visit" className="px-4 py-2 rounded-2xl bg-pink-700 text-white inline-flex items-center gap-2"><MapPin size={18}/> Plan a visit</a>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="hidden md:block">
          <div className="rounded-3xl shadow-xl border border-white/20 bg-white/90 p-6">
            <div className="flex items-center gap-2 text-blue-800 font-semibold mb-2"><Church/> Welcome</div>
            <p className="text-sm leading-relaxed">We gather every Sunday at <b>10:00 AM</b>. Join us as we worship Jesus, teach the Scriptures, and love our neighbors.</p>
            <div className="mt-4 flex items-center gap-3 text-sm"><MapPin size={18}/> {brand.address}</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
}
