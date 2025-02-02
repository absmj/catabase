# 🐱 Catabase - Cute Cat Customizer

Welcome to **Catabase**, a fun project where users can create and customize adorable cats! This is my first experience working with **React.js** and **TypeScript**, and I had a great time experimenting with animations, local storage, and SVGs.

## 🚀 Features

- **User Authentication** – Register and log in to your account.
- **Dashboard** – Access your personal dashboard.
- **Cat Customization** – Add cute cats and personalize their appearance.
- **CSS Animations** – Enjoy smooth animations for an engaging experience.
- **Local Storage Support** – Save your customized cats and access them later.
- **SVG Graphics** – Beautifully rendered cats using SVG elements.

## 🛠️ Technologies Used

- **React.js** – UI development
- **TypeScript** – Type-safe JavaScript
- **CSS Animations** – Enhancing user experience
- **LocalStorage** – Persistent data storage
- **SVG** – Scalable and customizable graphics

## 💖 Special Thanks

This project was a fun learning experience, and I appreciate all the resources and inspirations that helped along the way!

---

⭐ If you like this project, consider giving it a star on GitHub!



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
