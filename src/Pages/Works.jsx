import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';

import project1 from '../assets/works/project1.jpg';
import project2 from '../assets/works/project2.jpg';
import project3 from '../assets/works/project3.jpg';
import project4 from '../assets/works/project4.jpg';

export default function Works() {
  return (
    <section className="relative min-h-screen bg-[#111111] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div className="pt-72 pb-20">
        {/* PROJECT ONE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[1400px] mx-auto px-10 md:px-20 mb-60"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* LEFT TEXT */}
            <div className="w-full md:w-[40%] flex flex-col justify-center items-start">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[1.08] mb-10">
                RA.ONE <br /> Reimagined
              </h2>

              <p className="text-lg text-gray-400 max-w-md font-light leading-relaxed">
                A cinematic fan-made teaser inspired by RA.ONE, blending modern VFX, transitions and
                atmospheric visuals.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full md:w-[46%]">
              <a
                href="https://youtu.be/eRhUcJTJxVA?si=UMFlFS22XV3gzikC"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-[760px] w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                  <img
                    src={project1}
                    alt="project1"
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-[1.03]
                      transition-transform
                      duration-700
                    "
                  />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* PROJECT TWO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[1400px] mx-auto px-10 md:px-20 mb-60"
        >
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
            {/* RIGHT TEXT */}
            <div className="w-full md:w-[40%] flex flex-col justify-center items-start md:items-end md:text-right">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[1.08] mb-10">
                Screen <br /> Emergence
              </h2>

              <p className="text-lg text-gray-400 max-w-md font-light leading-relaxed">
                A compositing experiment focused on rotoscoping, screen interaction and cinematic
                visual effects.
              </p>
            </div>

            {/* LEFT CARD */}
            <div className="w-full md:w-[46%]">
              <a
                href="https://www.youtube.com/watch?v=W4hiQLvIblY"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-[760px] w-full bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={project2}
                    alt="project2"
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-[1.03]
                      transition-transform
                      duration-700
                    "
                  />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* PROJECT THREE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[1400px] mx-auto px-10 md:px-20 mb-60"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* LEFT TEXT */}
            <div className="w-full md:w-[40%] flex flex-col justify-center items-start">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[1.08] mb-10">
                Visual <br /> Experiment
              </h2>

              <p className="text-lg text-gray-400 max-w-md font-light leading-relaxed">
                A short cinematic edit exploring mood, motion and storytelling through visuals.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full md:w-[46%]">
              <a
                href="https://www.youtube.com/shorts/g1XLwkRJKnU"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-[760px] w-full bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={project3}
                    alt="project3"
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-[1.03]
                      transition-transform
                      duration-700
                    "
                  />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* PROJECT FOUR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 80 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[1400px] mx-auto px-10 md:px-20 mb-60"
        >
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
            {/* RIGHT TEXT */}
            <div className="w-full md:w-[40%] flex flex-col justify-center items-start md:items-end md:text-right">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[1.08] mb-10">
                A Brief <br /> History Of Tea
              </h2>

              <p className="text-lg text-gray-400 max-w-md font-light leading-relaxed">
                A motion graphic exploring tea’s journey from ancient China to becoming one of the
                world’s most loved beverages.
              </p>
            </div>

            {/* LEFT CARD */}
            <div className="w-full md:w-[46%]">
              <a href="YOUR_VIDEO_LINK" target="_blank" rel="noopener noreferrer" className="block">
                <div className="h-[760px] w-full bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={project4}
                    alt="project4"
                    className="
              w-full
              h-full
              object-cover
              hover:scale-[1.03]
              transition-transform
              duration-700
            "
                  />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
