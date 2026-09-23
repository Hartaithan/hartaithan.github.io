import type { Language } from "@/models/language";
import type { Resume } from "@/models/resume";

export const ru: Resume = {
  firstName: "Владимир",
  lastName: "Степанов",
  position: "Frontend-разработчик",
  contacts: [
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "г. Якутск", type: "text" },
  ],
  about: {
    title: "О себе",
    content: [
      "Frontend-разработчик с 5+ годами коммерческого опыта в React, TypeScript и Next.js. Проектирую архитектуру SPA- и SSR-приложений с нуля, разрабатываю UI-киты, сложные динамические формы и интеграции со сторонними сервисами (телефония, карты, CRM). Довёл продукт от идеи до production как единственный frontend-разработчик. Руководил командой из 2 junior-разработчиков: code review, менторинг.",
    ],
  },
  skills: {
    title: "Навыки",
    content: [
      {
        label: "Языки и технологии",
        items: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS"],
      },
      {
        label: "Фреймворки",
        items: ["React", "SPA", "Next.js", "SSR", "React Native"],
      },
      {
        label: "Состояние и данные",
        items: ["MobX", "Redux", "Redux Toolkit", "React Query"],
      },
      {
        label: "Работа с API",
        items: ["REST API", "Axios", "GraphQL", "Apollo Client", "WebSocket"],
      },
      {
        label: "Формы и валидация",
        items: ["React Hook Form", "Formik", "Zod", "Schema-driven forms"],
      },
      {
        label: "UI и стилизация",
        items: [
          "Mantine",
          "Bootstrap",
          "Tailwind",
          "Storybook",
          "Адаптивная вёрстка",
        ],
      },
      {
        label: "Карты и визуализация",
        items: ["VK Maps", "Yandex Maps", "Recharts", "Tiptap"],
      },
      {
        label: "Тестирование",
        items: ["Vitest", "Jest", "React Testing Library"],
      },
      {
        label: "Инструменты",
        items: [
          "Git",
          "Webpack",
          "Vite",
          "ESLint",
          "Prettier",
          "Figma",
          "Docker",
          "Sentry",
          "Intercom",
        ],
      },
      { label: "CI/CD", items: ["GitLab CI", "GitHub Actions"] },
      {
        label: "Иностранные языки",
        items: ["English - B1"],
      },
    ],
  },
  experience: {
    title: "Опыт работы",
    stackLabel: "Стек",
    content: [
      {
        title: "ООО «Двигус»",
        summary: "PropTech, подбор недвижимости",
        description: [
          "Спроектировал архитектуру и разработал с нуля два frontend-приложения системы управления подбором недвижимости - для операторов и контент-менеджеров. Как единственный frontend-разработчик отвечал за весь frontend-стек и построение общего UI-кита на базе Mantine.",
          "Объединил в едином приложении оператора 3 ранее разрозненных сервиса - это упростило и ускорило рабочий процесс, избавив ~20 операторов от переключения между инструментами.",
          "Реализовал бесшовную интеграцию виджета телефонии в интерфейс оператора: инициировал расширение его публичных методов совместно с вендором - без этой доработки не удалось бы дать полный функционал виджета внутри нашего приложения.",
          "Совместно с командой сервиса телефонии выявил и задокументировал более 10 багов виджета, что повысило стабильность его работы и позволило избежать проблем в нашем приложении.",
          "Реализовал интеграции с внешними источниками данных (UIS, ЦИАН) и сервисом автоматического обзвона, обеспечив стабильную работу ключевых процессов колл-центра.",
          "Спроектировал сложные динамические формы: набор полей и правил валидации подставляется в зависимости от типа объекта.",
          "Оптимизировал производительность приложения (Code Splitting, Lazy Loading): сократил размер бандла при первой загрузке на 58%. Мигрировал проект с React 18 на React 19.",
          "Внедрил unit- и интеграционное тестирование (Vitest, React Testing Library), покрытие ключевых модулей ~40%; настроил CI-пайплайн (линтинг, тесты, сборка) в GitLab CI.",
        ],
        location: "г. Москва",
        position: "Frontend-разработчик",
        tags: [
          "React",
          "TypeScript",
          "MobX",
          "React Hook Form",
          "Mantine",
          "VK Maps",
          "Recharts",
          "Tiptap",
        ],
        from: "10.2023",
        to: "present",
      },
      {
        title: "ООО «Квантум»",
        summary: "C2B2C-платформа в сфере услуг красоты",
        description: [
          "Принимал ключевые архитектурные решения фронтенда, обеспечив единый подход к разработке веб- и мобильных приложений.",
          "Разработал клиентскую и бизнес-часть платформы: веб и мобильные приложения (Next.js, React Native) для клиентской части платформы.",
          "Зона ответственности выросла от самостоятельной frontend-разработки до управления командой из 2 junior-разработчиков: код-ревью, менторинг, распределение задач.",
          "Интегрировал Sentry для мониторинга ошибок и Intercom для коммуникации с пользователями.",
        ],
        location: "г. Якутск",
        position: "Frontend-разработчик",
        tags: [
          "React",
          "Next.js",
          "React Native",
          "Redux",
          "React Hook Form",
          "Apollo Client",
          "Mantine",
          "Sentry",
          "Intercom",
          "Yandex Maps",
        ],
        from: "06.2022",
        to: "08.2023",
      },
      {
        title: "ООО «АЭБ АйТи»",
        summary: "Региональный медицинский портал",
        description: [
          "Реализовал сабдоменную архитектуру сайтов для 30+ медицинских организаций: каждая организация получает собственный сайт с настраиваемой структурой страниц и темой оформления.",
          "Разработал административную панель для управления контентом и структурой сайтов без участия разработчиков.",
          "Разрабатывал сложные формы, drag-and-drop интерфейсы, WYSIWYG-редакторы и интеграцию с Яндекс Картами.",
          "Переписал легаси-страницу карты объектов (фильтрация точек, кластеризация) с Class Components на Hooks.",
        ],
        location: "г. Якутск",
        position: "Frontend-разработчик",
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux",
          "Formik",
          "Bootstrap",
          "Lottie",
          "Yandex Maps",
        ],
        from: "05.2021",
        to: "05.2022",
      },
    ],
  },
};

