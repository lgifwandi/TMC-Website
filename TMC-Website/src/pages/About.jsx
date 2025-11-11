
import React from 'react';
import { motion } from 'framer-motion';
export default function About() {
  const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 } };
  return (<section className="py-20 bg-slate-50"><div className="max-w-6xl mx-auto px-4"><motion.div {...fadeUp}><h2 className="text-3xl font-semibold">About Us</h2><p className="mt-3 max-w-3xl">Transfiguration Ministry Church is a Christ-centered community in Burtonsville, Maryland. We seek to encounter God’s presence, be transformed by His grace, and serve our city through practical love. Our core beliefs affirm the authority of the Bible, salvation by grace through faith, and the power of the Holy Spirit to change lives and communities.</p></motion.div></div></section>);
}
