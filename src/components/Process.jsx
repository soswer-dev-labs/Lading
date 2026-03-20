import React from 'react';
import { 
  ClipboardList, 
  Search, 
  Layout as LayoutIcon, 
  Code2, 
  CheckCircle, 
  Rocket, 
  LifeBuoy 
} from 'lucide-react';

const icons = {
  ClipboardList,
  Search,
  Layout: LayoutIcon,
  Code2,
  CheckCircle,
  Rocket,
  LifeBuoy
};

const Process = ({ content }) => {
  const { title, titleHighlight, subtitle, steps } = content;

  return (
    <section id="process" className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            {title} <span className="text-neon">{titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon/50 via-neon/20 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const IconComponent = icons[step.icon] || Code2;
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Step Number Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-black border-2 border-gray-400 dark:border-neon z-20 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(57,255,20,0.4)] transition-colors duration-300">
                    <span className="text-gray-900 dark:text-neon font-bold text-sm">{index + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:border-neon/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] relative overflow-hidden">
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex p-3 rounded-xl bg-neon/10 text-neon mb-6 group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white group-hover:text-neon transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Mobile Step Number */}
                      <div className="absolute top-4 right-4 lg:hidden w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center border border-neon/30">
                        <span className="text-neon font-bold text-xs">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
