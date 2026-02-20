"use client";

import Image from "next/image";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#F5F7F2] flex flex-col items-center justify-center px-6 text-center font-sans relative overflow-hidden">
      
      {/* Soft Ambient Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8A9A5B]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3A4D39]/20 blur-[120px] rounded-full" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-md w-full bg-white rounded-[3rem] p-10 shadow-[0_30px_80px_rgba(58,77,57,0.15)] border border-[#E0E5D2]"
      >
        
        {/* Logo */}
        {/*
        <Image
          src="/images/wLogo.png"
          alt="Sparky"
          width={140}
          height={40}
          className="mx-auto mb-8 object-contain"
        />
        */}

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[#F5F7F2] px-4 py-2 rounded-full mb-6">
          <Sparkles size={16} className="text-[#8A9A5B]" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#3A4D39]">
            Premium Home Services
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[34px] font-extrabold tracking-tight text-[#1A2421] leading-tight mb-4">
          Something <br />
          <span className="text-[#3A4D39] italic">Beautiful</span> is Coming
        </h1>

        {/* Subtext */}
        <p className="text-[#6B7A63] text-[15px] font-medium leading-relaxed mb-8">
          Salon-quality beauty and trusted home services — delivered by
          verified professionals, right to your doorstep.
        </p>

        {/* Feature Highlights */}
        <div className="space-y-4 mb-10 text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F7F2] flex items-center justify-center">
              <ShieldCheck size={20} className="text-[#3A4D39]" />
            </div>
            <span className="text-[14px] font-bold text-[#3A4D39]">
              Verified & Trained Experts
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F7F2] flex items-center justify-center">
              <Clock size={20} className="text-[#3A4D39]" />
            </div>
            <span className="text-[14px] font-bold text-[#3A4D39]">
              Fast, Reliable, On-Time Service
            </span>
          </div>

        </div>

        {/* Coming Soon Badge */}
        <div className="bg-[#3A4D39] text-white py-4 rounded-[1.75rem] shadow-lg">
          <p className="text-[12px] font-black uppercase tracking-[0.3em]">
            Launching Soon
          </p>
          <p className="text-[10px] text-white/70 mt-1 tracking-widest">
            Starting with Beauty & Home Care
          </p>
        </div>

      </motion.div>

      {/* Footer */}
      <p className="mt-10 text-[11px] font-semibold text-[#6B7A63] uppercase tracking-[0.2em] relative z-10">
        © {new Date().getFullYear()} Sparky • Crafted with Care
      </p>
    </div>
  );
}
