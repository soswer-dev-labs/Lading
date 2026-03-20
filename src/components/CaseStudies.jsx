import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import keepDmDashboard from '../assets/img/keepdm/keepdm-dashboard_.webp';
import mySpaceStorefront from '../assets/img/my_space/my-space-storefront.webp';
import wLunaRegistro from '../assets/img/W-luna/w-luna-registro.webp';
import facturacionWallpaper from '../assets/img/facturacion/facturacion-wallpaper.webp';

const getAssetSrc = (asset) => (typeof asset === 'string' ? asset : asset?.src);

const projectImages = {
  keepdm: keepDmDashboard,
  'my-space-online': mySpaceStorefront,
  'w-luna': wLunaRegistro,
  'electronic-billing-module': facturacionWallpaper,
};

const CaseStudies = ({ content, lang = 'en' }) => {
  const { title, titleHighlight, description, viewCaseStudy, viewAllProjects, items } = content;
  const projectsHref = lang === 'es' ? '/es/projects' : '/projects';
  const projectBaseHref = lang === 'es' ? '/es/projects' : '/projects';

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            {title} <span className="text-neon">{titleHighlight}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((project, index) => (
            (() => {
              const localImage = projectImages[project.slug];
              const imageSrc = getAssetSrc(localImage) || project.image;

              return (
            <div 
              key={index} 
              className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-neon/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-none"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={imageSrc}
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-neon transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-neon bg-neon/10 rounded-full border border-neon/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={`${projectBaseHref}/${project.slug}`}
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10 flex items-center text-sm font-medium text-neon hover:underline"
                >
                  {viewCaseStudy}
                </a>
              </div>
            </div>
              );
            })()
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={projectsHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon text-black font-semibold hover:bg-neon-hover transition-colors"
          >
            {viewAllProjects}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
