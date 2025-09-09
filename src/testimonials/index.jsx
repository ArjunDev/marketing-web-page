import React from 'react'

const TestimonialsPage = () => {

    const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder, StartupX",
      feedback:
        "ABC transformed our online presence. Their strategies brought us real customers and measurable growth!",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Lisa Fox",
      role: "Marketing Manager, PQR",
      feedback:
        "The team’s creativity and data-driven approach helped us boost engagement like never before.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "James Web",
      role: "CEO, XYZ",
      feedback:
        "Professional, innovative, and reliable — exactly what we needed in a digital marketing partner.",
      image:
        "https://randomuser.me/api/portraits/men/54.jpg",
    },
  ];


  return (
    <section id="testimonials" className="py-8 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 md:mb-6 mb-4">What Our Clients Say</h2>

        <p className="text-lg text-gray-600 md:mb-12 mb-6"
        >Hear from businesses that trusted us with their digital growth.
        </p>

        <div className="grid md:gap-8 gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <img
                src={t.image}
                alt={`Photo of ${t.name}`}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPage