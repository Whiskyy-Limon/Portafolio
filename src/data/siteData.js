export const personalData = {
  name: 'Sergio Andre Reyes Guerra',
  shortName: 'Sergio Reyes Guerra',
  role: 'Desarrollador Full Stack Junior',
  email: 'kinkix601@gmail.com',
  phone: '+51 910 155 868',
  location: 'Lima, Perú',
  github: 'https://github.com/Whiskyy-Limon',
  linkedin: 'https://www.linkedin.com/in/sergio-reyes-guerra-278874348/',
  resumeUrl: '/CV_Reyes.pdf',
  profileImage: '/profile.jpg',
  summary:
    'Desarrollador Full Stack Junior con experiencia en React, Node.js, PHP y Laravel, especializado en aplicaciones web modernas y sistemas basados en datos. He desarrollado soluciones completas con autenticación, APIs y despliegue en la nube. Interesado en construir productos escalables, eficientes y orientados a la experiencia del usuario.',
  hero: {
    headline:
      'Desarrollador Full Stack especializado en aplicaciones web, datos e inteligencia artificial',
    subheadline:
      'Construyo aplicaciones web modernas con React, Node.js y bases de datos SQL/NoSQL. Me enfoco en crear soluciones escalables, funcionales y orientadas a datos.',
    availabilityText: 'Disponible para nuevas oportunidades',
    primaryActionLabel: 'Ver proyectos',
    primaryActionTargetId: 'projects',
    secondaryActionLabel: 'Descargar CV',
    secondaryActionUrl: '/CV_Reyes.pdf',
    highlightPills: ['React', 'Node.js', 'MongoDB', 'SQL', 'Machine Learning', 'Cloud'],
  },
  about: {
    title: 'Desarrollador de software enfocado en soluciones basadas en datos',
    body: [
      'Soy desarrollador full stack con experiencia construyendo aplicaciones web modernas utilizando React, Node.js y bases de datos SQL y NoSQL.',
      'He trabajado en el desarrollo completo de aplicaciones, desde la interfaz de usuario hasta la implementación de APIs y despliegue en la nube.',
      'Me interesa especialmente el desarrollo de soluciones basadas en datos, inteligencia artificial y sistemas escalables que puedan generar valor real para empresas y usuarios.',
      'Actualmente estudio Diseño y Desarrollo de Software en TECSUP y continúo fortaleciendo mi perfil con formación en ciencia de datos, machine learning y administración de bases de datos.',
    ],
  },
  skills: [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
    },
    {
      category: 'Mobile',
      skills: ['Flutter'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'MySQL', 'PHP', 'Laravel'],
    },
    {
      category: 'Lenguajes',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'Dart', 'Swift'],
    },
    {
      category: 'Data & Machine Learning',
      skills: [
        'Análisis de datos',
        'SQL avanzado',
        'Machine Learning aplicado a toma de decisiones',
        'Modelado y gestión de bases de datos',
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Vercel', 'Railway'],
    },
    {
      category: 'Herramientas',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio', 'Figma'],
    },
    {
      category: 'Idiomas',
      skills: ['Español (Nativo)', 'Inglés (Intermedio)'],
    },
    {
      category: 'Soft skills',
      skills: [
        'Trabajo en equipo',
        'Adaptabilidad',
        'Aprendizaje continuo',
        'Pensamiento lógico',
        'Comunicación efectiva',
      ],
    },
  ],
  projects: [
    {
      id: 'task-manager-pro',
      title: 'Task Manager Pro',
      description:
        'Aplicación full stack para gestión de tareas con autenticación, dashboard de estadísticas y UI moderna tipo SaaS. Permite organizar tareas por estado y prioridad, con una arquitectura escalable y experiencia de usuario optimizada.',
      techStack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL (Prisma)', 'JWT'],
      githubUrl: 'https://github.com/Whiskyy-Limon/Task_Manager_Pro',
      featured: true,
      highlights: [
        'Autenticación segura con JWT',
        'CRUD completo de tareas',
        'Filtros por estado y prioridad',
        'Dashboard con estadísticas',
        'UI moderna tipo SaaS',
        'Arquitectura modular escalable',
      ],
    },
    {
      id: 'vocai',
      title: 'VocAI – Asistente de orientación vocacional',
      description:
        'Proyecto full stack enfocado en orientación vocacional para estudiantes, con frontend en React, backend en Node.js/Express, base de datos MongoDB, autenticación, cuestionario y panel administrativo.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel / Cloud deployment'],
      githubUrl: 'https://github.com/Whiskyy-Limon',
      highlights: [
        'Cuestionario vocacional interactivo',
        'Autenticación y panel administrativo',
        'Backend API con Express y MongoDB',
      ],
    },
  ],
  experience: [
    {
      id: 'proj-task-manager-pro',
      type: 'project',
      title: 'Task Manager Pro',
      organization: 'Proyecto personal',
      location: 'Lima, Perú',
      startDate: '2026',
      endDate: 'Actualidad',
      description:
        'Desarrollo de una aplicación full stack para gestión de tareas con dashboard interactivo y autenticación segura.',
      highlights: [
        'Backend con Node.js y Express',
        'Base de datos MySQL con Prisma',
        'Autenticación JWT',
        'UI moderna con React + Tailwind',
        'Dashboard con estadísticas',
      ],
    },
    {
      id: 'proj-vocai',
      type: 'project',
      title: 'VocAI – Asistente de orientación vocacional',
      organization: 'Proyecto académico',
      location: 'Lima, Perú',
      startDate: '2025',
      endDate: 'Actualidad',
      description:
        'Desarrollo full stack de una solución de orientación vocacional con inteligencia artificial.',
      highlights: [
        'Desarrollo frontend con React',
        'Backend con Node.js y Express',
        'Integración con MongoDB',
        'Implementación de autenticación',
        'Panel administrativo',
        'Despliegue completo en la nube',
      ],
    },
    {
      id: 'edu-tecsup',
      type: 'education',
      title: 'Diseño y Desarrollo de Software',
      organization: 'TECSUP',
      location: 'Lima, Perú',
      startDate: '2023',
      endDate: '2025',
      description:
        'Formación profesional en desarrollo de software, aplicaciones web, bases de datos y arquitectura de sistemas.',
      highlights: [],
    },
    {
      id: 'cert-ds-ml-isil',
      type: 'certification',
      title: 'Ciencia de Datos y Machine Learning para la Toma de Decisiones',
      organization: 'ISIL',
      location: 'Lima, Perú',
      startDate: '2026',
      endDate: '2026',
      description:
        'Curso enfocado en análisis de datos y machine learning aplicado a la toma de decisiones. Desarrollado del 03 de febrero al 28 de febrero de 2026.',
      highlights: ['Duración: 24 horas'],
    },
    {
      id: 'cert-dba-oracle',
      type: 'certification',
      title: 'Database Administrator (DBA) con Oracle 19c',
      organization: 'Universidad Nacional de Ingeniería (UNI)',
      location: 'Lima, Perú',
      startDate: '2026',
      endDate: '2026',
      description:
        'Administración de bases de datos Oracle, monitoreo, seguridad, auditoría, backup y recuperación.',
      highlights: ['Duración: 16 horas'],
    },
    {
      id: 'cert-sql-ia',
      type: 'certification',
      title: 'SQL – Base de Datos 1 + IA',
      organization: 'Universidad Nacional de Ingeniería (UNI)',
      location: 'Lima, Perú',
      startDate: '2026',
      endDate: '2026',
      description:
        'Consultas SQL avanzadas, diseño de bases de datos, JOINs, agregaciones, subconsultas, optimización e integración con IA.',
      highlights: ['Duración: 18 horas'],
    },
  ],
};

export const navLinks = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Formación / experiencia' },
  { id: 'contact', label: 'Contacto' },
];
