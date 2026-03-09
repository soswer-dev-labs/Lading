import React from 'react';
import { Code2, Cloud, Server, Plug, Smartphone, Lightbulb } from 'lucide-react';

const iconMap = {
  'Code2': Code2,
  'Cloud': Cloud,
  'Server': Server,
  'Plug': Plug,
  'Smartphone': Smartphone,
  'Lightbulb': Lightbulb,
};

const Services = ({ content }) => {
  const { title, titleHighlight, description, items } = content;

  return (
    <section id="services" className="py-20 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            {title} <span className="text-neon">{titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service, index) => {
            const Icon = iconMap[service.iconName] || Code2;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-neon/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(57,255,20,0.1)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors">
                  <Icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-neon transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
