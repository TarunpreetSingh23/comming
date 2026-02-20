"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] overflow-hidden text-white font-[Poppins]">

      {/* Animated Gradient Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[160px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/30 blur-[140px] rounded-full bottom-[-100px] right-[-100px] animate-pulse" />

      {/* Floating Sparkles */}
      <Sparkles className="absolute top-20 left-20 text-white/20 animate-bounce" size={40} />
      <Sparkles className="absolute bottom-32 right-32 text-white/20 animate-pulse" size={28} />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-[40px] p-12 max-w-lg w-full text-center"
      >
        {/* Brand */}
        <h2 className="text-sm tracking-[0.4em] uppercase text-white/70 mb-6">
          Premium Beauty & Home Services
        </h2>

        {/* Headline */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
          The Future of
          <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent italic">
            At-Home Luxury
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/70 text-sm leading-relaxed mb-10">
          Salon-quality beauty and trusted home care —
          delivered by elite professionals at your doorstep.
          Seamless. Safe. Stunning.
        </p>

        {/* Features */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex flex-col items-center text-xs">
            <ShieldCheck className="mb-2 text-green-400" />
            Verified Experts
          </div>

          <div className="flex flex-col items-center text-xs">
            <Clock className="mb-2 text-blue-400" />
            On-Time Service
          </div>
        </div>

        {/* Launch Button */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300" />
          <button className="relative px-10 py-3 bg-black rounded-full text-sm tracking-widest uppercase font-semibold">
            Launching Soon
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-6 text-xs text-white/50 tracking-widest">
        © {new Date().getFullYear()} Sparky — Redefining Home Services
      </div>
    </div>
  );
}
