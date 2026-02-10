
import React from 'react';
import { Lightbulb, Users, Shield } from 'lucide-react';

const VALUES = [
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
    title: 'Innovation',
    description: 'Continuously advancing AI and automation to help practices operate more efficiently, book more patients, and stay ahead in a rapidly changing healthcare landscape.',
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    title: 'Collaboration',
    description: 'Working closely with providers and staff to integrate seamlessly into existing systems, enhance front-desk operations, and create a smoother experience for every patient.',
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-400" />,
    title: 'Trust & Security',
    description: "Protecting patient data with strict security standards and ensuring reliability at every step—because in healthcare, trust isn't optional, it's essential.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At Elara, we've spent the last five years building AI systems that help healthcare practices grow faster and operate more efficiently.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-8 md:p-12 rounded-3xl glass border">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              Eliminate front-desk bottlenecks, capture every patient opportunity, and help practices scale effortlessly with the power of AI.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Story</h3>
          <p className="text-gray-400 text-lg leading-relaxed text-center">
            Elara was founded by two college friends who shared a vision—to use AI to innovate how businesses capitalize on communication.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Values</h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            At Elara, our values guide how we build, innovate, and partner with healthcare practices. These principles keep us focused on creating AI that improves patient experience, supports care teams, and drives measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {VALUES.map((value, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass border group hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
