import Navbar from '../Components/Navbar';
import aboutImage from '../assets/about/about-main9.png';
import aboutImage2 from '../assets/about/about-main8.png';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative bg-[#111] overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* FIRST IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.4,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
      >
        <img
          src={aboutImage}
          alt="about1"
          className="w-full min-h-screen object-cover"
        />
      </motion.div>

      {/* SECOND IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
      >
        <img
          src={aboutImage2}
          alt="about2"
          className="w-full min-h-screen object-cover"
        />
      </motion.div>
    </section>
  );

}