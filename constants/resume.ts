import type { Language } from "@/models/language";
import type { Resume } from "@/models/resume";

export const ru: Resume = {
  firstName: "Владимир",
  lastName: "Степанов",
  contacts: [
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "г. Якутск", type: "text" },
  ],
  about: {
    title: "О себе",
    content: [
      "Я фронтенд разработчик со стремлением к постоянному развитию и совершенствованию своих навыков, чтобы создавать качественные и удобные для пользователя продукты",
      "С 2020 года работаю коммерческим фронтенд-разработчиком, специализируюсь на React. За это время я принял участие в разработке и поддержке проектов различной сложности — от лендингов до сложных SPA, внутренних админ-панелей и мобильных приложений",
      "Кроме того, у меня есть опыт менторства коллег, находящихся на этапе стажировки, и я всегда готов делиться своими знаниями и опытом. Я считаю, что обучение других - это отличный способ улучшить свои навыки и расширить свое понимание предметной области",
    ],
  },
  experience: {
    title: "Опыт",
    content: [
      {
        title: "ООО “Двигус”",
        description: [
          "Разработал MVP с нуля и довёл продукт до продакшена. Отвечал за дальнейшую поддержку, развитие и стабильность системы",
          "Реализовал систему управления подбором недвижимости: веб-приложение для операторов, админ-панель и интеграции со сторонними сервисами",
          "Интегрировал сервисы телефонии и автоматического обзвона, обеспечив надёжную работу ключевых бизнес-процессов",
          "Взаимодействовал с командой внешнего сервиса: формировал баг-репорты и предложения по улучшению, повысив качество и устойчивость интеграции",
          "Разрабатывал и внедрял новые фичи, оптимизировал существующий код и устранял баги, повышая производительность и удобство работы пользователей",
        ],
        location: "г. Москва",
        position: "Frontend разработчик",
        tags: ["React"],
        date: "Октябрь 2023 – по н.в.",
        duration: "",
      },
      {
        title: "ООО “Квантум”",
        description: [
          "Руководил разработкой клиентской части C2B2C-платформы, обеспечивая согласованность архитектуры и качества кода",
          "Отвечал за клиентскую часть платформы: веб-приложение на Next.js и мобильное приложение на React Native",
          "Принимал архитектурные решения на фронтенде, обеспечивая масштабируемость и единый пользовательский опыт",
          "Работал в тесном взаимодействии с дизайнерами и бэкенд-разработчиками, влияя на UI/UX и качество продукта",
        ],
        location: "г. Якутск",
        position: "Frontend разработчик",
        tags: ["React", "Next.JS", "React Native"],
        date: "Июнь 2022 - Август 2023",
        duration: "1 год 1 месяц",
      },
      {
        title: "ООО “АЭБ АйТи”",
        description: [
          "Разрабатывал региональный медицинский портал на Next.js и админ-панель на React",
          "Реализовал систему сабдоменных сайтов для медицинских организаций с возможностью кастомизации структуры страниц и тем оформления",
          "Реализовал работу со сложными формы, drag-and-drop-интерфейсами, WYSIWYG-редакторами и интеграцию с картами",
          "Обеспечил удобное управление контентом и внешним видом сайтов без участия разработчиков",
        ],
        location: "г. Якутск",
        position: "Frontend разработчик",
        tags: ["React", "Next.JS"],
        date: "Май 2021 - Май 2022",
        duration: "1 год",
      },
    ],
  },
  education: {
    title: "Образование",
    content: [
      {
        title: "Якутский колледж связи и энергетики (ЯКСЭ)",
        date: "2015 - 2018",
        specialty: "Аудиовизуальная техника",
      },
    ],
  },
};

export const en: Resume = {
  firstName: "Vladimir",
  lastName: "Stepanov",
  contacts: [
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "Russia, Yakutsk", type: "text" },
  ],
  about: {
    title: "About",
    content: [
      "I am a frontend developer with a passion for continuous growth and improving my skills to create high-quality and user-friendly products",
      "Since 2020, I have been working as a commercial Frontend Developer specializing in React. During this time, I have participated in the development and maintenance of projects of varying complexity — from landing pages to complex SPAs, internal admin panels, and mobile applications",
      "Additionally, I have experience mentoring colleagues who are at the internship stage, and I am always ready to share my knowledge and experience. I believe that teaching others is a great way to improve my own skills and expand my understanding of the subject",
    ],
  },
  experience: {
    title: "Experience",
    content: [
      {
        title: "Dvigus",
        description: [
          "Developed an MVP from scratch and brought the product to production. Responsible for ongoing maintenance, development, and system stability",
          "Implemented a real estate selection management system: a web application for operators, an admin panel, and integrations with third-party services",
          "Integrated telephony services and automated calling systems, ensuring reliable operation of key business processes",
          "Collaborated with the team of an external service: created bug reports and improvement proposals, improving the quality and stability of the integration",
          "Developed and implemented new features, optimized existing code, and fixed bugs, improving performance and user experience",
        ],
        location: "Russia, Moscow",
        position: "Frontend Developer",
        tags: ["React"],
        date: "October 2023 – present",
        duration: "",
      },
      {
        title: "Qwantum",
        description: [
          "Led the development of the client side of a C2B2C platform, ensuring architectural consistency and code quality",
          "Responsible for the client side of the platform: a web application built with Next.js and a mobile application built with React Native",
          "Made frontend architectural decisions to ensure scalability and a consistent user experience",
          "Worked closely with designers and backend developers, influencing UI/UX and overall product quality",
        ],
        location: "Russia, Yakutsk",
        position: "Frontend Developer",
        tags: ["React", "Next.JS", "React Native"],
        date: "June 2022 - August 2023",
        duration: "1 year 1 month",
      },
      {
        title: "AEB IT",
        description: [
          "Developed a regional medical portal using Next.js and an admin panel using React",
          "Implemented a system of subdomain-based websites for medical organizations with customizable page structures and themes",
          "Implemented complex forms, drag-and-drop interfaces, WYSIWYG editors, and map integrations",
          "Ensured convenient management of site content and appearance without requiring developer involvement",
        ],
        location: "Russia, Yakutsk",
        position: "Frontend Developer",
        tags: ["React", "Next.JS"],
        date: "May 2021 - May 2022",
        duration: "1 year",
      },
    ],
  },
  education: {
    title: "Education",
    content: [
      {
        title: "Yakutsk College of Communications and Energy (YCCE)",
        date: "2015 - 2018",
        specialty: "Audio-visual technology",
      },
    ],
  },
};

export const resume: Record<Language, Resume> = { ru, en };
