export const CV_DATA = {
  personal: {
    name: "Ignacio Díaz Cabrera",
    title: "Desarrollador de Software",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQGShbo-mZoCKA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711154351520?e=1750291200&v=beta&t=O_oE1HdFmL3u-yEOjfi0YE6gF5bzAZ09HUNNUSAgKhQ", // Necesitarás añadir tu foto al proyecto
    about: "Desarrollador de software en formación con sólidos conocimientos en Java, C# y SQL. Actualmente finalizando la Tecnicatura Superior en Desarrollo de Software en el Instituto IDRA, donde he adquirido experiencia en programación orientada a objetos, desarrollo web y bases de datos. Cuento con nivel C1 de inglés, lo que me permite comunicarme eficazmente en entornos internacionales. Me especializo en desarrollo backend y estoy ampliando mis conocimientos en tecnologías frontend como Angular. Busco oportunidades para aplicar mis habilidades técnicas y analíticas en proyectos desafiantes que me permitan crecer profesionalmente.",
    contact: {
      email: "diazcabrera.ig@gmail.com",
      phone: "(+54) 223 668 2649",
      location: "Mar del Plata, Argentina",
      linkedin: "https://www.linkedin.com/in/ignaciodiazcabrera/", // Puedes añadir tu perfil de LinkedIn si lo tienes
      github: "https://www.github.com/ignaciodc8"    // Puedes añadir tu perfil de GitHub si lo tienes
    }
  },
  skills: [
    { name: "Java", level: 85, category: "Programación" },
    { name: "C#", level: 80, category: "Programación" },
    { name: "SQL", level: 75, category: "Bases de Datos" },
    { name: "JavaScript", level: 70, category: "Programación" },
    { name: "Inglés", level: 90, category: "Idiomas", description: "Nivel B2/C1" },
    { name: "Angular", level: 60, category: "Frameworks", description: "En aprendizaje" }
  ],
  softSkills: [
    { 
      name: "Capacidad para escuchar", 
      description: "Disfruto escuchando y aprendiendo de aquellas personas dispuestas a enseñarme o compartir su punto de vista."
    },
    { 
      name: "Trabajo en equipo", 
      description: "Considero que todos los integrantes de un proyecto deben participar y debatir entre sí para lograr una solución."
    }
  ],
  education: [
    {
      institution: "Instituto IDRA",
      degree: "Tecnicatura Superior en Desarrollo de Software",
      period: "2022 - Presente",
      location: "Mar del Plata, Argentina",
      description: "Actualmente transitando el último año con todas las cursadas aprobadas."
    },
    {
      institution: "Universidad Java – Global Mentoring (Udemy)",
      degree: "Curso de Java",
      period: "2024 - Presente",
      location: "Online",
      description: "Actualmente realizando el curso en la plataforma Udemy para mejorar mis habilidades en el lenguaje Java y mantener una formación continua."
    }
  ],
  projects: [
    // Aquí puedes añadir tus proyectos cuando los tengas
    {
      title: "CV Online con Angular",
      description: "Currículum web interactivo desarrollado con Angular y CSS.",
      technologies: ["Angular", "TypeScript", "CSS"],
      link: "", // Enlace al proyecto cuando esté disponible
      github: "", // Enlace al repositorio cuando esté disponible
      image: "assets/images/projects/cv-online.jpg" // Imagen del proyecto
    }
  ],
  interests: [
    "Desarrollo Backend",
    "Programación Java",
    "Bases de Datos",
    "Nuevas Tecnologías"
  ]
};