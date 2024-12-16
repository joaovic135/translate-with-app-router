# 🌐 Translate with Next.js

Translate with Next.js is a multilingual web application built with [Next.js](https://nextjs.org). This project demonstrates how to create a dynamic, multi-language website using Next.js's powerful features, including server-side rendering, static site generation, and internationalization.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm, yarn or pnpm.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/translate-with-pages.git
cd translate-with-pages
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## ✨ Features

- 🌍 Multi-language support
- 🚀 Next.js App Router
- 💨 Server-side rendering
- 📱 Responsive design
- 🔤 Dynamic language switching

## 🗂 Project Structure

```
translate-with-pages/
│
├── app/
│   ├── [lang]/
│   ├── fonts/
│   ├── globals.css
│   └── layout.tsx
│
├── lib/
│   ├── dictionary.js
│   └── dictionaries/
│
├── components/
│   └── LanguageSwitcher.js
│
└── public/
    ├── images/
    └── icons/
```

## 🌍 Localization

The project supports multiple languages using JSON dictionary files. Each language has its own translation file in the `dictionaries` directory.

Example translation file (`pt.json`):
```json
{
  "nav": {
    "home": "Início",
    "about": "Sobre"
  },
  "home": {
    "title": "Bem-vindo ao Nosso Site"
  }
}
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

## 🚀 Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/translate-with-pages)

## 📄 License

Distributed under the MIT License.
