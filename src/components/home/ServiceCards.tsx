// components/home/ServiceCards.tsx
const services = [
  {
    title: 'Design & Build',
    description: 'End-to-end architectural and interior design, tailored to your vision.',
    icon: '',
  },
  {
    title: 'Furniture Procurement',
    description: 'Bespoke sourcing of high-end furnishings and decorative pieces.',
    icon: '',
  },
  {
    title: 'Renovation Management',
    description: 'Expert project oversight from planning to flawless execution.',
    icon: '',
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white text-dark">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-beige p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold font-serif mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
