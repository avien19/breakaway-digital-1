# Breakaway Digital Website Clone

A complete clone of the OVO Azure business consulting website (https://ovo-azure.webflow.io/) built with modern HTML5, CSS3, and JavaScript. This project replicates the original design, functionality, and user experience with all animations, responsive design, and interactive elements.

## 🚀 Features

### Design & UI
- **Modern, Professional Design** - Clean, business-focused layout with gradient backgrounds and smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Interactive Animations** - Smooth scroll effects, hover animations, and floating elements
- **Accessibility** - WCAG compliant with proper focus states and keyboard navigation

### Pages Included
- **Homepage** - Hero section, services overview, process steps, FAQ, and newsletter signup
- **Services** - Detailed service offerings with process methodology
- **About** - Company mission, team members, statistics, and values
- **Blog** - Featured posts, category filtering, and article grid
- **Contact** - Contact form, company information, and FAQ section

### Interactive Features
- **Mobile Navigation** - Hamburger menu with smooth transitions
- **FAQ Accordions** - Expandable question/answer sections
- **Newsletter Signup** - Form validation and success/error messages
- **Contact Form** - Multi-field form with validation
- **Blog Filtering** - Category-based post filtering
- **Smooth Scrolling** - Anchor link navigation with offset for fixed header
- **Counter Animations** - Animated statistics on scroll
- **Parallax Effects** - Subtle parallax scrolling for visual depth

## 📁 Project Structure

```
breakaway-digital-clone/
├── index.html          # Homepage
├── services.html       # Services page
├── about.html          # About page
├── blog.html           # Blog page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet with all page styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and modern structure
- **CSS3** - Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)** - Modern JavaScript with modules and async/await
- **Font Awesome** - Icon library for UI elements
- **Google Fonts** - Inter font family for typography

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or Download** the project files to your local machine
2. **Open** the `index.html` file in your web browser
3. **Navigate** through the different pages using the navigation menu

### Local Development Server (Optional)

For the best development experience, serve the files through a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

### Breakpoints
- Mobile: `max-width: 768px`
- Tablet: `768px - 1024px`
- Desktop: `1024px+`

## 🎨 Customization

### Colors
The website uses a consistent color palette defined in CSS custom properties:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #3b82f6;
  --text-dark: #1e293b;
  --text-light: #64748b;
  --background-light: #f8fafc;
  --background-white: #ffffff;
}
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 700 weight
- **Body Text**: 400 weight
- **Small Text**: 300 weight

### Animations
All animations are defined in the CSS file and can be customized:
- Hover effects
- Scroll animations
- Loading animations
- Transition effects

## 🔧 JavaScript Features

### Core Functionality
- **Navigation** - Mobile menu toggle and smooth scrolling
- **FAQ** - Accordion functionality for expandable content
- **Forms** - Validation and submission handling
- **Animations** - Scroll-triggered animations and counter effects
- **Filtering** - Blog post category filtering

### Performance Optimizations
- **Throttled Scroll Events** - Optimized scroll performance
- **Intersection Observer** - Efficient scroll-based animations
- **Lazy Loading** - Image lazy loading for better performance
- **Event Delegation** - Efficient event handling

## 📊 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🚀 Performance Features

- **Optimized CSS** - Minified and organized stylesheets
- **Efficient JavaScript** - Modern ES6+ with performance optimizations
- **Responsive Images** - Optimized image loading
- **Smooth Animations** - Hardware-accelerated CSS animations
- **Fast Loading** - Optimized file sizes and loading strategies

## 📝 Content Management

### Adding New Blog Posts
1. Open `blog.html`
2. Add a new article in the `.posts-grid` section
3. Include the appropriate `data-category` attribute for filtering

### Updating Team Members
1. Open `about.html`
2. Modify the `.team-grid` section
3. Update member information and social links

### Modifying Services
1. Open `services.html`
2. Update the `.services-grid` section
3. Add or modify service cards as needed

## 🎯 SEO Features

- **Semantic HTML** - Proper heading hierarchy and semantic elements
- **Meta Tags** - Title and description for each page
- **Alt Text** - Descriptive alt text for images
- **Structured Data** - Schema markup ready
- **Fast Loading** - Optimized for Core Web Vitals

## 🔒 Security Features

- **Form Validation** - Client-side and server-side validation ready
- **XSS Protection** - Sanitized user inputs
- **CSRF Protection** - Ready for server-side implementation
- **Secure Headers** - Security headers ready for implementation

## 📈 Analytics Ready

The website is ready for analytics integration:
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Custom tracking events

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for educational purposes. The original design belongs to Breakaway Digital.

## 🙏 Acknowledgments

- Original design inspiration from Breakaway Digital (https://ovo-azure.webflow.io/)
- Font Awesome for icons
- Google Fonts for typography
- Modern web development best practices

## 📞 Support

For questions or support regarding this project, please open an issue in the repository.

---

**Note**: This is a clone project created for educational purposes. All content and design elements are inspired by the original Breakaway Digital website.
