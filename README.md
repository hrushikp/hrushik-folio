# Hrushik Perumalla - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my experience as a Data Scientist and Business Systems Analyst.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Fast loading with optimized assets and code splitting
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom Design System
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## 🏃‍♂️ Running Locally

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🚀 GitHub Pages Deployment 

For GitHub Pages deployment from main branch:

1. **Update base URL for your repository**:
   - In `vite.config.ts`, change `base: './'` to `base: '/your-repo-name/'`
   - Replace `your-repo-name` with your actual GitHub repository name

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"  
   - Select "main" branch and "/dist" folder (or rename dist to docs)

4. **Deploy**:
   ```bash
   git add dist/
   git commit -m "Add build files"
   git push origin main
   ```

## 📝 Customization

### Content Updates

- **Personal Information**: Update contact details and social links
- **Experience**: Modify `src/pages/Experience.tsx`
- **Projects**: Edit `src/pages/Projects.tsx`  
- **Skills**: Update `src/pages/Skills.tsx`
- **Publications**: Modify `src/pages/Publications.tsx`

### Styling

- **Design System**: Customize colors and themes in `src/index.css`
- **Tailwind Config**: Modify `tailwind.config.ts` for custom utilities

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion
- React Router DOM

## Lovable Integration

**URL**: https://lovable.dev/projects/d59a285d-56ed-41a8-9dff-30175354372a

You can also deploy directly through [Lovable](https://lovable.dev/projects/d59a285d-56ed-41a8-9dff-30175354372a) by clicking Share -> Publish.
