import Navbar from '../Components/Navbar';
import contactImage from '../assets/contact/contact-main4.png';

import mailIcon from '../assets/icons/mail.png';
import phoneIcon from '../assets/icons/phone.png';
import instagramIcon from '../assets/icons/instagram2.png';
import youtubeIcon from '../assets/icons/youtubeIcon.svg';
import behanceIcon from '../assets/icons/behanceIcon.svg';

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* TOP CONTACT SECTION */}
      <div className="w-full min-h-screen flex items-center justify-start pl-10 pr-16">
        <div className="flex items-center gap-32">
          {/* LEFT IMAGE */}
          <div className="relative">
            <img src={contactImage} alt="contact" className="w-[760px] object-contain" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-12 mt-8">
            {/* EMAIL */}
            <div className="flex items-center gap-6">
              <img src={mailIcon} alt="mail" className="w-10 h-10 object-contain opacity-90" />

              <div className="text-[1.9rem] tracking-wide text-[#f2f2f2]">
                auditsaudits738@gmail.com
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-6">
              <img src={phoneIcon} alt="phone" className="w-10 h-10 object-contain opacity-90" />

              <div className="text-[1.9rem] tracking-wide text-[#f2f2f2]">+91 9818418456</div>
            </div>

            {/* YOUTUBE */}
            <div className="flex items-center gap-6">
              <img
                src={youtubeIcon}
                alt="youtube"
                className="w-10 h-10 object-contain opacity-90"
              />

              <a
                href="https://youtube.com/@kavedits1008?si=I3hqD49gaquinkXn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[2.2rem]
                  text-[#f2f2f2]
                  hover:text-[#bdbdbd]
                  transition
                  duration-300
                "
                style={{
                  fontFamily: 'cursive',
                }}
              >
                YouTube / kavyasharma
              </a>
            </div>

            {/* INSTAGRAM */}
            <div className="flex items-center gap-6">
              <img
                src={instagramIcon}
                alt="instagram"
                className="w-10 h-10 object-contain opacity-90"
              />

              <a
                href="https://www.instagram.com/bhataktaa_hua_jinn?igsh=bWZxNDRndW9nYTEw"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[2.2rem]
                  text-[#f2f2f2]
                  hover:text-[#bdbdbd]
                  transition
                  duration-300
                "
                style={{
                  fontFamily: 'cursive',
                }}
              >
                instagram / kavyasharma
              </a>
            </div>

            {/* BEHANCE */}
            <div className="flex items-center gap-6">
              <img
                src={behanceIcon}
                alt="behance"
                className="w-10 h-10 object-contain opacity-90"
              />

              <a
                href="https://www.behance.net/kavsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[2.2rem]
                  text-[#f2f2f2]
                  hover:text-[#bdbdbd]
                  transition
                  duration-300
                "
                style={{
                  fontFamily: 'cursive',
                }}
              >
                behance / kavyasharma
              </a>
            </div>

            {/* WANT TO SHARE SOMETHING */}

            {/*
            <div className="mt-12 pl-1">
              <Link
                to="/message"
                className="
                  text-3xl
                  text-white/80
                  tracking-wide
                  hover:text-white
                  transition-all
                  duration-300
                  hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]
                "
                style={{
                  fontFamily: 'cursive',
                }}
              >
                Want to share something?
              </Link>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="
          w-full
          border-t
          border-white/10
          mt-10
          min-h-[220px]
          px-20
          md:px-28
          flex
          items-center
          justify-between
          bg-[#050505]
        "
      >
        {/* LEFT TEXT */}
        <div className="text-white/90 text-2xl tracking-wide">
          © 2026 Kavya.co , All rights reserved .
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="
            w-16
            h-16
            rounded-full
            bg-[#151515]
            text-white
            text-4xl
            flex
            items-center
            justify-center
            hover:scale-110
            transition
            duration-300
          "
        >
          ↑
        </button>
      </footer>
    </section>
  );
}
