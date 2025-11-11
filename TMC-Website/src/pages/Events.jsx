
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
export default function Events() {
  const items = [
    { date: 'Sundays', time: '10:00 AM', name: 'Worship Gathering', location: 'Main Sanctuary' },
    { date: 'Wednesdays', time: '7:00 PM', name: 'Midweek Prayer', location: 'Chapel' },
    { date: 'Monthly', time: '1st Saturday, 9:00 AM', name: 'Community Serve Day', location: 'Fellowship Hall' },
  ];
  const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 } };
  return (<section className="py-20 bg-slate-50"><div className="max-w-6xl mx-auto px-4"><motion.div {...fadeUp} className="flex items-center gap-3 mb-6"><CalendarDays/><h2 className="text-3xl font-semibold">Events</h2></motion.div><div className="grid md:grid-cols-3 gap-6">{items.map((e)=> (<motion.div key={e.name} {...fadeUp} className="h-full"><div className="rounded-3xl border p-5 h-full"><h3 className="text-xl font-semibold">{e.name}</h3><p className="text-sm mt-2"><b>{e.date}</b> · {e.time}</p><p className="text-sm text-slate-600">{e.location}</p></div></motion.div>))}</div></div></section>);
}
