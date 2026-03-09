import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = ({ content }) => {
  const { badge, title, titleHighlight, description, primaryCta, secondaryCta, stats } = content;

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0 bg-neon/5 skew-y-3 transform origin-bottom-left -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          {badge}
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
          {title} <span className="text-neon">{titleHighlight}</span>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="/contact" className="px-8 py-4 bg-neon hover:bg-neon-hover text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(57,255,20,0.4)]">
            {primaryCta}
          </a>
          <button className="px-8 py-4 bg-gray-100 dark:bg-transparent border border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/5 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2">
            {secondaryCta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {stats.map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-sm">
              <h4 className="text-neon font-bold text-xl mb-1">{item.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
