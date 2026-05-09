├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   └── .gitkeep
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
└── README.md
├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   └── .gitkeep
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
├── README.md
└── Tree.md
├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   └── .gitkeep
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
├── README.md
└── Tree.md
├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   └── .gitkeep
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
├── README.md
└── Tree.md
├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   └── .gitkeep
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
├── README.md
└── Tree.md
├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   └── .gitkeep
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
├── README.md
└── Tree.md
├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   └── .gitkeep
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
├── README.md
└── Tree.md
├── .gitignore
├── app
│   ├── client
│   │   ├── .env.development
│   │   ├── .env.production
│   │   ├── .hintrc
│   │   ├── @
│   │   │   └── components
│   │   │       └── ui
│   │   ├── components.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── src
│   │   │   ├── App.css
│   │   │   ├── App.tsx
│   │   │   ├── assets
│   │   │   ├── components
│   │   │   │   ├── features
│   │   │   │   │   ├── AttendanceForm.tsx
│   │   │   │   │   └── IpForm.tsx
│   │   │   │   └── ui
│   │   │   │       ├── badge.tsx
│   │   │   │       ├── button.tsx
│   │   │   │       ├── card.tsx
│   │   │   │       ├── form
│   │   │   │       │   ├── field.tsx
│   │   │   │       │   ├── input.tsx
│   │   │   │       │   ├── label.tsx
│   │   │   │       │   └── select.tsx
│   │   │   │       ├── separator.tsx
│   │   │   │       └── table.tsx
│   │   │   ├── index.css
│   │   │   ├── lib
│   │   │   │   ├── api.ts
│   │   │   │   └── utils.ts
│   │   │   ├── main.tsx
│   │   │   └── pages
│   │   │       ├── 404
│   │   │       │   └── NotFoundPage.tsx
│   │   │       ├── admin
│   │   │       │   └── AdminPage.tsx
│   │   │       ├── counter
│   │   │       │   └── CounterPage.tsx
│   │   │       └── HomePage.tsx
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   └── vite.config.ts
│   ├── data
│   │   ├── .gitkeep
│   │   ├── easycounter.db-shm
│   │   └── easycounter.db-wal
│   └── server
│       ├── jest.config.ts
│       ├── nodemon.json
│       ├── package-lock.json
│       ├── package.json
│       ├── server.ts
│       ├── src
│       │   ├── app.ts
│       │   ├── config
│       │   │   └── database.ts
│       │   ├── controllers
│       │   │   ├── churchAttendance.controller.ts
│       │   │   ├── churchSection.controller.ts
│       │   │   ├── churchService.controller.ts
│       │   │   └── csvExport.controller.ts
│       │   ├── middleware
│       │   │   ├── churchAttendance.middleware.ts
│       │   │   ├── churchSection.middleware.ts
│       │   │   └── churchService.middleware.ts
│       │   ├── routes
│       │   │   ├── churchAttendance.routes.ts
│       │   │   ├── churchSection.routes.ts
│       │   │   ├── churchService.routes.ts
│       │   │   └── csvExport.route.ts
│       │   ├── services
│       │   │   ├── churchAttendance.service.ts
│       │   │   ├── churchSection.service.ts
│       │   │   ├── churchService.service.ts
│       │   │   └── csvExport.service.ts
│       │   ├── sockets
│       │   │   └── socket.ts
│       │   ├── types
│       │   │   ├── churchAttendance.type.ts
│       │   │   ├── churchSection.type.ts
│       │   │   └── churchService.type.ts
│       │   └── __tests__
│       │       ├── controllers
│       │       │   ├── churchAttendance.controller.test.ts
│       │       │   ├── churchSection.controller.test.ts
│       │       │   └── churchService.controller.test.ts
│       │       ├── routes
│       │       │   ├── churchAttendance.routes.test.ts
│       │       │   ├── churchSection.routes.test.ts
│       │       │   └── churchService.routes.test.ts
│       │       ├── services
│       │       │   ├── churchAttendance.service.test.ts
│       │       │   ├── churchSection.service.test.ts
│       │       │   └── churchService.service.test.ts
│       │       └── socketTest.html
│       ├── tsconfig.json
│       └── tsconfig.test.json
├── docs
│   ├── COMPONENTS.md
│   ├── CONVENTIONS.md
│   ├── dev-log.md
│   └── plan.md
├── electron
│   ├── main.ts
│   └── tsconfig.json
├── nodemon.json
├── package-lock.json
├── package.json
├── packages
│   └── shared
│       └── package.json
├── README.md
└── Tree.md
