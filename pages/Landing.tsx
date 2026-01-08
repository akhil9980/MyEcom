import React from "react";
import { Link } from "react-router-dom";
import {
  Play,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-50" />

      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-50 flex justify-between items-center px-6 lg:px-24 py-6 border-b border-white/10"
      >
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-white text-xl font-serif font-bold tracking-[0.15em]">
              ONCY TECH
            </h2>
            <p className="text-white/60 text-xs tracking-wider">
              Premium Fashion
            </p>
          </div>
        </div>

        <motion.a
          href="tel:9599663171"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all"
        >
          <Phone size={16} className="text-white" />
          <span className="text-white text-sm font-medium">9599663171</span>
        </motion.a>
      </motion.nav>
      {/* Hero Banner Section */}
      <div className="relative mx-auto py-20 w-full">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-24 lg:pt-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-md text-center lg:mx-[10rem] lg:flex-auto lg:py-32 lg:text-left lg:scale-150"
          >
            <div>
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4 block"
                >
                  Spring / Summer 2026
                </motion.span>
                <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl leading-[1.1] mb-6">
                  Celebration of{" "}
                  <span className="italic text-white/80">individuality</span>
                  <br />
                  and style
                </h1>
                <p className="text-md leading-relaxed text-gray-400 font-light">
                  At ONCY TECH, we believe that true fashion comes from within,
                  and it's all about embracing your unique self.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/home"
                    className="bg-white text-black font-bold rounded-full px-8 py-4 text-sm tracking-wider shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all"
                  >
                    Get started
                  </Link>
                </motion.div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-white cursor-pointer relative hover:text-gray-300 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm hover:border-white/50 transition-colors">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </motion.a>
              </div>
              <div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col-reverse"
                  >
                    <dt className="text-[10px] leading-7 text-gray-500 tracking-wider uppercase">
                      New Customers
                    </dt>
                    <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                      300+
                    </dd>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col-reverse"
                  >
                    <dt className="text-[10px] leading-7 text-gray-500 tracking-wider uppercase">
                      Products Sold
                    </dt>
                    <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                      200+
                    </dd>
                  </motion.div>
                </dl>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Product Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative isolate lg:pt-0">
              <div className="relative top-[8rem] h-[35rem] w-[55rem] overflow-hidden rounded-[150px] bg-gradient-to-br from-zinc-800 to-zinc-900 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 transition-all duration-500 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
                  alt="Fashion Background"
                  className="h-full w-full object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Product Card 1 */}
              <div className="flex space-x-4 cursor-pointer">
                <div>
                  <div className="absolute top-[6rem] right-[5rem] h-[26rem] w-[20rem] overflow-hidden rounded-[88px] bg-white shadow-2xl sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 hover:shadow-3xl transition-all duration-500 animate-bounce border border-white/20">
                    <div className="absolute top-2 left-2 h-[19rem] w-[19rem] overflow-hidden rounded-[78px] bg-gradient-to-br from-gray-700 to-gray-900 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                      <img
                        src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800"
                        alt="Italian Coat"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h1 className="flex flex-1 text-2xl font-semibold leading-9 tracking-tight relative top-[21rem] left-2 mx-[3rem] text-black bg-white/90 backdrop-blur-sm border border-gray-200 pb-2 pt-2 pr-2 pl-4 rounded-[1.3rem] shadow-lg">
                      Italian Coat
                    </h1>
                  </div>
                  <div className="z-50 absolute top-[26rem] right-[21rem] h-[8rem] w-[8rem] overflow-hidden rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-xl sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-110 hover:shadow-2xl transition-all duration-500 animate-bounce-delayed flex justify-center items-center border-2 border-white/20">
                    <h1 className="text-3xl font-bold leading-9 tracking-tight text-white">
                      10% <br />
                      <span className="text-sm">OFF</span>
                    </h1>
                  </div>
                </div>
              </div>
              {/* Product Card 2 */}
              <div className="absolute right-[28rem] top-5 scale-75">
                <div className="flex space-x-4 cursor-pointer">
                  <div>
                    <div className="absolute top-[6rem] right-[5rem] h-[26rem] w-[20rem] overflow-hidden rounded-[88px] bg-white shadow-2xl sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 hover:shadow-3xl transition-all duration-500 animate-bounce border border-white/20">
                      <div className="absolute top-2 left-2 h-[19rem] w-[19rem] overflow-hidden rounded-[78px] bg-gradient-to-br from-gray-700 to-gray-900 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                        <img
                          src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800"
                          alt="Shorts"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h1 className="flex flex-1 text-2xl font-semibold leading-9 tracking-tight relative top-[21rem] left-2 mx-[3rem] text-black bg-white/90 backdrop-blur-sm border border-gray-200 pb-2 pt-2 pr-2 pl-4 rounded-[1.3rem] shadow-lg">
                        Shorts
                      </h1>
                    </div>
                    <div className="z-50 absolute top-[26rem] right-[21rem] h-[8rem] w-[8rem] overflow-hidden rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 shadow-xl sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-110 hover:shadow-2xl transition-all duration-500 animate-bounce-delayed flex justify-center items-center border-2 border-white/20">
                      <h1 className="text-3xl font-bold leading-9 tracking-tight text-white">
                        15% <br />
                        <span className="text-sm">OFF</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Promo Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative overflow-hidden bg-black"
      >
        <div className="pb-32 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-32">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="sm:max-w-lg"
            >
              <span className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 block">
                Discover Excellence
              </span>
              <h1 className="text-5xl font-serif font-bold tracking-tight text-white sm:text-6xl mb-6">
                Step into the world of{" "}
                <span className="text-white/80 italic">ONCY TECH</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                where we encourage you to break free from the ordinary and
                embrace your own unique fashion journey
              </p>

              {/* Contact Information */}
              <div className="space-y-4 border-t border-white/10 pt-6 mt-8">
                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone size={18} />
                  <a href="tel:9599663171" className="text-sm tracking-wide">
                    +91 9599663171
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail size={18} />
                  <a
                    href="mailto:contact@oncytech.com"
                    className="text-sm tracking-wide"
                  >
                    contact@oncytech.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} />
                  <span className="text-sm tracking-wide">
                    New Delhi, India
                  </span>
                </div>
              </div>
            </motion.div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="group grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 animate-scroll">
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] sm:opacity-0 lg:opacity-100 border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 1"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 2"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 3"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 4"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 animate-scroll">
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 5"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 6"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 7"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem] border border-white/10">
                          <img
                            src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 8"
                            className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/home"
                    className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-medium hover:bg-white hover:text-black transition-all duration-500"
                  >
                    <span className="text-sm tracking-[0.2em] uppercase">
                      Enter Store
                    </span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="relative border-t border-white/10 bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">OT</span>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-serif font-bold tracking-[0.15em]">
                    ONCY TECH
                  </h3>
                  <p className="text-white/50 text-xs tracking-wider">
                    Premium Fashion
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Elevating everyday aesthetics through premium materials and
                timeless design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/home"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="tel:9599663171"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-[0.2em] uppercase mb-6">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:9599663171"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="text-sm">+91 9599663171</span>
                </a>
                <a
                  href="mailto:contact@oncytech.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={14} />
                  </div>
                  <span className="text-sm">contact@oncytech.com</span>
                </a>

                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Instagram size={16} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Facebook size={16} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Twitter size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs tracking-wider">
              © 2026 ONCY TECH. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes bounce-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes scroll {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-100%);
          }
        }

        .animate-bounce {
          animation: bounce 3s infinite ease-in-out;
        }

        .animate-bounce-delayed {
          animation: bounce-delayed 2.8s infinite ease-in-out;
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;
