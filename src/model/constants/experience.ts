import type { TechStack } from "./tags";

interface Experience {
  date: string;
  title: string;
  link: string;
  summary: string;
  items: string[];
  techStack: TechStack[];
}

export const EXPERIENCE: Experience[] = [
  {
    date: "Agosto 2022 - Junio 2024",
    title: "UX/UI Developer - WEDOX Perú",
    link: "https://buplat.com/",
    summary: "Responsable del desarrollo de Interfaces y Experiencia de Usuario de la plataforma BUPLAT. Implantación de buenas prácticas, legibilidad y optimización de código en base a la documentación del framework en el que está basada la plataforma. Creación de componentes (custom controls) reutilizables y funcionales.",
    items: [
      "Recepción y análisis de requerimientos, proponiendo alternativas cuando era necesario para asegurar la mejor solución posible.",
      "Implementación de mejoras y resolución de problemas, defectos, corrección de bugs y desarrollo de pruebas de concepto (PoC).",
      "Diseño y desarrollo de interfaces de usuario intuitivas y funcionales, asegurando una experiencia de usuario optimizada y accesible para todos los usuarios.",
      "Desarrollo de servicios y APIs para facilitar la comunicación entre el front-end y el back-end.",
      "Ejecución de scripts y consultas SQL para gestionar y manipular datos cuando lo ameritaba.",
      "Aseguramiento de accesibilidad y experiencia de usuario, garantizando que las interfaces de usuario cumplieran con los estándares de accesibilidad y proporcionaran una experiencia de usuario positiva.",
      "Desarrollo de controles personalizados de OPENUI5 para suplir las limitaciones de los controles por defecto, mejorando así la funcionalidad y la flexibilidad de la aplicación.",
      "Refactorización de código legacy, aplicando documentación y buenas prácticas de código en base al framework bajo el cual se encuentra el proyecto."
    ],
    techStack: ["CSHARP", "DOTNET", "OPENUI5", "REACT", "TAILWIND", "CSS", "JS", "NEXTJS"]
  },
  {
    date: "Marzo 2020 - Marzo 2023",
    title: "BPM Developer - WES IT",
    link: "",
    summary: "Desarrollador BPM para cliente internacional de bienes de consumo, implementé soluciones avanzadas utilizando Bizagi Studio, SQL Server, y diversas tecnologías web para suplir limitaciones de Bizagi. Fui parte del equipo responsable del desarrollo de expresiones para la automatización de procesos y de flujo de trabajo optimizado, la gestión de datos maestros de proveedores y la configuración de datos, así como la actualización masiva de datos de procesos. También desarrollamos un marco de procesos configurables que abarcó la gestión de configuración, variantes, rutas, autorizaciones y transporte de configuraciones. Esto resultó en mejoras significativas en la eficiencia operativa, la precisión de los datos y la flexibilidad de los procesos empresariales, logrando una rápida adaptación a cambios en las necesidades del negocio.",
    items: [
      "Flujo de trabajo para el area de Marketing.",
      "Flujo de trabajo para la gestión de datos maestros de proveedores.",
      "Flujo de trabajo para la gestión de liberación de pedidos.",
      "Flujo de trabajo para la actualizción masiva de datos de procesos.",
      "Flujo de trabajo para solicitudes de transporte aéreo",
      "Marco de trabajo de alta complejidad conformado por otros procesos: Gestión de Configuraciones, variantes, rutas, autorizaciones y transporte de configuraciones.",
      "Desarrollo de plataforma web con la finalidad de extender y suplir limitaciones de BizAgi, para el manejo de creación y lectura de reportes personalizados bajo configuraciones y autorizaciones.",
      "Desarrollo de plataforma web para suplir limitaciones de BizAgi relacionadas a la gestión de notificaciones, manejo de plantillas de correo pesonalizados, y conexiones a base de datos para obtener información de los casos de BizAgi."
    ],
    techStack: ["BIZAGISTUDIO", "CSHARP", "DOTNET", "OPENUI5", "CSS", "JS"]
  },
  {
    date: "Junio 2019 - Junio 2024",
    title: "Ssr Application Developer - iDo Consulting Company SAC",
    link: "",
    summary: "Desarrollador de diversos proyectos tanto nacionales como internacionales haciendo uso de amplia stack de tecnologias y herramientas. Con foco en implementaciones tanto de frontend como backend ademas de trabajar estrechamente con el equipo de diseño para asegurar una experiencia de usuario intuitiva y eficiente.",
    items: [
      "Desarrollo de aplicación web para la gestión de procesos estratégicos de cliente internacional, centrada en la gestión de actividades, aprobaciones y flujos de trabajo. La aplicación permite a los usuarios definir, seguir y analizar proyectos estratégicos, proporcionando herramientas de reporte y visualización de datos para facilitar la toma de decisiones informadas. Incluye un robusto sistema de aprobación que asegura que todas las actividades estratégicas pasan por los niveles adecuados de autorización.",
      "Desarrollo de aplicación web para la gestión de procesos tácticos, centrada en la gestión de actividades operativas diarias, aprobaciones y flujos de trabajo. La solución incluye funcionalidades para la asignación de tareas, seguimiento del progreso, gestión de recursos y generación de informes detallados.",
      "Colaboración estrecha con WEDOX para el logro del producto BUPLAT."
    ],
    techStack: ["OPENUI5", "JS", "CSS"]
  }
];