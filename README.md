# Anuphap Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases professional background, technical skills, projects, and provides a means for visitors to make contact.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This portfolio website serves as a professional showcase for Anuphap Thianprayoon's work, skills, and experience. It provides an interactive platform for potential employers, clients, and collaborators to explore projects and get in touch.

## Features

- Responsive design optimized for desktop, tablet, and mobile devices
- Multi-page navigation with React Router
- Experience timeline page
- Interactive contact form powered by EmailJS
- Project showcase with detailed descriptions
- Skills and competencies display
- Educational background presentation
- Smooth animations using Motion library
- TypeScript for type safety and improved developer experience

## Technology Stack

| Category           | Technology       | Version |
| ------------------ | ---------------- | ------- |
| Frontend Framework | React            | 19.0.0  |
| Language           | TypeScript       | 5.8.2   |
| Build Tool         | Vite             | Latest  |
| Styling            | Tailwind CSS     | 4.1.14  |
| Routing            | React Router DOM | 7.13.2  |
| Animation          | Motion           | 12.38.0 |
| Form Handling      | EmailJS          | 4.4.1   |
| Icons              | Lucide React     | 0.546.0 |

## Prerequisites

Before beginning the setup, ensure the following are installed:

- Node.js version 18.0.0 or higher
- npm version 8.0.0 or higher

## Installation

1. Clone the repository:

```bash
git clone https://github.com/anuphapth/anuphap-portfolio.git
cd anuphap-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (see [Environment Configuration](#environment-configuration)):

```bash
cp .env.example .env.local
```

4. Edit `.env.local` and add your configuration values.

5. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Environment Configuration

The application requires environment variables for EmailJS integration and optional social links. Copy `.env.example` to `.env.local` and configure the following variables:

### Required Variables

| Variable                  | Description         |
| ------------------------- | ------------------- |
| `VITE_EMAILJS_SERVICE`    | EmailJS service ID  |
| `VITE_EMAILJS_TEMPLATE`   | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key  |

### Optional Variables

| Variable            | Description           |
| ------------------- | --------------------- |
| `VITE_APP_NAME`     | Application name      |
| `VITE_APP_URL`      | Application URL       |
| `VITE_GITHUB_URL`   | GitHub profile URL    |
| `VITE_LINKEDIN_URL` | LinkedIn profile URL  |
| `VITE_EMAIL`        | Contact email address |

To obtain EmailJS credentials, create an account at [EmailJS](https://www.emailjs.com/) and set up an email service and template.

## Available Scripts

| Script               | Description                           |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Start development server on port 3000 |
| `npm run build`      | Build the application for production  |
| `npm run preview`    | Preview the production build locally  |
| `npm run clean`      | Remove the dist directory             |
| `npm run lint`       | Run TypeScript type checking          |
| `npm run type-check` | Alias for TypeScript type checking    |

## Project Structure

```
anuphap-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   │   └── profile.png  # Profile image
│   ├── components/      # Reusable React components
│   │   └── Layout.tsx   # Main layout component
│   ├── pages/           # Page components
│   │   ├── About.tsx    # About page
│   │   ├── Contact.tsx  # Contact page
│   │   ├── Education.tsx # Education page
│   │   ├── Experience.tsx # Experience page
│   │   ├── Home.tsx     # Home page
│   │   ├── Projects.tsx # Projects page
│   │   └── Skills.tsx   # Skills page
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite environment types
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### Deployment Options

This application can be deployed to any static hosting platform:

- **Vercel**: Connect the GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `gh-pages` package or GitHub Actions
- **Cloudflare Pages**: Connect the repository for automatic builds

Ensure environment variables are properly configured in the deployment platform.

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

Please ensure code follows the existing TypeScript and ESLint configurations.

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Name**: Anuphap Thianprayoon
- **GitHub**: [anuphapth](https://github.com/anuphapth)
- **LinkedIn**: [Anuphap Thianprayoon](https://www.linkedin.com/in/anuphap-thianprayoon-580248242/)
- **Email**: anuphap.thianprayoon@gmail.com
