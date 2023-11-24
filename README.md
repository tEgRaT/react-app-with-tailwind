# Getting Started with Tailwind CSS Together with Create React App

This project was bootstrapped with [How To Use Tailwind CSS With React](https://www.codingthesmartway.com/how-to-use-tailwind-css-with-react/) and [Build a Website with React and Tailwind CSS](https://www.sitepoint.com/react-tailwind-css-build-site/).

## Step 1: Creating Your React Project

```bash
$ npx create-react-app react-app-with-tailwind
$ cd react-app-with-tailwind
```

## Step 2: Install Tailwind CSS

```bash
$ npm install -D tailwindcss postcss autoprefixer
```

## Step 3: Generate Configuration Files

```bash
$ npx tailwindcss init -p
```

## Step 4: Configure Path To Template Files

Inside tailwind.config.js we need to specify the path to our React template files by adding the following configuration setting:

```javascript
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {},
   },
   plugins: [],
 }
```

## Step 5: Add Tailwind Directives

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 6: Enjoy
