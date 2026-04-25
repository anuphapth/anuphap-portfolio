# Anuphap Portfolio

Portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases professional background, technical skills, projects, and provides a means for visitors to make contact.

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

Portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases professional background, technical skills, projects, and provides a means for visitors to make contact.

## Features

- Responsive design optimized for desktop, tablet, and mobile devices
- Multi-page navigation with Next.js App Router
- Experience timeline page
- Interactive contact form powered by EmailJS
- Project showcase with detailed descriptions
- Skills and competencies display
- Educational background presentation
- Smooth animations using Motion library
- TypeScript for type safety and improved developer experience

## Technology Stack

| Category           | Technology         | Version  |
| ------------------ | ------------------ | -------- |
| Frontend Framework | Next.js            | 16.2.4   |
| Language           | TypeScript         | 5.8.2    |
| Build Tool         | Next.js CLI        | Latest   |
| Styling            | Tailwind CSS       | 4.1.14   |
| Routing            | Next.js App Router | Built-in |
| Animation          | Motion             | 12.38.0  |
| Form Handling      | EmailJS            | 4.4.1    |
| Icons              | Lucide React       | 1.11.0   |

## Prerequisites

Before starting the installation, ensure you have the following installed:

- Node.js version 18.0.0 or higher
- npm version 8.0.0 or higher

## Installation

1. Clone the repository:

```bash
git clone https://github.com/anuphapth/anuphap-portfolio-next.git
cd anuphap-portfolio-next
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (see [Environment Configuration](#environment-configuration)):

```bash
cp .env.example .env.local
```

4. Edit the `.env.local` file and add the required values

5. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Environment Configuration

The application requires environment variables for EmailJS connection and other social links. Copy `.env.example` to `.env.local` and configure the following variables:

### Required Variables

| Variable                         | Description         |
| -------------------------------- | ------------------- |
| `NEXT_PUBLIC_EMAILJS_SERVICE`    | EmailJS service ID  |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE`   | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key  |

### Optional Variables

| Variable                   | Description          |
| -------------------------- | -------------------- |
| `NEXT_PUBLIC_GITHUB_URL`   | GitHub profile URL   |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL |

To get EmailJS credentials, create an account at [EmailJS](https://www.emailjs.com/) and set up your email service and template

## Available Scripts

| Script          | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start development server on port 3000 |
| `npm run build` | Build application for production      |
| `npm run start` | Start production server               |
| `npm run lint`  | Run TypeScript linting                |

## Project Structure

```
anuphap-portfolio-next/
├── public/              # Static assets
│   └── assets/          # Images, fonts, and other assets
│       ├── profile.png    # Profile picture
│       └── icon.png      # Icon
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/page.tsx    # About page
│   │   ├── contact/page.tsx  # Contact page
│   │   ├── education/page.tsx # Education page
│   │   ├── projects/page.tsx # Projects page
│   │   ├── skills/page.tsx   # Skills page
│   │   ├── page.tsx          # Home page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/      # Reusable React components
│   │   └── Layout.tsx   # Main layout component
│   └── hooks/           # Custom React hooks
│       └── useScrollToTop.ts # Scroll to top hook
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## Deployment

### Production Build

```bash
npm run build
```

The production files will be generated and ready for deployment.

### Deployment Options

This application can be deployed on any static hosting platform:

- **Vercel**: Connect GitHub repository for automatic deployment
- **Netlify**: Drag and drop the build folder or connect via Git
- **GitHub Pages**: Use `gh-pages` package or GitHub Actions
- **Cloudflare Pages**: Connect repository for automatic builds

Ensure that environment variables are properly configured on the deployment platform

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

Please ensure the code follows the existing TypeScript and ESLint configurations

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details

## Contact

- **Name**: Anuphap Thianprayoon
- **GitHub**: [anuphapth](https://github.com/anuphapth)
- **LinkedIn**: [Anuphap Thianprayoon](https://www.linkedin.com/in/anuphap-thianprayoon-580248242/)
- **Email**: anuphap.thianprayoon@gmail.com
