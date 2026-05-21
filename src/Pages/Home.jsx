import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import homeImage from '../assets/home/homebg-main5.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#e8dfd2]">
      {/* CINEMATIC BACKGROUND */}
      <motion.img
        src={homeImage}
        alt="home"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* SOFT GRAIN EFFECT */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
        }}
      ></div>

      {/* NAVIGATION BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
          ease: 'easeOut',
        }}
        className="
          absolute
          bottom-[5%]
          left-1/2
          -translate-x-1/2
          flex
          gap-8
          z-20
        "
      >
        {/* ABOUT */}
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/about')}
          className="
            w-[280px]
            h-[110px]
            rounded-[35px]
            bg-[#d8cfc1]/88
            backdrop-blur-md
            border-2
            border-[#8f7d68]
            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            flex
            items-center
            justify-center
            cursor-pointer
            transition-all
            duration-300
          "
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold tracking-wide text-[#3a2e25]">ABOUT ME</span>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '7rem' }}
              transition={{
                delay: 1.4,
                duration: 1,
              }}
              className="h-[3px] bg-[#c08b3e] mt-2 rounded-full"
            />
          </div>
        </motion.div>

        {/* WORKS */}
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/works')}
          className="
            w-[280px]
            h-[110px]
            rounded-[35px]
            bg-[#d8cfc1]/88
            backdrop-blur-md
            border-2
            border-[#8f7d68]
            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            flex
            items-center
            justify-center
            cursor-pointer
            transition-all
            duration-300
          "
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold tracking-wide text-[#3a2e25]">WORK</span>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '7rem' }}
              transition={{
                delay: 1.6,
                duration: 1,
              }}
              className="h-[3px] bg-[#c08b3e] mt-2 rounded-full"
            />
          </div>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/contact')}
          className="
            w-[280px]
            h-[110px]
            rounded-[35px]
            bg-[#d8cfc1]/88
            backdrop-blur-md
            border-2
            border-[#8f7d68]
            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            flex
            items-center
            justify-center
            cursor-pointer
            transition-all
            duration-300
          "
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold tracking-wide text-[#3a2e25]">CONTACT</span>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '7rem' }}
              transition={{
                delay: 1.8,
                duration: 1,
              }}
              className="h-[3px] bg-[#c08b3e] mt-2 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
