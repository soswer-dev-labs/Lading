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
      titlePrefix: "Transforming Ideas Into",
      titleHighlight: "Powerful Software",
      description: "We build cutting-edge custom software and scalable SaaS platforms that drive innovation and accelerate business growth.",
      primaryCta: "Explore Our Services",
      secondaryCta: "View Our Work",
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
      items: [
        {
          title: 'FinTech Payment Platform',
          description: 'Built a secure, scalable payment processing platform handling $50M+ in monthly transactions.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Healthcare SaaS Solution',
          description: 'Developed a HIPAA-compliant telemedicine platform connecting 10,000+ patients with healthcare providers.',
          tags: ['React Native', 'Python', 'MongoDB', 'WebRTC'],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'E-Commerce Analytics Dashboard',
          description: 'Created a real-time analytics platform providing actionable insights for enterprise retailers.',
          tags: ['Vue.js', 'GraphQL', 'D3.js', 'GCP', 'BigQuery'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Supply Chain Management System',
          description: 'Engineered an end-to-end supply chain solution optimizing logistics for global operations.',
          tags: ['Angular', 'Java', 'Redis', 'Docker', 'Kubernetes'],
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
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
      titlePrefix: "Transformando Ideas en",
      titleHighlight: "Software Potente",
      description: "Creamos software personalizado de vanguardia y plataformas SaaS escalables que impulsan la innovación y aceleran el crecimiento empresarial.",
      primaryCta: "Explora Nuestros Servicios",
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
      items: [
        {
          title: 'Plataforma de Pagos FinTech',
          description: 'Construcción de una plataforma de procesamiento de pagos segura y escalable que maneja más de $50M en transacciones mensuales.',
          tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Solución SaaS de Salud',
          description: 'Desarrollo de una plataforma de telemedicina compatible con HIPAA que conecta a más de 10,000 pacientes con proveedores de atención médica.',
          tags: ['React Native', 'Python', 'MongoDB', 'WebRTC'],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Panel de Análisis de E-Commerce',
          description: 'Creación de una plataforma de análisis en tiempo real que proporciona información procesable para minoristas empresariales.',
          tags: ['Vue.js', 'GraphQL', 'D3.js', 'GCP', 'BigQuery'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Sistema de Gestión de Cadena de Suministro',
          description: 'Ingeniería de una solución de cadena de suministro de extremo a extremo que optimiza la logística para operaciones globales.',
          tags: ['Angular', 'Java', 'Redis', 'Docker', 'Kubernetes'],
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
      ]
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
