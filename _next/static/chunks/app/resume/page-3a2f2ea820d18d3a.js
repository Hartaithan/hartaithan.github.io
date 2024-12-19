(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{1298:function(e,t,a){Promise.resolve().then(a.bind(a,4931))},4931:function(e,t,a){"use strict";a.d(t,{default:function(){return w}});var n=a(7437),s=a(2997);let i=e=>{let{className:t,children:a}=e;return(0,n.jsx)("h1",{className:(0,s.cn)("mt-3 text-base font-semibold leading-[normal] sm:text-lg sm:leading-[normal]",t),children:a})},l=e=>{let{data:t}=e;return(0,n.jsx)("div",{className:"mt-2 flex flex-col self-start text-left text-sm font-medium xs:mt-0 xs:self-auto xs:text-right",children:t.map((e,t)=>{let{type:a,value:s}=e,i="".concat(a,"-").concat(t);return"mail"===a?(0,n.jsx)("a",{className:"underline",href:"mailto:".concat(s),children:s},i):"link"===a?(0,n.jsx)("a",{className:"underline",href:s,children:s},i):(0,n.jsx)("p",{children:s},i)})})},o=e=>{let{className:t,title:a,data:s,...i}=e;return(0,n.jsxs)("div",{className:t,...i,children:[a?(0,n.jsx)("h1",{className:"text-sm font-medium underline",children:a+":"}):(0,n.jsx)("h1",{className:"hidden text-sm font-medium underline sm:block",children:"‎"}),s.map((e,t)=>(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("div",{className:"relative top-2 mr-2 size-1 self-start bg-black print:bg-black"}),(0,n.jsx)("p",{className:"text-xs",children:e})]},t))]})},r=e=>{let{data:t}=e,{date:a,duration:s,title:i,description:l,position:o,tags:r}=t;return(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,n.jsxs)("div",{className:"flex min-w-48 max-w-48 flex-col text-xs text-neutral-600 sm:text-sm",children:[(0,n.jsx)("p",{children:a}),s.length>0&&(0,n.jsxs)("p",{children:["(",s,")"]})]}),(0,n.jsxs)("div",{className:"mt-2 flex flex-col text-sm sm:mt-0",children:[(0,n.jsx)("p",{className:"font-semibold",children:i}),(0,n.jsxs)("div",{className:"flex flex-col items-start text-neutral-600 sm:flex-row sm:items-center",children:[(0,n.jsx)("p",{className:"underline",children:o}),(0,n.jsxs)("p",{className:"ml-0 text-xs leading-[normal] sm:ml-1",children:["(",r.join(", "),")"]})]}),(0,n.jsx)("p",{className:"mt-1 text-xs leading-[normal] text-neutral-600 sm:mt-0.5 sm:text-sm sm:leading-[normal]",children:l})]})]})},d=e=>{let{data:t}=e,{date:a,title:s,specialty:i}=t;return(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,n.jsx)("div",{className:"flex min-w-48 max-w-48 flex-col text-sm text-neutral-600",children:(0,n.jsx)("p",{children:a})}),(0,n.jsxs)("div",{className:"mt-1 flex flex-col text-sm sm:mt-0",children:[(0,n.jsx)("p",{className:"font-semibold",children:s}),(0,n.jsx)("p",{className:"mt-1 text-xs leading-[normal] text-neutral-600 sm:mt-0.5 sm:text-sm sm:leading-[normal]",children:i})]})]})};var c=e=>{let{data:t}=e,{firstName:a,lastName:s,contacts:c,about:m,skills:x,experience:h,education:p}=t;return(0,n.jsxs)("div",{className:"mx-auto max-w-3xl bg-white px-4 py-5 shadow-lg md:px-8 md:py-8 print:p-0 print:shadow-none",children:[(0,n.jsxs)("div",{className:"flex flex-col items-start justify-between xs:flex-row xs:items-center",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-lg font-medium leading-[normal] sm:text-xl",children:a}),(0,n.jsx)("h1",{className:"text-xl font-bold leading-[normal] sm:text-2xl",children:s})]}),(0,n.jsx)(l,{data:c})]}),(0,n.jsx)(i,{children:m.title}),(0,n.jsx)("div",{className:"mt-3 flex flex-col gap-y-2 sm:mt-2",children:m.content.map((e,t)=>(0,n.jsx)("p",{className:"indent-2 text-sm leading-[normal] sm:indent-4",children:e},t))}),(0,n.jsx)(i,{children:x.title}),(0,n.jsxs)("div",{className:"mt-3 grid grid-flow-dense grid-rows-2 gap-x-3 gap-y-3 sm:mt-2 sm:grid-flow-col sm:gap-y-0",children:[(0,n.jsx)(o,{className:"row-span-3",title:"Frontend",data:x.frontend}),(0,n.jsx)(o,{className:"row-span-3",data:x.moreFrontend}),(0,n.jsx)(o,{title:"Mobile",data:x.mobile}),(0,n.jsx)(o,{title:"Backend",data:x.backend})]}),(0,n.jsx)(i,{children:h.title}),(0,n.jsx)("div",{className:"mt-3 flex flex-col gap-y-4 sm:mt-2 sm:gap-y-3",children:h.content.map((e,t)=>(0,n.jsx)(r,{data:e},t))}),(0,n.jsx)(i,{children:p.title}),(0,n.jsx)("div",{className:"mt-3 flex flex-col gap-y-4 sm:mt-2 sm:gap-y-3",children:p.content.map((e,t)=>(0,n.jsx)(d,{data:e},t))})]})};let m={frontend:["HTML, CSS, JavaScript ES6+","TypeScript 4+","CSS, SCSS, Tailwind","Responsive Design","Bootstrap, Mantine, Chakra UI","shadcn/ui, Framer Motion","Styled Components, Emotion","React, Next.js [Pages/App Router]","Vue 2/3, Vuex, Nuxt.js","Angular, RxJS, NgRX"],moreFrontend:["Redux / Toolkit, Mobx, Zustand","React Hook Form, Formik","GraphQL, Apollo Client","Canvas API, Intersection Observer API","Three JS, React Three Fiber","Notifications API, Service Workers","Pagination, Infinite Scroll","Lazy Loading, Virtualization","Jest, React Testing Library"],mobile:["Kotlin, Java","Android SDK, Volley","React Native","React Navigation","Reanimated, Gesture Handler"],backend:["NodeJS, ExpressJS","JWT Tokens, Cookies","MongoDB, PostgreSQL","Authentication","Web Sockets"]},x={ru:{firstName:"Владимир",lastName:"Степанов",contacts:[{value:"stepanov.vladimir.in.re@gmail.com",type:"mail"},{value:"https://hartaithan.github.io",type:"link"},{value:"https://t.me/hartaithan",type:"link"},{value:"г. Якутск",type:"text"}],about:{title:"О себе",content:["Я фронтенд разработчик со стремлением к постоянному развитию и совершенствованию своих навыков, чтобы создавать качественные и удобные для пользователя продукты","Мой путь в разработку начался с написания небольшой текстовой игры под Android, которая позволила мне понять, что программирование — это то, чем я хочу заниматься","За более чем три года опыта работы с фронтенд фреймворками (преимущественно React, но также есть опыт с React Native, Vue и Angular) я приобрел навыки создания качественных и отзывчивых пользовательских интерфейсов. Я работал над множеством проектов, включая создание корпоративных сайтов, админ панелей и мобильных приложений","Кроме того, у меня есть опыт менторства коллег, находящихся на этапе стажировки, и я всегда готов делиться своими знаниями и опытом. Я считаю, что обучение других — это отличный способ улучшить свои навыки и расширить свое понимание предметной области"]},skills:{title:"Навыки",...m},experience:{title:"Опыт",content:[{title:"ООО “Двигус”",description:"Отвечал за разработку системы управления подбором. В нее входили веб-приложение для работы операторов, интеграция сервиса обзвона и админ. панель",location:"г. Москва",position:"Frontend разработчик",tags:["React"],date:"Октябрь 2023 – по н.в.",duration:""},{title:"ООО “Квантум”",description:"Был частью команды разработки C2B2C платформы. Руководил разработкой клиенто-ориентированной части платформы, в нее входили веб-приложение на Next.js и мобильное приложение на React Native",location:"г. Якутск",position:"Frontend разработчик",tags:["React","Next.JS","React Native"],date:"Июнь 2022 - Август 2023",duration:"1 год 1 месяц"},{title:"ООО “АЭБ АйТи”",description:"В составе команды разрабатывал медицинский портал на Next.JS и его админ. панель на React",location:"г. Якутск",position:"Frontend разработчик",tags:["React","Next.JS"],date:"Май 2021 - Май 2022",duration:"1 год"}]},education:{title:"Образование",content:[{title:"Якутский колледж связи и энергетики (ЯКСЭ)",date:"2015 - 2018",specialty:"Аудиовизуальная техника"}]}},en:{firstName:"Vladimir",lastName:"Stepanov",contacts:[{value:"stepanov.vladimir.in.re@gmail.com",type:"mail"},{value:"https://hartaithan.github.io",type:"link"},{value:"https://t.me/hartaithan",type:"link"},{value:"Russia, Yakutsk",type:"text"}],about:{title:"About",content:["I am a frontend developer with a passion for continuous growth and improving my skills to create high-quality and user-friendly products","My journey into development began with writing a small text-based game for Android, which made me realize that programming is what I want to do","With over three years of experience working with frontend frameworks (primarily React, but also with React Native, Vue, and Angular), I have gained skills in creating high-quality and responsive user interfaces. I have worked on a variety of projects, including corporate websites, admin panels, and mobile applications","Additionally, I have experience mentoring colleagues who are at the internship stage, and I am always ready to share my knowledge and experience. I believe that teaching others is a great way to improve my own skills and expand my understanding of the subject"]},skills:{title:"About",...m},experience:{title:"Experience",content:[{title:"Dvigus",description:"I was responsible for developing a recruitment management system, which included a web application for operator workflows, integration with a call service, and an admin panel",location:"Russia, Moscow",position:"Frontend Developer",tags:["React"],date:"October 2023 – present",duration:""},{title:"Qwantum",description:"I was part of the team developing a C2B2C platform, where I led the development of the client-oriented parts, including a Next.js web application and a React Native mobile app",location:"Russia, Yakutsk",position:"Frontend Developer",tags:["React","Next.JS","React Native"],date:"June 2022 - August 2023",duration:"1 year 1 month"},{title:"AEB IT",description:"As part of the team, I developed a medical portal on Next.js and its admin panel on React",location:"Russia, Yakutsk",position:"Frontend Developer",tags:["React","Next.JS"],date:"May 2021 - May 2022",duration:"1 year"}]},education:{title:"Education",content:[{title:"Yakutsk College of Communications and Energy (YCCE)",date:"2015 - 2018",specialty:"Audio-visual technology"}]}}};var h=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...e,children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3M19 7h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-3"})]}),p=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...e,children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3M14 7v10M14 12a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2z"})]}),u=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...e,children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"})]}),g=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",...e,children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M17 17h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"}),(0,n.jsx)("path",{d:"M7 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"})]}),v=a(2265);let f=e=>{let{className:t,children:a,...i}=e;return(0,n.jsx)("button",{className:(0,s.cn)("flex min-w-0 flex-1 items-center gap-x-2 rounded-md px-2.5 py-2 md:min-w-28 md:flex-none","bg-neutral-800/80 text-sm font-medium text-white hover:bg-neutral-800","transition-all duration-300 ease-in-out",t),...i,children:a})};var w=()=>{let[e,t]=(0,v.useState)("ru"),a=(0,v.useMemo)(()=>"cv-frontend-stepanov-vladimir-".concat(e,".pdf"),[e]),s=(0,v.useCallback)(()=>{let e=document.createElement("a");e.href=a,e.download=a,e.click(),e.remove()},[a]),i=(0,v.useCallback)(()=>{let e=document.title;document.title=a,window.print(),document.title=e},[a]),l=(0,v.useCallback)(()=>t("en"),[]),o=(0,v.useCallback)(()=>t("ru"),[]);return(0,n.jsxs)("main",{id:"resume",className:"size-full overflow-auto bg-gray-100 p-2 pb-28 font-sans md:p-4 md:pb-20 print:bg-transparent print:p-0",children:[(0,n.jsx)(c,{data:x[e]}),(0,n.jsxs)("div",{className:"fixed bottom-4 left-2/4 grid w-11/12 -translate-x-2/4 grid-cols-2 gap-x-2 gap-y-2 sm:w-max md:grid-cols-4 print:hidden",children:[(0,n.jsxs)(f,{onClick:s,children:[(0,n.jsx)(u,{className:"size-5 min-w-5"}),"Download"]}),(0,n.jsxs)(f,{onClick:i,children:[(0,n.jsx)(g,{className:"size-5 min-w-5"}),"Print"]}),(0,n.jsxs)(f,{onClick:l,children:[(0,n.jsx)(p,{className:"size-5 min-w-5"}),"English"]}),(0,n.jsxs)(f,{onClick:o,children:[(0,n.jsx)(h,{className:"size-5 min-w-5"}),"Русский"]})]})]})}},2997:function(e,t,a){"use strict";a.d(t,{cn:function(){return i}});var n=a(1994),s=a(3335);let i=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[137,971,117,744],function(){return e(e.s=1298)}),_N_E=e.O()}]);