export const en: Resume = {
  firstName: "Vladimir",
  lastName: "Stepanov",
  position: "Frontend Developer",
  contacts: [
    { value: "https://t.me/hartaithan", type: "link" },
    { value: "stepanov.vladimir.in.re@gmail.com", type: "mail" },
    { value: "https://hartaithan.github.io", type: "link" },
    { value: "Russia, Yakutsk", type: "text" },
  ],
  about: {
    title: "About",
    content: [
      "Frontend developer with 5+ years of commercial experience in React, TypeScript, and Next.js. I design SPA and SSR application architecture from scratch, build UI kits, complex dynamic forms, and third-party integrations (telephony, maps, CRM). Took a product from idea to production as the sole frontend developer. Led a team of 2 junior developers: code review, mentoring.",
    ],
  },
  skills: {
    title: "Skills",
    content: [
      {
        label: "Languages & Technologies",
        items: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS"],
      },
      {
        label: "Frameworks",
        items: ["React", "SPA", "Next.js", "SSR", "React Native"],
      },
      {
        label: "State & Data",
        items: ["MobX", "Redux", "Redux Toolkit", "React Query"],
      },
      {
        label: "Work with API",
        items: ["REST API", "Axios", "GraphQL", "Apollo Client", "WebSocket"],
      },
      {
        label: "Forms & Validation",
        items: ["React Hook Form", "Formik", "Zod", "Schema-driven forms"],
      },
      {
        label: "UI & Styling",
        items: [
          "Mantine",
          "Bootstrap",
          "Tailwind",
          "Storybook",
          "Responsive design",
        ],
      },
      {
        label: "Maps & Visualization",
        items: ["VK Maps", "Yandex Maps", "Recharts", "Tiptap"],
      },
      { label: "Testing", items: ["Vitest", "Jest", "React Testing Library"] },
      {
        label: "Tools",
        items: [
          "Git",
          "Webpack",
          "Vite",
          "ESLint",
          "Prettier",
          "Figma",
          "Docker",
          "Sentry",
          "Intercom",
        ],
      },
      { label: "CI/CD", items: ["GitLab CI", "GitHub Actions"] },
      {
        label: "Foreign Languages",
        items: ["English - B1"],
      },
    ],
  },
  experience: {
    title: "Experience",
    stackLabel: "Stack",
    content: [
      {
        title: "Dvigus",
        summary: "PropTech, real estate matching",
        description: [
          "Designed the architecture and developed two frontend applications for a real estate matching management system from scratch — one for operators and one for content managers. As the sole frontend developer, I was responsible for the entire frontend stack and for building a shared UI kit based on Mantine.",
          "Consolidated 3 previously separate services into a single operator application, simplifying and speeding up the workflow and removing tool-switching for ~20 operators.",
          "Delivered seamless telephony widget integration into the operator interface: initiated an expansion of its public methods with the vendor - without this the widget's full functionality couldn't have been embedded in our app.",
          "Worked with the telephony service team to identify and document 10+ widget bugs, improving its stability and preventing issues in our application.",
          "Integrated external data sources (UIS, CIAN) and an automated dialing service, ensuring stable operation of key call center processes.",
          "Designed complex dynamic forms: the set of fields and validation rules is determined by the object type.",
          "Optimized application performance (Code splitting, Lazy loading): reduced the initial bundle size by 58%. Migrated the project from React 18 to React 19.",
          "Introduced unit and integration testing (Vitest, React Testing Library), ~40% coverage of key modules; set up a CI pipeline (linting, tests, build) in GitLab CI.",
        ],
        location: "Moscow, Russia",
        position: "Frontend Developer",
        tags: [
          "React",
          "TypeScript",
          "MobX",
          "React Hook Form",
          "Mantine",
          "VK Maps",
          "Recharts",
          "Tiptap",
        ],
        from: "10.2023",
        to: "present",
      },
      {
        title: "Qwantum",
        summary: "C2B2C beauty services platform",
        description: [
          "Made key frontend architecture decisions, ensuring a unified approach to web and mobile development.",
          "Built the client and business sides of the platform: web and mobile apps (Next.js, React Native) for the client side of the platform.",
          "Grew from sole frontend developer into leading a team of 2 junior developers: code review, mentoring, task distribution.",
          "Integrated Sentry for error monitoring and Intercom for user communication.",
        ],
        location: "Yakutsk, Russia",
        position: "Frontend Developer",
        tags: [
          "React",
          "Next.js",
          "React Native",
          "Redux",
          "React Hook Form",
          "Apollo Client",
          "Mantine",
          "Sentry",
          "Intercom",
          "Yandex Maps",
        ],
        from: "06.2022",
        to: "08.2023",
      },
      {
        title: "AEB IT",
        summary: "Regional medical portal",
        description: [
          "Implemented a subdomain architecture for 30+ medical organizations' websites: each organization gets its own site with a configurable page structure and theme.",
          "Built an admin panel for managing content and site structure without developer involvement.",
          "Developed complex forms, drag-and-drop interfaces, WYSIWYG editors, and Yandex Maps integration.",
          "Rewrote the legacy object map page (point filtering, clustering) from Class Components to Hooks.",
        ],
        location: "Yakutsk, Russia",
        position: "Frontend Developer",
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "Redux",
          "Formik",
          "Bootstrap",
          "Lottie",
          "Yandex Maps",
        ],
        from: "05.2021",
        to: "05.2022",
      },
    ],
  },
};

export const resume: Record<Language, Resume> = { ru, en };
