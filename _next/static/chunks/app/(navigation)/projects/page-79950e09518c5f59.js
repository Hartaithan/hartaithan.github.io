(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{1562:function(e,t,a){Promise.resolve().then(a.bind(a,7484))},3738:function(e,t,a){"use strict";var i=a(7437),r=a(2997);t.Z=e=>{let{className:t,...a}=e;return(0,i.jsx)("div",{className:(0,r.cn)("pointer-events-none absolute inset-0 z-10","before:blur-3 before:absolute before:left-0 before:top-0 before:h-full before:w-4/12","before:bg-gradient-to-r before:from-neutral-900 before:to-transparent before:filter","after:blur-3 after:absolute after:right-0 after:top-0 after:h-full after:w-4/12","after:bg-gradient-to-l after:from-neutral-900 after:to-transparent after:filter",t),...a})}},321:function(e,t,a){"use strict";a.d(t,{v:function(){return n}});var i=a(5142),r=a(2265);let l=(e,t)=>Math.abs(e)*t,n=e=>{let{data:t}=e,[[a,n],s]=(0,r.useState)([0,0]),o=(0,i.r)(0,t.length,a),c=(0,r.useCallback)(e=>s(t=>{let[a]=t;return[a+e,e]}),[]),h=(0,r.useCallback)(e=>s(t=>{let a=t[0]>e?-1:1;return[e,a]}),[s]),p=(0,r.useCallback)((e,t)=>{let{offset:a,velocity:i}=t,r=l(a.x,i.x);r<-1e4?c(1):r>1e4&&c(-1)},[c]);return{page:a,direction:n,index:o,paginate:c,handlePage:h,handleDragEnd:p}}},7484:function(e,t,a){"use strict";a.d(t,{default:function(){return C}});var i=a(7437),r=a(3738),l=a(2997),n=a(6298),s=a(2265);let o={duration:.3,ease:"easeInOut"},c={maxHeight:14,maxWidth:14,minWidth:14,minHeight:14,marginLeft:4,marginRight:4},h={width:144,height:22},p=e=>-((e+1)*22-83),d=(e,t)=>e===t?1.2:1===Math.abs(e-t)?1:2===Math.abs(e-t)?.8:0,m=(0,s.memo)(e=>{let{index:t,page:a,handlePage:r}=e,l=t===a;return(0,i.jsx)(n.E.button,{className:"rounded-full",disabled:l,onClick:()=>r(t),animate:{scale:d(t,a),background:l?"#ffffff":"#1b1b1b"},style:c,transition:o},t)}),g=(0,s.memo)(e=>{let{length:t,page:a,handlePage:c,className:d,...g}=e,u=p(a),f=(0,s.useMemo)(()=>Array.from({length:t}),[t]);return(0,i.jsxs)("div",{className:(0,l.cn)("z-20 flex scale-75 items-center justify-center overflow-hidden md:scale-100",d),style:h,...g,children:[(0,i.jsx)(n.E.div,{className:"flex w-full",initial:{x:u},animate:{x:u},transition:o,children:f.map((e,t)=>(0,i.jsx)(m,{index:t,page:a,handlePage:c},t))}),(0,i.jsx)(r.Z,{className:"w-full before:from-black after:from-black"})]})}),u={hh:e=>(0,i.jsxs)("svg",{viewBox:"0 0 266.667 266.667",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,i.jsxs)("defs",{children:[(0,i.jsx)("clipPath",{id:"clipPath18",clipPathUnits:"userSpaceOnUse",children:(0,i.jsx)("path",{d:"M1000 0c552.29 0 1000 447.715 1000 1000 0 552.29-447.71 1000-1000 1000C447.715 2000 0 1552.29 0 1000 0 447.715 447.715 0 1000 0zM558.785 1471.29v-340.15c51.766 61.72 113.844 92.82 185.844 92.82 37.098 0 70.312-7.06 100.078-21.14 29.883-13.96 52.234-31.88 67.293-53.61 15.176-21.96 25.41-46 30.941-72.5 5.528-26.36 8.274-67.42 8.274-123.062V589.922H790.273v327.566c0 65.024-2.902 106.202-9.019 123.692-6.117 17.61-16.863 31.45-32.313 41.64-15.492 10.47-34.785 15.65-58.078 15.65-26.629 0-50.59-6.7-71.371-19.92-21.219-13.34-36.512-33.26-46.16-59.88-9.844-26.67-14.742-66.041-14.547-118.158l-.195-310.59H397.883v881.368zm633.605 0v-340.15c51.81 61.72 113.84 92.82 185.84 92.82 36.95 0 70.36-7.06 100.24-21.14 29.73-13.96 52.08-31.88 67.1-53.61 15.18-21.96 25.45-46 30.94-72.5 5.53-26.36 8.28-67.42 8.28-123.062V589.922h-160.75v327.566c0 65.024-3.02 106.202-9.18 123.692-6.11 17.61-16.82 31.45-32.35 41.64-15.33 10.47-34.78 15.65-58.08 15.65-26.63 0-50.55-6.7-71.37-19.92-20.98-13.34-36.31-33.26-46.12-59.88-9.65-26.67-14.55-66.041-14.55-118.158v-310.59h-160.74v881.368z",clipRule:"evenodd"})}),(0,i.jsx)("clipPath",{id:"clipPath24",clipPathUnits:"userSpaceOnUse",children:(0,i.jsx)("path",{d:"M0 0h2000v2000H0z"})})]}),(0,i.jsx)("g",{transform:"matrix(1.33333 0 0 -1.33333 0 266.667)",children:(0,i.jsx)("g",{transform:"scale(.1)",children:(0,i.jsx)("g",{children:(0,i.jsx)("g",{clipPath:"url(#clipPath18)",children:(0,i.jsx)("g",{clipPath:"url(#clipPath24)",children:(0,i.jsx)("path",{fillOpacity:"1",fillRule:"nonzero",stroke:"none",d:"M-100-100h2200v2200H-100z"})})})})})})]}),mail:e=>(0,i.jsx)("svg",{viewBox:"0 0 455.862 455.862",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M441.088 63.154H14.774C6.615 63.154 0 69.77 0 77.93v300.003c0 8.16 6.615 14.775 14.774 14.775h426.313c8.16 0 14.775-6.614 14.775-14.775V77.93c0-8.16-6.614-14.776-14.774-14.776zm-37.694 253.505c6.256 5.43 6.926 14.903 1.497 21.16-5.43 6.254-14.901 6.928-21.161 1.496-3.876-3.364-101.683-88.252-105.452-91.523l-40.515 35.164c-2.82 2.448-6.326 3.672-9.832 3.672s-7.012-1.224-9.832-3.672l-40.515-35.164c-3.77 3.272-101.576 88.159-105.452 91.523-6.257 5.43-15.731 4.761-21.161-1.496-5.43-6.257-4.76-15.73 1.497-21.16L154.7 227.93 52.468 139.203c-6.256-5.43-6.926-14.903-1.497-21.16 5.431-6.256 14.904-6.928 21.161-1.496 5.07 4.4 146.594 127.231 155.799 135.22 7.972-6.919 150.305-130.451 155.799-135.22 6.256-5.431 15.731-4.762 21.161 1.496 5.43 6.257 4.76 15.731-1.497 21.16L301.162 227.93l102.232 88.729z"})}),github:e=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})}),telegram:e=>(0,i.jsx)("svg",{viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M46.137 6.552c-.75-.636-1.928-.727-3.146-.238h-.002c-1.281.514-36.261 15.518-37.685 16.131-.259.09-2.521.934-2.288 2.814.208 1.695 2.026 2.397 2.248 2.478l8.893 3.045c.59 1.964 2.765 9.21 3.246 10.758.3.965.789 2.233 1.646 2.494.752.29 1.5.025 1.984-.355l5.437-5.043 8.777 6.845.209.125c.596.264 1.167.396 1.712.396.421 0 .825-.079 1.211-.237 1.315-.54 1.841-1.793 1.896-1.935l6.556-34.077c.4-1.82-.156-2.746-.694-3.201zM22 32l-3 8-3-10 23-17-17 19z"})}),external:e=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})}),"linked-in":e=>(0,i.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M28.778 1.004H3.191a2.185 2.185 0 00-2.186 2.159v25.672a2.186 2.186 0 002.186 2.161h25.612c1.2 0 2.175-.963 2.194-2.159V3.165a2.195 2.195 0 00-2.195-2.161h-.029.001zM9.9 26.562H5.446V12.251H9.9zM7.674 10.293a2.579 2.579 0 112.579-2.58v.004a2.577 2.577 0 01-2.577 2.577h-.003zm18.882 16.269h-4.441v-6.959c0-1.66-.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441V12.252h4.266v1.951h.058a4.686 4.686 0 014.22-2.312h-.009c4.5 0 5.332 2.962 5.332 6.817v7.855z"})}),"google-play":e=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56L1 22.115V2.093l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zM1.46.433c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011L15.948 7.21l-3.846 3.835L1.46.433z"})})};var f=e=>{let{icon:t,...a}=e,r=u[t];return(0,i.jsx)(r,{...a})};let x=[{id:"platinum-calendar",label:"Platinum Calendar",category:"Web App | Next.JS",description:"An app for visualizing a collection of Platinum Trophies. Users can generate a personalized calendar showcasing their trophies and easily save or share it by simply entering their username. The app features multiple themes and allows filtering trophies by the year they were earned",image:"./projects/platinum-calendar.webp",tags:["Next.JS","Data Visualization","TailwindCSS","Cheerio"],links:[{icon:"github",href:"https://github.com/Hartaithan/platinum-calendar"},{icon:"external",href:"https://platinum-calendar.vercel.app"}]},{id:"trophy-hunt-template",label:"Trophy Hunt Template",category:"Web App | Next.JS | Notion Template",description:"A Notion template designed for managing a Platinum Trophy backlog. To streamline the process, it includes a companion app for efficient data management. The app enables users to easily search for and add their desired games, seamlessly integrating with the template via the Notion API",image:"./projects/trophy-hunt-template.webp",tags:["Next.JS","Notion API","Mantine","Cheerio"],links:[{icon:"github",href:"https://github.com/Hartaithan/trophy-hunt-template"},{icon:"external",href:"https://trophy-hunt-template.vercel.app"}]},{id:"a-z",label:"A-Z",description:"A small alphabet-based text puzzle game, written in Kotlin. The Volley library handles HTTP requests for the online leaderboard",category:"Mobile Game | Android",image:"./projects/a-z.webp",tags:["Android","Kotlin","Volley"],links:[{icon:"google-play",href:"https://play.google.com/store/apps/details?id=com.hartaithan.a_z"},{icon:"external",href:"https://hartaithan.github.io/a-z"}]},{id:"image-aware-background",label:"Image Aware Background",category:"Web App | Vue",description:"An app that extracts the primary and five most frequently used colors from an uploaded image, implemented using the Canvas API",image:"./projects/image-aware-background.webp",tags:["Vue","TypeScript","Canvas API"],links:[{icon:"github",href:"https://github.com/Hartaithan/image-aware-background"},{icon:"external",href:"https://image-aware-background.vercel.app"}]},{id:"trophy-list-fetcher",label:"Trophy List Fetcher",category:"Web App | Next.JS",description:"A tool designed to fetch trophy lists from PSNProfiles by parsing, or directly from the PSN API with authorization. This app automates trophy list imports",image:"./projects/trophy-list-fetcher.webp",tags:["Next.JS","PSN","Automation","Cheerio"],links:[{icon:"github",href:"https://github.com/Hartaithan/trophy-list-fetcher"},{icon:"external",href:"https://trophy-list-fetcher.vercel.app"}]},{id:"breeween",label:"Breeween",category:"Web App | Angular",description:"A practice project in Angular for building a web audio player. Users can add recordings to a Firebase Database. The audio player supports rewinding, volume control, and pause/resume functions. Audio control logic is encapsulated in a dedicated service",image:"./projects/breeween.webp",tags:["Angular","Firebase","Audio Player","Material Table"],links:[{icon:"github",href:"https://github.com/Hartaithan/breeween"},{icon:"external",href:"https://breeween.vercel.app"}]},{id:"ramutable",label:"Ramutable",category:"Web App | Nuxt",description:"A project to practice with Nuxt, using SSR (Server-Side Rendering) for efficient page rendering. Pagination is handled through query parameters, and the UI is styled with Tailwind CSS",image:"./projects/ramutable.webp",tags:["Vue","Nuxt.JS","Tailwind","SSR"],links:[{icon:"github",href:"https://github.com/Hartaithan/ramutable"},{icon:"external",href:"https://ramutable.vercel.app"}]},{id:"dimension-c-137",label:"Dimension C-137",category:"Web App | Angular",description:"An Angular project utilizing Apollo Client for data fetching. The app provides two views: Table and Cards, both equipped with Infinite Scroll",image:"./projects/dimension-c137.webp",tags:["Angular","Apollo Client","Infinite Scroll","NGRX","Material Table"],links:[{icon:"github",href:"https://github.com/Hartaithan/dimension-c137"},{icon:"external",href:"https://dimension-c137.vercel.app"}]},{id:"image-editor",label:"Image Editor",category:"Web App | Vue",description:"A web-based version of the Snipping Tool. Users can upload image, annotate them, and save edited image. Import and export work from both files and the clipboard",image:"./projects/image-editor.webp",tags:["Vue","Vuex","Canvas API"],links:[{icon:"github",href:"https://github.com/Hartaithan/image-editor"},{icon:"external",href:"https://image-editor-hartaithan.vercel.app"}]},{id:"camo-tracker",label:"Camo Tracker",description:"A Camo Tracker app for Black Ops Cold War, built with the MERN stack. JWT tokens handle authentication, user progress is managed by Redux, and data is stored in MongoDB. The design is optimized for both desktop and mobile",category:"Web App | React | Express",image:"./projects/camo-tracker.webp",tags:["Node.JS","Express.JS","MongoDB","React","React Router Dom","Redux"],links:[{icon:"github",href:"https://github.com/Hartaithan/camo-tracker-v2"},{icon:"external",href:"https://camo-tracker-hartaithan.vercel.app"}]}];var b=a(3145),w=e=>{let{index:t}=e,{label:a,category:r,description:n,tags:s,links:o,image:c}=x[t],h=t%2==0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:(0,l.cn)("pointer-events-none relative -z-10 flex h-auto w-full items-center justify-center md:h-2/5 lg:absolute lg:h-3/6 lg:w-9/12",h?"self-end":"self-start"),children:(0,i.jsx)("div",{className:"relative h-full w-11/12 sm:w-9/12 lg:w-full xl:w-auto",children:(0,i.jsx)(b.default,{fill:!0,unoptimized:!0,alt:"".concat(a," project preview"),className:"!relative aspect-video size-full object-contain",src:c})})}),(0,i.jsxs)("div",{className:(0,l.cn)("relative mt-3 flex w-full flex-col items-center self-auto lg:absolute lg:mt-0 lg:w-8/12",h?"lg:items-start lg:self-start":"lg:items-end lg:self-end"),children:[(0,i.jsxs)("h1",{className:"text-shadow text-xl font-semibold drop-shadow md:text-2xl lg:text-3xl",children:[t+1,". ",a]}),(0,i.jsx)("p",{className:"text-shadow text-sm font-semibold drop-shadow md:text-base lg:text-lg",children:r}),(0,i.jsx)("p",{className:"mt-2 rounded-lg bg-neutral-900/90 px-4 py-3 text-xs leading-snug md:text-base lg:px-5 lg:py-4 2xl:text-lg",children:n}),(0,i.jsx)("div",{className:"mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 lg:justify-start",children:s.map(e=>(0,i.jsx)("p",{className:"rounded-md bg-neutral-900/90 px-1.5 py-0.5 text-[0.6rem] font-medium sm:text-xs md:px-2 md:py-1 md:text-sm",children:e},e))}),(0,i.jsx)("div",{className:"mt-3 flex flex-wrap gap-x-3 gap-y-1",children:o.map(e=>(0,i.jsx)("a",{href:e.href,target:"_blank",children:(0,i.jsx)(f,{icon:e.icon,className:"size-5 fill-white"})},e.icon))})]})]})},v=a(321),j=e=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"})}),y=a(8614);let z={enter:e=>({x:e>0?1e3:-1e3,opacity:0,transition:{duration:.2}}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?1e3:-1e3,opacity:0,transition:{duration:.2}})},N={x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.5}},k={left:0,right:0},A=e=>{let{className:t,...a}=e;return(0,i.jsx)("button",{className:(0,l.cn)("absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center md:size-14 lg:size-16",t),...a,children:(0,i.jsx)(j,{className:"size-7 fill-white md:size-8 lg:size-10"})})};var C=()=>{let{page:e,direction:t,index:a,paginate:r,handlePage:l,handleDragEnd:s}=(0,v.v)({data:x});return(0,i.jsxs)("div",{className:"flex size-full items-center justify-center overflow-hidden",children:[(0,i.jsx)(A,{className:"left-0 rotate-180 sm:left-1 md:left-4",onClick:()=>r(-1)}),(0,i.jsx)(A,{className:"right-0 sm:right-1 md:right-4",onClick:()=>r(1)}),(0,i.jsx)(y.M,{initial:!1,mode:"wait",custom:t,children:(0,i.jsx)(n.E.div,{id:"slide",className:"relative flex h-full w-10/12 flex-col items-center justify-center md:w-9/12 2xl:w-8/12",custom:t,variants:z,initial:"enter",animate:"center",exit:"exit",drag:"x",transition:N,dragConstraints:k,dragElastic:1,onDragEnd:s,children:(0,i.jsx)(w,{index:a})},e)}),(0,i.jsx)(g,{className:"absolute bottom-4 sm:bottom-5 md:bottom-6",length:x.length,page:a,handlePage:l})]})}},2997:function(e,t,a){"use strict";a.d(t,{cn:function(){return l}});var i=a(1994),r=a(3335);let l=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,i.W)(t))}}},function(e){e.O(0,[137,298,528,971,117,744],function(){return e(e.s=1562)}),_N_E=e.O()}]);