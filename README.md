# 🌟 Nexa Foundation Website

<div align="center">
  

**Transforming Rural Education Through Technology & Innovation**

[![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

</div>

## 📖 About The Project

The Nexa Foundation website is a modern, responsive web application built to showcase the foundation's mission of transforming rural education in India. The site features beautiful animations, comprehensive information about programs, and an engaging user experience that reflects the foundation's commitment to educational excellence.

### 🎯 Mission
Bridging the digital divide in rural India by providing quality education, technology access, and skill development programs to underserved communities.

## ✨ Features

### 🏠 **Homepage**
- **Hero Section** with dynamic animations and compelling messaging
- **Impact Metrics** showcasing real-time statistics with CountUp animations
- **Vision Section** highlighting the foundation's goals and approach
- **Team Showcase** featuring leadership and key personnel
- **Call-to-Action** sections for donations and volunteer engagement

### 📝 **Blog System**
- **Dynamic Blog Posts** with individual pages for each article
- **Category Filtering** and search functionality
- **Featured Articles** and related content suggestions
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper meta tags and structure

### 📚 **Resources & Media**
- **Press Kit Downloads** with categorized assets
- **Media Gallery** featuring videos, photos, and audio content
- **Press Releases** with downloadable PDFs
- **Awards & Recognition** showcase
- **Media Contact** information for journalists

### 💝 **Donation System**
- **Multiple Payment Methods** (UPI, Credit/Debit Cards, Net Banking)
- **Tax Benefits** calculator with 80G exemption details
- **Impact Visualization** showing donation effects
- **Secure Payment** processing with instant receipts
- **Monthly/One-time** donation options

### 👥 **Additional Pages**
- **About Us** - Mission, vision, and values
- **Team** - Leadership and staff profiles
- **Contact** - Multiple ways to reach the foundation
- **Join Us** - Volunteer and career opportunities
- **Stories** - Success stories and testimonials

## 🛠️ Technology Stack

### **Frontend Framework**
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - Component-based UI library
- **TypeScript Support** - Type-safe development

### **Styling & UI**
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Custom Components** - Reusable UI components
- **Responsive Design** - Mobile-first approach

### **Animations & Interactions**
- **Framer Motion 11.0.0** - React animation library
- **GSAP 3.12.5** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animations
- **Smooth Transitions** - Enhanced user experience

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 13.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nakul-Jaglan/nexa.git
   cd nexa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website in action.

### 🏗️ Build for Production

1. **Create production build**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start production server**
   ```bash
   npm run start
   # or
   yarn start
   ```

The project is configured for static export, making it ready for deployment on any static hosting platform.

## 📁 Project Structure

```
nexa/
├── app/
│   ├── mission/
│   ├── blog/
│       └── [id]/
│   ├── contact/
│   ├── donate/
│   ├── join/
│   ├── resources/
│   ├── stories/
│   ├── team/
│   ├── values/
│   ├── terms/
│   ├── privacy/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── public/
│   └── images/
└── README.md
```

## 🎨 Design System

### **Color Palette**
- **Navy Blue** (`#0D1B2A`) - Primary brand color
- **Gold** (`#D4AF37`) - Accent and highlight color
- **White** (`#FFFFFF`) - Background and text
- **Gray Variants** - Supporting colors for text and backgrounds

### **Typography**
- **Headings** - Bold, impactful fonts for headers
- **Body Text** - Clean, readable fonts for content
- **Responsive Scaling** - Fluid typography across devices

### **Components**
- **Cards** - Glassmorphism effects with subtle shadows
- **Buttons** - Consistent styling with hover animations
- **Forms** - Accessible inputs with proper validation
- **Navigation** - Smooth transitions and clear hierarchy

## 🌟 Key Features Implementation

### **Blog System**
- **Static Generation** using `generateStaticParams`
- **Client/Server Separation** for optimal performance
- **Hydration-safe** date formatting
- **SEO Optimization** with proper meta tags

### **Animation System**
- **Scroll-triggered** animations using GSAP
- **Micro-interactions** with Framer Motion
- **Performance optimized** with proper cleanup
- **Accessible animations** respecting user preferences

### **Responsive Design**
- **Mobile-first** approach
- **Flexible grids** and layouts
- **Touch-friendly** interfaces
- **Cross-browser** compatibility

## 🔧 Configuration

### **Next.js Configuration**
```javascript
// next.config.js
const nextConfig = {
  output: 'export',        // Static export for hosting
  eslint: {
    ignoreDuringBuilds: true
  },
  images: { 
    unoptimized: true      // For static export compatibility
  }
};
```

### **Tailwind Configuration**
- **Custom colors** for brand consistency
- **Custom animations** for enhanced UX
- **Component-based** utility classes
- **Responsive breakpoints** for all devices


## 📞 Support & Contact

### **Technical Support**
- **Issues**: Report bugs or request features on GitHub Issues
- **Documentation**: Check the docs for detailed implementation guides

### **Foundation Contact**
- **Website**: [www.quantel.in](https://www.quantel.in)
- **Email**: support@quantel.in
- **Phone**: +91-85273-87917

### **Dependencies**
This project is built on the shoulders of giants. We're grateful to all the open-source projects that make this possible:

- **React** - For the amazing React framework
- **Vercel** - For Next.js and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer** - For the smooth animation library
- **GreenSock** - For professional-grade animations
- **Radix UI** - For accessible component primitives

---

<div align="center">

**Made with ❤️ for rural education in India**

[🌐 Website](https://www.quantel.in) • [📧 Contact](mailto:support@quantel.in) • [🐦 Instagram](https://www.instagram.com/quantelforbusiness) • [📱 LinkedIn](https://www.linkedin.com/company/quantel-in/)

⭐ **Star this repository if you found it helpful!** ⭐

</div>
