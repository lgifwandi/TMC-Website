
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
export default function Sermons() {
  const items = [
    { title: 'Transformed on the Mountain', speaker: 'Pastor', date: '2025-11-01', youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { title: 'Shaped by the Word', speaker: 'Guest Speaker', date: '2025-10-20', youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  ];
  const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 } };
  return (<section className="py-20"><div className="max-w-6xl mx-auto px-4"><motion.div {...fadeUp} className="flex items-center gap-3 mb-6"><PlayCircle/><h2 className="text-3xl font-semibold">Sermons & Livestream</h2></motion.div><div className="grid md:grid-cols-2 gap-6">{items.map((s)=> (<motion.div key={s.title} {...fadeUp} className="rounded-3xl overflow-hidden border"><div className="aspect-video w-full bg-black"><iframe className="w-full h-full" src={s.youtube.replace('watch?v=', 'embed/')} title={s.title} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/></div><div className='p-4'><h3 className='font-semibold'>{s.title}</h3><p className='text-sm text-slate-600'>{s.speaker} · {new Date(s.date).toLocaleDateString()}</p></div></motion.div>))}</div></div></section>);
}
