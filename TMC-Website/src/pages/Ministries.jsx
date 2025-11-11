
import React from 'react';
import { motion } from 'framer-motion';
export default function Ministries() {
  const items = [
    { title: 'Kids & Families', text: 'Safe, joyful spaces where children encounter Jesus through age-appropriate teaching.' },
    { title: 'Youth', text: 'Mentoring, small groups, and service projects for middle & high schoolers.' },
    { title: 'Prayer', text: 'Weekly prayer gatherings and intercessory support for our church & city.' },
    { title: 'Outreach', text: 'Food drives, neighborhood care, and partnerships with local shelters.' },
  ];
  const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 } };
  return (<section className="py-20"><div className="max-w-6xl mx-auto px-4"><motion.h2 {...fadeUp} className="text-3xl font-semibold mb-8">Ministries</motion.h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{items.map((m)=> (<motion.div key={m.title} {...fadeUp} className="h-full"><div className="rounded-3xl border p-5 hover:shadow-lg transition-shadow h-full"><h3 className="text-lg font-semibold">{m.title}</h3><p className="text-sm text-slate-600 mt-2">{m.text}</p></div></motion.div>))}</div></div></section>);
}
