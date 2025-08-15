// Application constants

export const SITE_CONFIG = {
  name: "Hrushik Perumalla",
  title: "Data Scientist & Analyst",
  description: "Data Scientist & Analyst specializing in machine learning, cloud computing, and business intelligence solutions.",
  url: "https://hrushikperumalla.com",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/hrushikperumalla",
    linkedin: "https://linkedin.com/in/hrushikperumalla",
    instagram: "https://instagram.com/hrushik_perumalla",
    email: "hrushikperumalla@gmail.com",
  },
};

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

export const CONTACT_INFO = {
  email: "hrushikperumalla@gmail.com",
  phone: "+49 17672520284",
  location: "Potsdam / Berlin, Germany",
};

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};