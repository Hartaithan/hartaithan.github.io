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
      "Фронтенд разработчик с коммерческим опытом разработки на React с 2020 года. Специализируюсь на создании сложных веб-приложений: от внутренних админ-панелей до высоконагруженных интерфейсов для операционных команд",
      "Имею опыт разработки продуктов с нуля до production, принятия архитектурных решений на фронтенде и руководства небольшой командой разработчиков, включая проведение code review и менторство junior-специалистов",
    ],
  },
  experience: {
    title: "Опыт",
    content: [
      {
        title: "ООО “Двигус”",
        description: [
          "Разработал MVP системы управления подбором недвижимости с нуля как единственный frontend-разработчик: от проектирования интерфейсов и архитектуры до вывода продукта в production",
          "Объединил в одном приложении несколько рабочих инструментов операторов, что позволило отказаться от использования нескольких отдельных сервисов и упростило рабочий процесс",
          "Реализовал интеграции с внешними сервисами (телефония, UIS, ЦИАН) и автоматическим обзвоном, обеспечив стабильную работу ключевых процессов колл-центра",
          "Инициировал улучшения внешнего сервиса телефонии: сформировал предложения по расширению публичных методов для взаимодействия с UI",
          "Совместно с командой внешнего сервиса выявил и задокументировал более 10 багов, что повысило стабильность их виджета и улучшило интеграцию в нашем продукте",
        ],
        location: "г. Москва",
        position: "Frontend разработчик",
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
        date: "Октябрь 2023 – по н.в.",
        duration: "",
      },
      {
        title: "ООО “Квантум”",
        description: [
          "Руководил разработкой клиентской части C2B2C-платформы, включающей веб-приложение на Next.js и мобильное приложение на React Native",
          "Принимал ключевые архитектурные решения на фронтенде, обеспечивая масштабируемость приложения и единый подход к разработке",
          "Руководил небольшой командой фронтенд-разработчиков (2 junior разработчика): проводил code review, помогал в проектировании решений и развитии навыков",
          "Интегрировал сторонние сервисы (Sentry, Intercom) для мониторинга ошибок и коммуникации с пользователями",
        ],
        location: "г. Якутск",
        position: "Frontend разработчик",
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
        date: "Июнь 2022 - Август 2023",
        duration: "1 год 1 месяц",
      },
      {
        title: "ООО “АЭБ АйТи”",
        description: [
          "Участвовал в разработке регионального медицинского портала на Next.js и административной панели на React",
          "Реализовал систему сабдоменных сайтов для медицинских организаций с возможностью настройки структуры страниц и тем оформления",
          "Разрабатывал сложные формы, интерфейсы с drag-and-drop, WYSIWYG-редакторы и интеграции с картами",
          "Обеспечил возможность управления контентом и структурой сайтов без участия разработчиков",
        ],
        location: "г. Якутск",
        position: "Frontend разработчик",
        tags: [
          "React",
          "Next.js",
          "Redux",
          "Formik",
          "Bootstrap",
          "Lottie",
          "Yandex Maps",
        ],
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
      "Frontend developer with commercial experience in React development since 2020. I specialize in building complex web applications: from internal admin panels to high-load interfaces for operational teams.",
      "I have experience developing products from scratch to production, making frontend architectural decisions, and leading a small team of developers, including conducting code reviews and mentoring junior specialists.",
    ],
  },
  experience: {
    title: "Experience",
    content: [
      {
        title: "Dvigus",
        description: [
          "Developed the MVP of a real estate lead management system from scratch as the sole frontend developer: from UI and architecture design to bringing the product to production.",
          "Consolidated several operator tools into a single application, allowing the team to abandon multiple separate services and simplify the workflow.",
          "Implemented integrations with external services (telephony, UIS, CIAN) and automated calling systems, ensuring stable operation of key call center processes.",
          "Initiated improvements to the external telephony service by proposing extensions to public methods for better UI interaction.",
          "Collaborated with the external service team to identify and document more than 10 bugs, improving the stability of their widget and the integration within our product.",
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
        date: "October 2023 - present",
        duration: "",
      },
      {
        title: "Qwantum",
        description: [
          "Led the development of the client side of a C2B2C platform, including a web application built with Next.js and a mobile application built with React Native.",
          "Made key frontend architectural decisions, ensuring application scalability and a unified development approach.",
          "Led a small team of frontend developers (2 junior developers): conducted code reviews, assisted in solution design, and supported their professional growth.",
          "Integrated third-party services (Sentry, Intercom) for error monitoring and user communication.",
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
        date: "June 2022 - August 2023",
        duration: "1 year 1 month",
      },
      {
        title: "AEB IT",
        description: [
          "Participated in the development of a regional medical portal built with Next.js and an administrative panel built with React.",
          "Implemented a system of subdomain-based websites for medical organizations with customizable page structures and themes.",
          "Developed complex forms, drag-and-drop interfaces, WYSIWYG editors, and map integrations.",
          "Enabled content and site structure management without developer involvement.",
        ],
        location: "Yakutsk, Russia",
        position: "Frontend Developer",
        tags: [
          "React",
          "Next.js",
          "Redux",
          "Formik",
          "Bootstrap",
          "Lottie",
          "Yandex Maps",
        ],
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
