"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Microscope,
  Star,
  MapPin,
  Clock,
  FlaskConical,
  Droplets,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function ChengamHomepage() {

  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
      {/* ULTRA PREMIUM NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Chengam Diagnostics & Healthcare
          </h1>

          <div className="hidden md:flex gap-8 items-center font-medium">
            <a
              href="tel:+918119862853"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* EQUIPMENT SECTION */}
      <section id="equipment" className="py-28 px-6 bg-blue-50">
        <div className="text-center mb-20">
          <h3 className="text-6xl font-bold">OFFER PACKAGES</h3>
          <p className="text-gray-500 mt-4">PRIMARY HEALTH CHECK UP</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "/images/offer/offer1.png",
            "/images/offer/offer1.png",
                "/images/offer/offer1.png",
                "/images/offer/offer1.png",
                "/images/offer/offer1.png",
            
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img src={img} className="h-80 w-full object-cover" alt={`equipment-${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <h3 className="text-5xl font-bold mb-6">Need a Test? Get Booked in Minutes.</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="tel:+918119862853"
            className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/918119862853"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 px-10 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold text-white mb-3">Chengam Diagnostics</h4>
            <p>Serving Aizawl with trusted diagnostics and modern healthcare.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <p>Services</p>
            <p>Book Test</p>
            <p>Health Blog</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p>Phone: +91 8119862853</p>
            <p>Email: clinic@email.com</p>
          </div>
        </div>

        <p className="text-center mt-10 text-sm">
          © {new Date().getFullYear()} Chengam Diagnostics. All rights reserved.
        </p>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <a
          href="https://wa.me/918119862853"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
        >
          <MessageCircle />
        </a>

        <a
          href="tel:+918119862853"
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
        >
          <Phone />
        </a>
      </div>
    </div>
  );
}