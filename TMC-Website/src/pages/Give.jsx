
import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';
export default function Give() {
  const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 } };
  return (<section className="py-20 bg-slate-50"><div className="max-w-6xl mx-auto px-4"><motion.div {...fadeUp} className="flex items-center gap-3 mb-4"><HeartHandshake/><h2 className="text-3xl font-semibold">Give</h2></motion.div><p className="max-w-3xl mb-6">Your generosity advances our mission in Burtonsville and beyond. Use the secure options below to give a one-time gift or set up recurring support.</p><div className="flex flex-wrap gap-3"><a href="#" className="px-4 py-2 rounded-2xl bg-pink-600 text-white">Tithely</a><a href="#" className="px-4 py-2 rounded-2xl bg-white border">PayPal</a><a href="#" className="px-4 py-2 rounded-2xl bg-white border">Cash App</a></div></div></section>);
}
