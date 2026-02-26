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
  const services = [
    {
      title: "Biochemistry",
      description:
        "Comprehensive blood chemistry analysis for liver, kidney, and metabolic health assessment.",
      Icon: FlaskConical,
    },
    {
      title: "Haematology",
      description:
        "Complete blood count and advanced testing for anemia, infections, and blood-related disorders.",
      Icon: Droplets,
    },
    {
      title: "Seralogy",
      description:
        "Antibody and antigen testing to support diagnosis of infectious and immune-related conditions.",
      Icon: ShieldCheck,
    },
    {
      title: "Immunology",
      description:
        "Advanced immune diagnostics for allergies, autoimmune conditions, and chronic inflammation monitoring.",
      Icon: Microscope,
    },
    {
      title: "Laboratory Tests Rate List",
      description:
        "View our updated price list for all available laboratory investigations.",
      Icon: FileText,
      href: "/rate-list",
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
      {/* ULTRA PREMIUM NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
            Chengam Diagnostics & Healthcare
          </h1>

          <div className="hidden md:flex gap-8 items-center font-medium">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#staff" className="hover:text-blue-600 transition">
              Staff
            </a>
            <a href="#equipment" className="hover:text-blue-600 transition">
              Equipment
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a
              href="tel:+918119862853"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative max-w-5xl mx-auto text-center text-white"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Advanced Diagnostics.
            <br /> Trusted Care.
          </h2>

          <p className="text-xl opacity-90 mb-10">
            Serving Aizawl with fast reports, modern equipment, and compassionate healthcare professionals.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://wa.me/918119862853"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-105 transition"
            >
              Book on WhatsApp
            </a>

            <a
              href="tel:+918119862853"
              className="border border-white px-8 py-4 rounded-2xl flex items-center gap-2 hover:bg-white hover:text-blue-700 transition"
            >
              <Phone /> Call Clinic
            </a>
          </div>
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <section className="relative -mt-14 z-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            ["5000+", "Patients Served"],
            ["4.7★", "Google Rating"],
            ["5+", "Years Experience"],
            ["Same Day", "Reports Available"],
          ].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={i}
              className="backdrop-blur-xl bg-white/80 shadow-2xl rounded-3xl p-7 text-center hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-blue-700">{item[0]}</h3>
              <p className="text-gray-500 mt-2">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold">Comprehensive Diagnostic Services</h3>
          <p className="text-gray-500 mt-4">
            Precision testing powered by advanced laboratory technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              whileHover={{ y: -12 }}
              key={i}
              className="rounded-3xl shadow-xl hover:shadow-2xl transition p-10 bg-white border"
            >
              <service.Icon className="mb-4 text-blue-600" size={36} />

              {service.href ? (
                <a
                  href={service.href}
                  className="text-xl font-semibold mb-2 text-blue-700 hover:text-blue-800 underline underline-offset-4"
                >
                  {service.title}
                </a>
              ) : (
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              )}

              <p className="text-gray-500">{service.description}</p>

              {service.href && (
                <p className="mt-3 text-sm text-gray-600">Tap to view & download PDF</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* STAFF SECTION */}
      <section id="staff" className="py-28 px-6 bg-white">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold">Meet Our Medical Experts</h3>
          <p className="text-gray-500 mt-4">
            Experienced doctors and friendly healthcare staff dedicated to your wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              name: "Dr.Lalremmawia",
              role: "MD(Internal Medicine), PGDGM(Geriatric), CCEBDM(Diabetes), CCMT(Thyroid)",
              img: "/images/doctors/dr1.png",
            },
            {
              name: "Lalrinngheta",
              role: "Diploma in Pharmacy (D.Pharm),Chengam Diagnostics & Healthcare  Owner",
              img: "/images/doctors/dr2.png",
            },
            {
              name: "Staff",
              role: "Receptionist",
              img: "/images/doctors/dr4.jpg",
            },
             {
              name: "Staff",
              role: "Lab Technician",
              img: "/images/doctors/dr5.jpg",
            },
             {
              name: "Staff",
              role: "Lab Assistant",
              img: "/images/doctors/dr6.jpg",
            },
             
          ].map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-blue-50 rounded-3xl shadow-xl overflow-hidden"
            >
              <img src={person.img} className="h-72 w-full object-cover" alt={person.name} />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold">{person.name}</h4>
                <p className="text-blue-600 font-medium">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLINIC & PHARMACY SECTION */}
      <section id="clinic-pharmacy" className="py-28 px-6 bg-blue-50">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold">Clinic and Pharmacy</h3>
          <p className="text-gray-500 mt-4 max-w-5xl mx-auto leading-relaxed">
            Our clinic is supported by professional and caring medical staff who are dedicated to delivering quality
            healthcare services with a patient-first approach. We provide genuine and high-quality medicines that are
            properly stored to maintain their effectiveness. Our pharmacy offers affordable and trusted services,
            ensuring patients receive the best care in a comfortable environment. We maintain a strong focus on safety,
            cleanliness, and compassionate care at every step.
          </p>
        </div>
      </section>

      {/* LAB PHOTO SECTION */}
      <section id="labphoto" className="py-28 px-6 bg-white">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold">Our Laboratory</h3>
          <p className="text-gray-500 mt-4">Clean, hygienic and well-equipped laboratory environment</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {[
            "/images/labphoto/machine1.png",
            "/images/labphoto/machine2.jpg",
            "/images/labphoto/machine3.JPG",
            "/images/labphoto/machine4.jpg",
            "/images/labphoto/machine5.JPG",
            "/images/labphoto/machine6.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img src={img} className="h-80 w-full object-cover" alt={`labphoto-${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* EQUIPMENT SECTION */}
      <section id="equipment" className="py-28 px-6 bg-blue-50">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold">Advanced Laboratory Equipment</h3>
          <p className="text-gray-500 mt-4">Modern machines ensuring accurate and fast test results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "/images/equipment/machine1.jfif",
            "/images/equipment/machine2.jfif",
            "/images/equipment/machine3.jfif",
            "/images/equipment/machine4.jfif",
            "/images/equipment/machine5.jfif",
            "/images/equipment/machine6.jfif",
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

      {/* ABOUT US */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/images/clinic/machine1.JPG"
            className="rounded-3xl shadow-2xl"
            alt="clinic"
          />

          <div>
            <h3 className="text-4xl font-bold mb-6">About Chengam Diagnostics</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Chengam Diagnostics is committed to delivering high-quality healthcare services with precision, speed,
              and compassion. Our state-of-the-art laboratory, experienced doctors, and modern diagnostic technology
              ensure that every patient receives reliable results and exceptional care.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We believe early detection saves lives. That is why we focus on accuracy, hygiene, and patient comfort
              while maintaining the highest medical standards in Aizawl.
            </p>
          </div>
        </div>
      </section>

    {/* REVIEWS */}
<section id="reviews" className="bg-gradient-to-b from-blue-50 to-white py-28 px-6">
  <div className="text-center mb-20">
    <h3 className="text-4xl md:text-5xl font-extrabold">
      What Patients Say
    </h3>
    <p className="text-gray-500 mt-4">
      Trusted by families across Aizawl
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        name: "Dingtea VArte",
        review:
          "I was impressed with the professionalism and hygiene standards. The reports were accurate and delivered on time.",
      },
      {
        name: "Mami Mami",
        review:
          "Patient care is up to satisfactory level. Patient counselling is done on medications..10 out of 10",
      },
      {
        name: "Lalhruaizeli",
        review:
          "They care about the sick.. They are polite... They are a pleasure to approach the sick.",
      },
    ].map((item, i) => (
      <motion.div
        whileHover={{ y: -10 }}
        key={i}
        className="backdrop-blur-xl bg-white/80 border border-white/40 rounded-3xl shadow-2xl p-8 transition duration-300"
      >
        {/* Stars */}
        <div className="flex gap-1 text-yellow-500 mb-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} fill="currentColor" size={20} />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {item.review}
        </p>

        {/* Profile */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {item.name.charAt(0)}
          </div>

          <div>
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-500">Verified Patient</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* LOCATION */}
      <section id="location" className="py-28 px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold">Visit Our Center</h3>
        </div>

        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-12">
          <iframe
            src="https://maps.google.com/maps?q=Chengam%20Pharmacy%20Aizawl&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          ></iframe>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow">
            <MapPin className="mx-auto text-blue-600 mb-2" />
            C, VLDS Building, 28, Ramhlun N Rd, beside Grace Post Office, Aizawl, Mizoram 796012
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <Clock className="mx-auto text-blue-600 mb-2" />
            Open 7:00am – 8:30pm
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <Phone className="mx-auto text-blue-600 mb-2" />
            +91 8119862853
          </div>
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