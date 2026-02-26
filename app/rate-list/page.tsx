"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export default function RateListPage() {
  const pdfUrl = "/pdfs/rate-list.pdf";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">

      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700">
              Laboratory Tests Rate List
            </h1>
            <p className="text-gray-600 mt-2">
              View our updated price list below or download the PDF.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/"
              className="flex items-center gap-2 px-5 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl transition"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <a
              href={pdfUrl}
              download
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>

        {/* PDF VIEWER CARD */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border">
          <iframe
            src={pdfUrl}
            title="Laboratory Tests Rate List"
            className="w-full"
            style={{ height: "85vh", border: 0 }}
          />
        </div>

        {/* MOBILE FALLBACK */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            If the PDF doesn’t load on your device,
          </p>
          <a
            href={pdfUrl}
            target="_blank"
            className="text-blue-700 font-semibold underline mt-2 inline-block"
          >
            Tap here to open in new tab
          </a>
        </div>

      </div>
    </div>
  );
}