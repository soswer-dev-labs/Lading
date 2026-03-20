import React from 'react';
import { Users, Rocket } from 'lucide-react';
import ederImg from '../assets/img/about/Eder.webp';
import luisImg from '../assets/img/about/Luis.webp';

const images = {
  "Eder.webp": ederImg,
  "Luis.webp": luisImg
};

const About = ({ content }) => {
  const { title, titleHighlight, subtitle, profiles, jointInitiative } = content;

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-[10px] font-pixel uppercase tracking-widest mb-6 animate-pulse">
            <Users className="w-4 h-4" />
            <span>Select_Player</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black dark:text-white tracking-tight">
            {title} <span className="text-neon neon-glow">{titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-32 mb-32">
          {profiles.map((profile, index) => {
            const isEven = index % 2 === 0;
            const isEder = profile.name === 'Eder';
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:items-end gap-8 lg:gap-16`}>
                
                {/* Character Image - "Standing" outside the box */}
                <div className="relative group shrink-0">
                  <div className="absolute -inset-4 bg-neon/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={images[profile.image]?.src || profile.image} 
                    alt={profile.name} 
                    className="w-56 h-56 md:w-64 md:h-64 object-contain relative z-10 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_15px_rgba(57,255,20,0.3)] transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* RPG Dialog Box */}
                <div className="flex-1 w-full relative">
                  {/* Dialog Name Tag */}
                  <div className={`absolute -top-4 ${isEven ? 'left-4' : 'right-4'} bg-gray-200 dark:bg-black border-2 border-gray-500 dark:border-neon px-4 py-1.5 z-20 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_rgba(57,255,20,0.3)]`}>
                    <span className="text-gray-900 dark:text-neon font-pixel text-[12px] uppercase tracking-wider">{profile.name}</span>
                  </div>

                  {/* Main Dialog Box */}
                  <div className="bg-gray-50 dark:bg-black border-2 border-gray-400 dark:border-neon/50 p-8 pt-10 relative shadow-[8px_8px_0px_rgba(0,0,0,0.05)] dark:shadow-[8px_8px_0px_rgba(57,255,20,0.1)] group hover:border-gray-600 dark:hover:border-neon transition-colors duration-500">
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-1 h-1 bg-gray-400 dark:bg-neon/30" />
                    <div className="absolute top-2 right-2 w-1 h-1 bg-gray-400 dark:bg-neon/30" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-gray-400 dark:bg-neon/30" />
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-gray-400 dark:bg-neon/30" />

                    <p className="text-gray-600 dark:text-neon/70 font-pixel text-[10px] mb-4 uppercase tracking-widest border-b border-gray-200 dark:border-neon/20 pb-2">
                      Role: {profile.role}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg font-light italic relative">
                      <span className="text-gray-400 dark:text-neon mr-2">"</span>
                      {profile.bio}
                      <span className="text-gray-400 dark:text-neon ml-2">"</span>
                    </p>

                    {/* Dialog Advance Indicator (RPG style) */}
                    <div className="absolute bottom-4 right-4 animate-bounce text-gray-400 dark:text-neon">
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-current" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Joint Initiative - Quest style */}
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-8">
            <span className="font-pixel text-gray-500 dark:text-neon text-[10px] uppercase tracking-[0.3em] animate-pulse">! QUEST_COMPLETED</span>
          </div>
          
          <div className="bg-gray-100 dark:bg-white/[0.02] border-4 border-double border-gray-400 dark:border-neon/30 p-10 md:p-16 relative backdrop-blur-xl transition-colors duration-300">
            {/* Retro frame corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-gray-500 dark:border-neon" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-gray-500 dark:border-neon" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-gray-500 dark:border-neon" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-gray-500 dark:border-neon" />

            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Rocket className="w-64 h-64 text-gray-900 dark:text-neon" />
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 font-pixel uppercase tracking-tighter transition-colors">
                {jointInitiative.title}
              </h3>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl leading-relaxed font-light italic">
                  {jointInitiative.content}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-center gap-6">
                <div className="flex -space-x-2">
                  {profiles.map((p, i) => (
                    <img 
                      key={i}
                      src={images[p.image]?.src || p.image} 
                      className="w-10 h-10 rounded-full border-2 border-gray-400 dark:border-neon shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(57,255,20,0.3)] bg-white dark:bg-black object-contain"
                      alt={p.name}
                    />
                  ))}
                </div>
                <div className="text-gray-400 dark:text-neon/50 font-pixel text-[8px] uppercase tracking-widest">
                  United_Front.exe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
