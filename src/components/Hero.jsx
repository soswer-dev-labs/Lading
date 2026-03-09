import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const Hero = ({ content }) => {
  const { badge, titlePrefix, titleHighlight, description, primaryCta, secondaryCta, stats } = content;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Theme background textures with gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img src="/dark_bg.jpg" alt="Dark background texture" className="hidden dark:block w-full h-full object-cover absolute inset-0" style={{zIndex:0}} />
        <img src="/light_bg.jpg" alt="Light background texture" className="block dark:hidden w-full h-full object-cover absolute inset-0" style={{zIndex:0}} />
        {/* Single color gradient overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="block dark:hidden w-full h-full transition-all duration-700" style={{zIndex:1,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 100%)'}} />
          <div className="hidden dark:block w-full h-full transition-all duration-700" style={{zIndex:1,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,  rgba(0,0,0,1) 100%)'}} />
        </div>
      </div>
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon/20 rounded-full blur-[128px] opacity-50"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[128px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-sm font-medium mb-8 animate-fade-in-up">
          <Zap className="w-4 h-4" />
          <span>{badge}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
          {titlePrefix} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-green-400 to-emerald-500 neon-glow">
            {titleHighlight}
          </span>
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-300">
          <a href="#services" className="px-8 py-3 bg-neon hover:bg-neon-hover text-black font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-neon/20">
            {primaryCta}
            <ChevronRight className="w-4 h-4" />
          </a>
          <a href="/contact" className="px-8 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300">
            {secondaryCta}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-200 dark:border-white/10 pt-10 animate-fade-in-up delay-400">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold text-neon mb-1">{stat.value}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
