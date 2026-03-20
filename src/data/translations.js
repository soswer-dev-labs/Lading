import { Code2, Cloud, Server, Plug, Smartphone, Lightbulb } from 'lucide-react';

export const translations = {
  en: {
    meta: {
      title: "SOSWER - Transforming Ideas Into Powerful Software",
      description: "Transforming Ideas Into Powerful Software"
    },
    nav: {
      links: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/#services' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Contact', href: '/contact' },
      ],
      cta: "Get in Touch"
    },
    hero: {
      badge: "Next-Gen Software Solutions",
      titlePrefix: "Elevating Businesses Through",
      titleHighlight: "Expert Software",
      description: "We build custom digital solutions that drive growth, streamline operations, and enhance user experiences. From SaaS platforms to custom internal tools.",
      primaryCta: "Get in Touch",
      secondaryCta: "View our Work",
      stats: [
        { value: "13+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "7+", label: "Enterprise Clients" },
        { value: "24/7", label: "Support Available" }
      ]
    },
    services: {
      title: "Our",
      titleHighlight: "Services",
      description: "We offer SaaS solutions and software services to accelerate your business transformation. Explore our ready-to-use platforms and expert development capabilities.",
      items: [
        {
          title: 'Custom Software Development',
          description: 'Tailored software solutions built from the ground up to meet your unique business requirements and drive operational efficiency.',
          iconName: 'Code2',
        },
        {
          title: 'SaaS Services',
          description: 'Access our scalable, cloud-based SaaS platforms for business growth, with subscription management and seamless integrations.',
          iconName: 'Cloud',
        },
        {
          title: 'Cloud Architecture & DevOps',
          description: 'Robust infrastructure design, automated CI/CD pipelines, and cloud optimization for AWS, Azure, and Google Cloud Platform.',
          iconName: 'Server',
        },
        {
          title: 'API Development & Integration',
          description: 'RESTful and GraphQL APIs that enable seamless system connections, third-party integrations, and microservices architecture.',
          iconName: 'Plug',
        },
        {
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
          iconName: 'Smartphone',
        },
        {
          title: 'Technical Consulting',
          description: 'Expert guidance on technology strategy, architecture decisions, and digital transformation to maximize your business goals.',
          iconName: 'Lightbulb',
        },
      ]
    },
    caseStudies: {
      title: "Case",
      titleHighlight: "Studies",
      description: "Real-world success stories showcasing our expertise in delivering transformative software solutions.",
      viewCaseStudy: "View Case Study",
      viewAllProjects: "View All Projects",
      items: [
        {
          slug: 'keepdm',
          title: 'KeepDM',
          description: 'A dashboard creator tool to manage your own insights.',
          tags: ['React', 'TypeScript', 'Vite', 'FastAPI', 'MongoDB'],
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          slug: 'my-space-online',
          title: 'My Space Online',
          description: 'An e-commerce platform built for a stationery business.',
          tags: ['WordPress', 'Elementor', 'E-commerce'],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          slug: 'w-luna',
          title: 'W-luna',
          description: 'A parking management system with shift changes, vehicle check-in and check-out, ticket printing, and e-bill generation.',
          tags: ['React', 'TypeScript', 'Vite', 'Django', 'PostgreSQL'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          slug: 'electronic-billing-module',
          title: 'Electronic Billing Module',
          description: 'An electronic invoicing module that enables invoice generation for any registered business, with direct DIAN integration.',
          tags: ['Python', 'Electronic Invoicing', 'DIAN Integration'],
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    projectsPage: {
      title: "All",
      titleHighlight: "Projects",
      subtitle: "Explore the full list of solutions we have delivered across products, e-commerce, operations, and compliance.",
      viewProject: "Read Project Story",
      backToHome: "Back to Home",
      items: [
        {
          slug: "keepdm",
          name: "KeepDM",
          summary: "A dashboard creator tool to manage your own insights.",
          details: "Built with React, TypeScript, Vite, FastAPI, and MongoDB.",
          stack: ["React", "TypeScript", "Vite", "FastAPI", "MongoDB"]
        },
        {
          slug: "my-space-online",
          name: "My Space Online",
          summary: "An e-commerce platform built for a stationery business.",
          details: "Built in WordPress with Elementor.",
          stack: ["WordPress", "Elementor", "E-commerce"]
        },
        {
          slug: "w-luna",
          name: "W-luna",
          summary: "A parking management system with shift changes, vehicle check-in and check-out, ticket printing, and e-bill generation.",
          details: "Built with React, TypeScript, Vite, Django, and PostgreSQL.",
          stack: ["React", "TypeScript", "Vite", "Django", "PostgreSQL"]
        },
        {
          slug: "electronic-billing-module",
          name: "Electronic Billing Module",
          summary: "An electronic invoicing module that enables invoice generation for any registered business with direct DIAN integration.",
          details: "Built in Python.",
          stack: ["Python", "Electronic Invoicing", "DIAN Integration"]
        }
      ]
    },
    projectDetails: {
      keepdm: {
        headline: "Dashboard Intelligence for Better Decisions",
        purpose: "KeepDM was created to help teams centralize metrics and quickly build personalized dashboards for operations, sales, and growth tracking.",
        overview: "The platform combines a flexible dashboard builder with a modern, responsive interface that lets users design, share, and monitor KPIs without heavy technical setup.",
        impactTitle: "Business Impact",
        impact: [
          "Faster reporting cycles with reusable dashboard templates.",
          "Better alignment across teams with one source of truth for performance data.",
          "Higher adoption of analytics by non-technical users."
        ]
      },
      'my-space-online': {
        headline: "Digital Commerce for a Stationery Store",
        purpose: "My Space Online was built to transform a physical stationery store into an accessible online business where customers can browse products, request catalog items, and purchase from anywhere.",
        overview: "The e-commerce experience was designed in WordPress + Elementor with a clear catalog structure for stationery, home products, and beauty brands. It prioritizes quick product discovery, trust, and simple checkout paths for repeat purchases.",
        aboutTitle: "About My Space Online",
        about: [
          "The purpose of this project was to open a new digital sales channel for a local stationery store and reduce dependency on in-person traffic.",
          "The website introduced product catalog pages, highlighted collections, and better promotional visibility, making it easier for customers to discover and buy available inventory.",
          "After launch, the store achieved double-digit growth in monthly online sales and improved customer reach beyond the immediate neighborhood."
        ],
        impactTitle: "Sales and Growth Highlights",
        impact: [
          "Increase in monthly sales through online catalog conversion.",
          "More recurring customers from digital channels.",
          "Expanded market reach for stationery and complementary products."
        ],
        galleryTitle: "Project Gallery"
      },
      'w-luna': {
        headline: "Parking Operations with Full Control",
        purpose: "W-luna helps parking operators manage daily activity from vehicle entry to checkout with strong operational traceability.",
        overview: "The system includes shift changes, vehicle check-in/check-out, ticket printing, and e-bill generation in a workflow optimized for speed at points of service.",
        impactTitle: "Operational Impact",
        impact: [
          "Reduced manual errors in vehicle records and shift settlements.",
          "Faster throughput at entry and exit points.",
          "Better accountability through digital billing records."
        ]
      },
      'electronic-billing-module': {
        headline: "Electronic Invoicing with DIAN Connectivity",
        purpose: "This module enables any registered business to generate compliant electronic invoices with direct integration to DIAN.",
        overview: "Built in Python, it standardizes invoice generation, validation, and submission flows so organizations can automate fiscal processes and reduce compliance risk.",
        impactTitle: "Compliance Impact",
        impact: [
          "Streamlined invoicing operations with fewer manual steps.",
          "Improved regulatory compliance through direct DIAN integration.",
          "Scalable architecture for multi-business onboarding."
        ]
      }
    },
    cta: {
      badge: "Let's Build Something Amazing",
      title: "Ready to Transform",
      titleHighlight: "Your Vision?",
      description: "Partner with our expert team to build scalable, innovative software solutions that drive real business results.",
      primaryCta: "Get in Touch",
      secondaryCta: "View Our Process",
      stats: [
        { title: 'Free', subtitle: 'Quote Request' },
        { title: '48h', subtitle: 'Response Time' },
        { title: 'Agile', subtitle: 'Methodology' },
        { title: 'Dedicated', subtitle: 'Support Team' },
      ]
    },
    process: {
      title: "Our Development",
      titleHighlight: "Journey",
      subtitle: "We follow a rigorous Software Development Life Cycle (SDLC) to ensure excellence in every line of code.",
      steps: [
        {
          id: "planning",
          title: "Planning",
          description: "Defining project scope, objectives, and resource allocation to set a solid foundation.",
          icon: "ClipboardList"
        },
        {
          id: "analysis",
          title: "Analysis",
          description: "Gathering detailed requirements and studying business needs to define the best technical path.",
          icon: "Search"
        },
        {
          id: "design",
          title: "Design",
          description: "Creating architectural blueprints, UI/UX mockups, and database schemas for a seamless user experience.",
          icon: "Layout"
        },
        {
          id: "development",
          title: "Development",
          description: "Our engineers bring the design to life using clean code and industry-standard practices.",
          icon: "Code2"
        },
        {
          id: "test",
          title: "Testing",
          description: "Rigorous quality assurance to identify and fix bugs, ensuring a stable and secure product.",
          icon: "CheckCircle"
        },
        {
          id: "deploy",
          title: "Deployment",
          description: "Launching your product to production environments with automated CI/CD pipelines.",
          icon: "Rocket"
        },
        {
          id: "support",
          title: "Support",
          description: "Continuous monitoring, updates, and maintenance to keep your software running perfectly.",
          icon: "LifeBuoy"
        }
      ]
    },
    about: {
      title: "Meet the",
      titleHighlight: "Team",
      subtitle: "The passionate minds behind SOSWER, dedicated to transforming business through technology.",
      profiles: [
        {
          name: "Eder",
          role: "UI/UX Designer & Project Lead",
          bio: "I have been involved in design and project leadership since 2018, building a solid foundation in the planning, execution, and delivery of digital products. Since 2023, I have specialized in UX, creating user-centered UI/UX solutions for a variety of projects, with a strong emphasis on usability and visual coherence. In addition to my design expertise, I have a growing interest in DevOps practices, allowing me to bridge the gap between design, development, and deployment. This multidisciplinary approach enables me to contribute to products from both a strategic and technical perspective.",
          image: "Eder.webp"
        },
        {
          name: "Luis",
          role: "Full Stack Developer & Backend Specialist",
          bio: "I have been working with Python since 2020, drawn to its clarity and efficiency. My primary focus has been backend development, particularly database design and the underlying systems that power modern applications. Recently, I have been expanding my expertise into frontend technologies with the goal of becoming a well-rounded full stack developer. Professionally, I have led and contributed to multiple freelance projects, gaining hands-on experience in delivering scalable solutions. I am currently developing a SaaS platform using Django, Django REST Framework, and React.js. In 2024, I presented my undergraduate thesis proposal—a Flask-based data visualization dashboard—at the University Research Week (SIU 2024) hosted by the University of Ibagué.",
          image: "Luis.webp"
        }
      ],
      jointInitiative: {
        title: "Joint Initiative",
        content: "Together, we founded SOSWER, an initiative focused on enabling small and medium-sized businesses to effectively adopt technology and enhance their productivity and market reach. Through SOSWER, we deliver tailored software solutions as well as proprietary SaaS platforms, designed to meet real business needs with scalable and user-centered approaches."
      }
    },
    footer: {
      description: "Building robust, secure, and scalable software solutions that drive business innovation and digital excellence.",
      quickLinksTitle: "Quick Links",
      links: ['Home', 'Services', 'Portfolio', 'Contact'],
      contactTitle: "Contact Us",
      contact: {
        email: "contacto@soswer.com",
        phone: "+57 3236147433",
        address: "cra 11 #33-41 Ibague, Tolima, CO 730001"
      },
      followUsTitle: "Follow Us",
      followUsDescription: "Stay connected for the latest updates and insights.",
      copyright: "© 2026 SOSWER. All rights reserved. Built with passion and precision.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    contactPage: {
      title: "Get in",
      titleHighlight: "Touch",
      subtitle: "Ready to start your next project? We'd love to hear from you. Fill out the form and we'll be in touch shortly.",
      contactInfo: {
        emailLabel: "Email Us",
        email: "contacto@soswer.com",
        phoneLabel: "Call Us",
        phone: "+57 3236147433",
        addressLabel: "Visit Us",
        address: "cra 11 #33-41 Ibague, Tolima, CO 730001"
      },
      form: {
        title: "Request a Quote",
        nameLabel: "Full Name",
        namePlaceholder: "John Doe",
        emailLabel: "Email Address",
        emailPlaceholder: "john@example.com",
        serviceLabel: "Service Interested In",
        servicePlaceholder: "Select a service",
        services: [
          "Custom Software Development",
          "SaaS Platform",
          "Cloud Architecture & DevOps",
          "API Development & Integration",
          "Mobile App Development",
          "Technical Consulting",
          "Other"
        ],
        messageLabel: "Project Details",
        messagePlaceholder: "Tell us about your project requirements...",
        submitButton: "Send Message"
      }
    }
  },
  es: {
    meta: {
      title: "SOSWER - Transformando Ideas en Software Potente",
      description: "Transformando Ideas en Software Potente"
    },
    nav: {
      links: [
        { name: 'Inicio', href: '/es' },
        { name: 'Servicios', href: '/es/#services' },
        { name: 'Portafolio', href: '/es/#portfolio' },
        { name: 'Contacto', href: '/es/contact' },
      ],
      cta: "Contáctanos"
    },
    hero: {
      badge: "Soluciones de Software de Próxima Generación",
      titlePrefix: "Elevando Empresas a Través de",
      titleHighlight: "Software Experto",
      description: "Construimos soluciones digitales personalizadas que impulsan el crecimiento, optimizan operaciones y mejoran las experiencias de usuario. Desde plataformas SaaS hasta herramientas internas personalizadas.",
      primaryCta: "Ponte en Contacto",
      secondaryCta: "Ver Nuestro Trabajo",
      stats: [
        { value: "13+", label: "Proyectos Entregados" },
        { value: "98%", label: "Satisfacción del Cliente" },
        { value: "7+", label: "Clientes Empresariales" },
        { value: "24/7", label: "Soporte Disponible" }
      ]
    },
    services: {
      title: "Nuestros",
      titleHighlight: "Servicios",
        description: "Ofrecemos servicios SaaS listos para usar, además de soluciones de software a medida, para impulsar la eficiencia operativa y el crecimiento.",
      items: [
        {
          title: 'Desarrollo de Software a Medida',
            description: 'Soluciones de software adaptadas construidas desde cero para cumplir con sus requisitos comerciales únicos e impulsar la eficiencia operativa.',
          iconName: 'Code2',
        },
        {
          title: 'Oferta de SaaS',
            description: 'Ofrecemos plataformas SaaS propias, listas para usar, con multi-tenencia, gestión de suscripciones e integraciones perfectas.',
          iconName: 'Cloud',
        },
        {
          title: 'Arquitectura Cloud y DevOps',
          description: 'Diseño de infraestructura robusta, pipelines CI/CD automatizados y optimización en la nube para AWS, Azure y Google Cloud Platform.',
          iconName: 'Server',
        },
        {
          title: 'Desarrollo e Integración de API',
          description: 'APIs RESTful y GraphQL que permiten conexiones de sistemas perfectas, integraciones de terceros y arquitectura de microservicios.',
          iconName: 'Plug',
        },
        {
          title: 'Desarrollo de Aplicaciones Móviles',
          description: 'Aplicaciones móviles nativas y multiplataforma para iOS y Android que ofrecen experiencias de usuario excepcionales.',
          iconName: 'Smartphone',
        },
        {
          title: 'Consultoría Técnica',
          description: 'Orientación experta sobre estrategia tecnológica, decisiones de arquitectura y transformación digital para maximizar sus objetivos comerciales.',
          iconName: 'Lightbulb',
        },
      ]
    },
    caseStudies: {
      title: "Casos de",
      titleHighlight: "Estudio",
      description: "Historias de éxito del mundo real que muestran nuestra experiencia en la entrega de soluciones de software transformadoras.",
      viewCaseStudy: "Ver Caso de Estudio",
      viewAllProjects: "Ver Todos los Proyectos",
      items: [
        {
          slug: 'keepdm',
          title: 'KeepDM',
          description: 'Herramienta creadora de dashboards para gestionar tus propios insights.',
          tags: ['React', 'TypeScript', 'Vite', 'FastAPI', 'MongoDB'],
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          slug: 'my-space-online',
          title: 'My Space Online',
          description: 'Un e-commerce creado para una papeleria.',
          tags: ['WordPress', 'Elementor', 'E-commerce'],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          slug: 'w-luna',
          title: 'W-luna',
          description: 'Sistema de gestion de parqueadero con cambios de turno, ingreso y salida de vehiculos, impresion de tickets y generacion de factura electronica.',
          tags: ['React', 'TypeScript', 'Vite', 'Django', 'PostgreSQL'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          slug: 'electronic-billing-module',
          title: 'Modulo de Facturacion Electronica',
          description: 'Modulo de facturacion electronica que permite generar facturas para cualquier comercio registrado, con conexion directa a la DIAN.',
          tags: ['Python', 'Facturacion Electronica', 'Integracion DIAN'],
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
    },
    projectsPage: {
      title: "Todos los",
      titleHighlight: "Proyectos",
      subtitle: "Explora la lista completa de soluciones que hemos entregado en productos, e-commerce, operaciones y cumplimiento.",
      viewProject: "Ver Historia del Proyecto",
      backToHome: "Volver al Inicio",
      items: [
        {
          slug: "keepdm",
          name: "KeepDM",
          summary: "Una herramienta creadora de dashboards para gestionar tus propios insights.",
          details: "Construido con React, TypeScript, Vite, FastAPI y MongoDB.",
          stack: ["React", "TypeScript", "Vite", "FastAPI", "MongoDB"]
        },
        {
          slug: "my-space-online",
          name: "My Space Online",
          summary: "Un e-commerce creado para una papeleria.",
          details: "Construido en WordPress con Elementor.",
          stack: ["WordPress", "Elementor", "E-commerce"]
        },
        {
          slug: "w-luna",
          name: "W-luna",
          summary: "Un sistema de gestion de parqueadero con cambios de turno, ingreso y salida de vehiculos, impresion de tickets y generacion de factura electronica.",
          details: "Construido con React, TypeScript, Vite, Django y PostgreSQL.",
          stack: ["React", "TypeScript", "Vite", "Django", "PostgreSQL"]
        },
        {
          slug: "electronic-billing-module",
          name: "Modulo de Facturacion Electronica",
          summary: "Un modulo de facturacion electronica que permite la generacion de facturas para cualquier comercio registrado, con conexion directa a la DIAN.",
          details: "Construido en Python.",
          stack: ["Python", "Facturacion Electronica", "Integracion DIAN"]
        }
      ]
    },
    projectDetails: {
      keepdm: {
        headline: "Inteligencia de Dashboards para Mejores Decisiones",
        purpose: "KeepDM se creo para que los equipos centralicen metricas y construyan dashboards personalizados para operaciones, ventas y crecimiento.",
        overview: "La plataforma combina un creador flexible de tableros con una interfaz moderna y responsive para disenar, compartir y monitorear KPIs sin una configuracion tecnica compleja.",
        impactTitle: "Impacto de Negocio",
        impact: [
          "Ciclos de reporte mas rapidos con plantillas reutilizables.",
          "Mayor alineacion entre equipos con una fuente unica de datos.",
          "Mayor adopcion del analisis por usuarios no tecnicos."
        ]
      },
      'my-space-online': {
        headline: "Comercio Digital para una Papeleria",
        purpose: "My Space Online se construyo para transformar una papeleria fisica en un negocio digital accesible, donde los clientes pueden explorar productos, pedir por catalogo y comprar desde cualquier lugar.",
        overview: "La experiencia e-commerce se diseno en WordPress + Elementor con una estructura clara de catalogo para papeleria, hogar y marcas de belleza. Se priorizo el descubrimiento rapido de productos, la confianza y un camino simple de compra.",
        aboutTitle: "Sobre My Space Online",
        about: [
          "El objetivo del proyecto fue abrir un nuevo canal de ventas digital para la papeleria y reducir la dependencia de las ventas presenciales.",
          "El sitio incorporo catalogos por categoria, colecciones destacadas y mejor visibilidad de promociones para facilitar la compra.",
          "Tras el lanzamiento, el negocio logro crecimiento de doble digito en ventas mensuales online y mayor alcance de clientes fuera de la zona inmediata."
        ],
        impactTitle: "Resultados en Ventas y Crecimiento",
        impact: [
          "Incremento de ventas mensuales por conversion del catalogo online.",
          "Mas clientes recurrentes desde canales digitales.",
          "Mayor alcance para productos de papeleria y categorias complementarias."
        ],
        galleryTitle: "Galeria del Proyecto"
      },
      'w-luna': {
        headline: "Operacion de Parqueadero con Control Total",
        purpose: "W-luna ayuda a operadores de parqueadero a gestionar la operacion diaria desde el ingreso del vehiculo hasta el checkout con trazabilidad completa.",
        overview: "El sistema incluye cambios de turno, check-in/check-out de vehiculos, impresion de tickets y generacion de factura electronica en un flujo optimizado para rapidez en punto de atencion.",
        impactTitle: "Impacto Operativo",
        impact: [
          "Reduccion de errores manuales en registros y cierres de turno.",
          "Mayor velocidad en puntos de entrada y salida.",
          "Mejor control con trazabilidad digital de facturacion."
        ]
      },
      'electronic-billing-module': {
        headline: "Facturacion Electronica con Conexion DIAN",
        purpose: "Este modulo permite a cualquier comercio registrado generar facturas electronicas con integracion directa a la DIAN.",
        overview: "Construido en Python, estandariza los flujos de generacion, validacion y envio para automatizar procesos fiscales y disminuir riesgo de incumplimiento.",
        impactTitle: "Impacto en Cumplimiento",
        impact: [
          "Operacion de facturacion mas eficiente y con menos pasos manuales.",
          "Mayor cumplimiento normativo con envio directo a la DIAN.",
          "Arquitectura escalable para onboarding de multiples comercios."
        ]
      }
    },
    cta: {
      badge: "Construyamos Algo Increíble",
      title: "¿Listo para Transformar",
      titleHighlight: "Tu Visión?",
      description: "Asóciese con nuestro equipo de expertos para construir soluciones de software escalables e innovadoras que impulsen resultados comerciales reales.",
      primaryCta: "Contáctanos",
      secondaryCta: "Ver Nuestro Proceso",
      stats: [
          { title: 'Gratis', subtitle: 'Cotización' },
        { title: '48h', subtitle: 'Tiempo de Respuesta' },
        { title: 'Ágil', subtitle: 'Metodología' },
        { title: 'Dedicado', subtitle: 'Equipo de Soporte' },
      ]
    },
    process: {
      title: "Nuestro Proceso de",
      titleHighlight: "Desarrollo",
      subtitle: "Seguimos un ciclo de vida de desarrollo de software (SDLC) riguroso para garantizar la excelencia en cada línea de código.",
      steps: [
        {
          id: "planning",
          title: "Planificación",
          description: "Definición del alcance del proyecto, objetivos y asignación de recursos para establecer una base sólida.",
          icon: "ClipboardList"
        },
        {
          id: "analysis",
          title: "Análisis",
          description: "Recopilación de requisitos detallados y estudio de las necesidades comerciales para definir el mejor camino técnico.",
          icon: "Search"
        },
        {
          id: "design",
          title: "Diseño",
          description: "Creación de planos arquitectónicos, maquetas UI/UX y esquemas de bases de datos para una experiencia de usuario perfecta.",
          icon: "Layout"
        },
        {
          id: "development",
          title: "Desarrollo",
          description: "Nuestros ingenieros dan vida al diseño utilizando código limpio y prácticas estándar de la industria.",
          icon: "Code2"
        },
        {
          id: "test",
          title: "Pruebas",
          description: "Garantía de calidad rigurosa para identificar y corregir errores, asegurando un producto estable y seguro.",
          icon: "CheckCircle"
        },
        {
          id: "deploy",
          title: "Despliegue",
          description: "Lanzamiento de su producto a entornos de producción con pipelines CI/CD automatizados.",
          icon: "Rocket"
        },
        {
          id: "support",
          title: "Soporte",
          description: "Monitoreo continuo, actualizaciones y mantenimiento para que su software funcione perfectamente.",
          icon: "LifeBuoy"
        }
      ]
    },
    about: {
      title: "Conoce al",
      titleHighlight: "Equipo",
      subtitle: "Las mentes apasionadas detrás de SOSWER, dedicadas a transformar empresas a través de la tecnología.",
      profiles: [
        {
          name: "Eder",
          role: "Diseñador UI/UX y Líder de Proyecto",
          bio: "He estado involucrado en el diseño y el liderazgo de proyectos desde 2018, construyendo una base sólida en la planificación, ejecución y entrega de productos digitales. Desde 2023, me he especializado en UX, creando soluciones UI/UX centradas en el usuario para una variedad de proyectos, con un fuerte énfasis en la usabilidad y la coherencia visual. Además de mi experiencia en diseño, tengo un creciente interés en las prácticas de DevOps, lo que me permite cerrar la brecha entre el diseño, el desarrollo y el despliegue. Este enfoque multidisciplinario me permite contribuir a los productos desde una perspectiva tanto estratégica como técnica.",
          image: "Eder.webp"
        },
        {
          name: "Luis",
          role: "Desarrollador Full Stack y Especialista en Backend",
          bio: "He estado trabajando con Python desde 2020, atraído por su claridad y eficiencia. Mi enfoque principal ha sido el desarrollo backend, particularmente el diseño de bases de datos y los sistemas subyacentes que alimentan las aplicaciones modernas. Recientemente, he estado expandiendo mi experiencia en tecnologías frontend con el objetivo de convertirme en un desarrollador full stack completo. Profesionalmente, he liderado y contribuido a múltiples proyectos freelance, ganando experiencia práctica en la entrega de soluciones escalables. Actualmente estoy desarrollando una plataforma SaaS utilizando Django, Django REST Framework y React.js. En 2024, presenté mi propuesta de tesis de pregrado, un tablero de visualización de datos basado en Flask, en la Semana de Investigación Universitaria (SIU 2024) organizada por la Universidad de Ibagué.",
          image: "Luis.webp"
        }
      ],
      jointInitiative: {
        title: "Iniciativa Conjunta",
        content: "Juntos, fundamos SOSWER, una iniciativa enfocada en permitir que las pequeñas y medianas empresas adopten tecnología de manera efectiva y mejoren su productividad y alcance en el mercado. A través de SOSWER, entregamos soluciones de software a medida, así como plataformas SaaS patentadas, diseñadas para satisfacer las necesidades comerciales reales con enfoques escalables y centrados en el usuario."
      }
    },
    footer: {
      description: "Construyendo soluciones de software robustas, seguras y escalables que impulsan la innovación empresarial y la excelencia digital.",
      quickLinksTitle: "Enlaces Rápidos",
      links: ['Inicio', 'Servicios', 'Portafolio', 'Contacto'],
      contactTitle: "Contáctanos",
      contact: {
        email: "contacto@soswer.com",
        phone: "+57 3236147433",
        address: "cra 11 #33-41 Ibague, Tolima, CO 730001"
      },
      followUsTitle: "Síguenos",
      followUsDescription: "Manténgase conectado para las últimas actualizaciones e ideas.",
      copyright: "© 2026 SOSWER. Todos los derechos reservados. Construido con pasión y precisión.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    },
    contactPage: {
      title: "Ponte en",
      titleHighlight: "Contacto",
      subtitle: "¿Listo para comenzar tu próximo proyecto? Nos encantaría saber de ti. Completa el formulario y nos pondremos en contacto en breve.",
      contactInfo: {
        emailLabel: "Envíanos un Email",
        email: "contacto@soswer.com",
        phoneLabel: "Llámanos",
        phone: "+57 3236147433",
        addressLabel: "Visítanos",
        address: "cra 11 #33-41 Ibague, Tolima, CO 730001"
      },
      form: {
        title: "Solicitar una Cotización",
        nameLabel: "Nombre Completo",
        namePlaceholder: "Juan Pérez",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "juan@ejemplo.com",
        serviceLabel: "Servicio de Interés",
        servicePlaceholder: "Selecciona un servicio",
        services: [
          "Desarrollo de Software a Medida",
          "Plataformas SaaS",
          "Arquitectura Cloud y DevOps",
          "Desarrollo e Integración de API",
          "Desarrollo de Aplicaciones Móviles",
          "Consultoría Técnica",
          "Otro"
        ],
        messageLabel: "Detalles del Proyecto",
        messagePlaceholder: "Cuéntanos sobre los requisitos de tu proyecto...",
        submitButton: "Enviar Mensaje"
      }
    }
  }
};
