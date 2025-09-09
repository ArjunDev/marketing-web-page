import React from 'react';
import { Briefcase, BarChart, Megaphone, Globe } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Digital Strategy",
      description:
        "Craft tailored marketing strategies that help your brand stand out in a competitive digital world.",
      icon: <Briefcase className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
    },
    {
      id: 2,
      title: "SEO Optimization",
      description:
        "Boost your search visibility with keyword-driven, content-focused optimization techniques.",
      icon: <BarChart className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description:
        "Engage your audience and grow your reach with tailored social media campaigns across all platforms.",
      icon: <Megaphone className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
    },
    {
      id: 4,
      title: "Global Outreach",
      description:
        "Expand your brand presence across borders with strategies focused on global audience engagement.",
      icon: <Globe className="w-8 h-8 text-indigo-600" aria-hidden="true" />,
    },
  ];


  return (
    <section id="services" className="py-2 md:py-4 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <div className="grid md:gap-8 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className='flex justify-center items-center gap-2 mb-2'>
                <div>{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2"
              >{service.title}</h3>
              </div>

              <p className="text-gray-600 text-sm">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage