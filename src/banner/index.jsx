import React from 'react';
import { Link } from "react-router-dom";

const BannerPage = () => {

  return (
    <section
      aria-label="Digital Marketing Agency Hero Banner"
      className="bg-gradient-to-r from-indigo-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-20 py-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight h-auto">Digital Marketing Agency for Startups & Modern Brands</h1>

        <p className="mt-6 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          ABC Digital helps businesses grow with <strong>SEO</strong>,<strong> paid ads</strong>, and <strong>content marketing</strong> that drive real results. Scale your brand with strategies designed for success.
        </p>

        <div className="mt-8">
          <Link
            to="/contact"
            className="px-4 py-2 md:px-8 md:py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
          >Get Started</Link>
        </div>
      </div>
    </section>
  )
}

export default BannerPage