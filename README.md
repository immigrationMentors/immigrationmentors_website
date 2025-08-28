# Immigration Mentors Website

Professional visa and immigration consultancy website built with React and deployed on GitHub Pages.

## About

Immigration Mentors is a trusted consultancy based in Hyderabad, India, specializing in visa services, study abroad guidance, and immigration consulting.


## Services

- **Visa Applications** - Tourist, Business, Student, and Work visas
- **Study Abroad** - University admissions and student guidance  
- **Immigration Consulting** - Permanent residency assistance
- **Documentation** - Application preparation and support

## Technology Stack

- **React 19** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **GitHub Pages** - Hosting platform

## Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/immigrationMentors/immigrationmentors_website.git
   cd immigrationmentors_website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

The site will be automatically deployed to GitHub Pages at your configured URL.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation
│   ├── Footer.jsx      # Footer
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Countries.jsx   # Countries listing
│   ├── Contact.jsx     # Contact form
│   └── ...
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Configuration

The project is configured for GitHub Pages deployment with:
- Base path: `/immigrationmentors_website/`
- React Router basename for proper routing
- SPA support with 404.html redirect

## License

© 2025 Immigration Mentors. All rights reserved.

## Contact

**Immigration Mentors**  
Email: info.immigrationmentors@gmail.com


