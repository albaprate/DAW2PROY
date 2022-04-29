# Fashion e-commerce

### Boilerplate and Starter for Next JS 12+, Tailwind CSS 3 and TypeScript [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

<p align="center">
  <a href="https://creativedesignsguru.com/demo/Nextjs-Boilerplate/"><img src="public/assets/images/nextjs-starter-banner.png?raw=true" alt="Next js starter banner"></a>
</p>

🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Netlify, PostCSS, Tailwind CSS.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. You can check a [Next js templates demo](https://creativedesignsguru.com/demo/Nextjs-Boilerplate/).

### Features 

I used a ### Boilerplate and Starter for Next JS 12+, Tailwind CSS 3 and TypeScript [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz) that you can find here:
https://github.com/ixartz/Next-js-Boilerplate.git my-project-name

The boilerplate has:

 Next.js, Tailwind CSS and TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Netlify, PostCSS, Tailwind CSS as principle features.


### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```
git clone myrepository
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.

├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image use in home page
├── src
│   ├── components           # Layout components and more components
│   ├── contexts             # React context 
│   ├── data                 # Array with products data ---
│   ├── hooks                # ---
│   ├── layout               # Meta.tsx ------
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Layout template ----
│   └── utils                # Utility folder
├── README.md                # README file
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration

```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```
!!!!! install tailwind and ant design

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.



### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![Sponsor Next JS Boilerplate](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
