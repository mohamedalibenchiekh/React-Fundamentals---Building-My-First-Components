# 🚀 React Fundamentals Lab - Personal Portfolio Preview

<div align="center">
  
  ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Components Created](#components-created)
- [Features & Exercises](#features--exercises)
- [Installation & Setup](#installation--setup)
- [Challenges & Solutions](#challenges--solutions)
- [Key Learnings](#key-learnings)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [Contact](#contact)

---

## 📖 Overview

This lab project demonstrates the fundamental concepts of React development through hands-on exercises. Built with **Vite** for modern, fast development experience, the project showcases component-based architecture, props usage, and component composition.

### 🎯 Learning Objectives Achieved

- ✅ Create functional React components with `.jsx` extension
- ✅ Understand and apply JSX syntax rules
- ✅ Pass and manage data using props
- ✅ Compose complex UIs from smaller components
- ✅ Apply professional CSS styling
- ✅ Debug common React errors
- ✅ Set up and configure Vite React project

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | Core UI library |
| Vite | 4.4.0 | Build tool & dev server |
| JavaScript (ES6+) | - | Programming language |
| CSS3 | - | Styling & animations |
| ESLint | 8.45.0 | Code linting |
| npm | 9.5.0 | Package management |

---

## 📁 Project Structure

```
lab-1-fundamentals/
├── 📂 public/
│   └── vite.svg
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── 📂 About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── 📂 ProjectCard/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectCard.css
│   │   ├── 📂 ProjectShowcase/
│   │   │   ├── ProjectShowcase.jsx
│   │   │   └── ProjectShowcase.css
│   │   ├── 📂 Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── 📂 Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Greeting.jsx
│   │   ├── Greeting.css
│   │   ├── UserCard.jsx
│   │   ├── UserCard.css
│   │   ├── Product.jsx
│   │   ├── Product.css
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   ├── BlogPost.jsx
│   │   ├── BlogPost.css
│   │   ├── Movie.jsx
│   │   ├── Movie.css
│   │   ├── MovieList.jsx
│   │   ├── MovieList.css
│   │   ├── ToggleButton.jsx
│   │   ├── ToggleButton.css
│   │   └── StatusBadge.jsx
│   ├── 📂 exercises/
│   │   ├── JSXErrors.jsx
│   │   └── JSXErrors.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

---

## 🧩 Components Created

### Part 1: JSX and Components Basics

| Component | Description | Props |
|-----------|-------------|-------|
| `Greeting` | Welcome component with React fun facts | None (hardcoded) |
| `StatusBadge` | Displays online/offline status | `isOnline` (boolean) |
| `JSXErrors` | Demonstrates fixed JSX syntax errors | None |

### Part 2: Working with Props

| Component | Description | Props |
|-----------|-------------|-------|
| `UserCard` | Reusable user profile card | `name`, `email`, `role` |
| `Product` | Product display with conditional styling | `title`, `price`, `inStock`, `rating` |
| `Card` | Wrapper component with children | `title`, `children` |

### Part 3: Component Composition

| Component | Description | Props |
|-----------|-------------|-------|
| `BlogPost` | Complete blog post using UserCard | `title`, `author`, `content`, `date` |
| `Movie` | Individual movie display | `title`, `director`, `year`, `rating` |
| `MovieList` | Renders multiple Movie components | `movies` (array) |
| `ToggleButton` | UI preview (state preparation) | `isVisible` (boolean) |

### Part 4: Portfolio Challenge

| Component | Description | Props |
|-----------|-------------|-------|
| `Header` | Portfolio header with navigation | `name`, `tagline` |
| `About` | About section with profile and skills | `profileImage`, `bio`, `skills` |
| `ProjectCard` | Individual project display | `name`, `description`, `technologies` |
| `ProjectShowcase` | Grid of project cards | `projects` (array) |
| `Contact` | Contact information display | `email`, `github`, `linkedin` |
| `Footer` | Copyright footer | `name` |

---

## ✨ Features & Exercises

### 📝 Part 1: JSX Fundamentals
- **Exercise 1.1** - First functional component with proper JSX structure
- **Exercise 1.2** - Fixed common JSX errors (fragments, ternary operators, className)
- **Exercise 1.3** - Conditional rendering with dynamic styling

### 🔄 Part 2: Props Mastery
- **Exercise 2.1** - Simple props with destructuring
- **Exercise 2.2** - Multiple data types (strings, numbers, booleans)
- **Exercise 2.3** - Children prop for component composition

### 🏗️ Part 3: Component Composition
- **Exercise 3.1** - Blog post composition using existing components
- **Exercise 3.2** - Dynamic list rendering with `.map()` and keys
- **Exercise 3.3** - State preparation with conditional UI

### 🎨 Part 4: Portfolio Challenge
- Professional portfolio layout
- Reusable component architecture
- Responsive design
- Modern CSS styling with gradients and animations
- Semantic HTML structure

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14.0 or higher)
- npm (v6.0 or higher) or yarn
- VS Code (recommended)

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/mohamedalibenchiekh/React-Fundamentals---Building-My-First-Component.git

# 2. Navigate to project directory
cd React-Fundamentals---Building-My-First-Component

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser
# Visit http://localhost:5173
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server |
| `npm run build` | Builds for production |
| `npm run preview` | Previews production build |
| `npm run lint` | Runs ESLint |

---

## 🧠 Challenges & Solutions

### Challenge 1: JSX Syntax Errors
**Problem**: Understanding JSX rules, especially multiple elements without wrapper.
**Solution**: Used React Fragments (`<>...</>`) to group elements without adding extra DOM nodes.

### Challenge 2: Conditional Rendering
**Problem**: Implementing dynamic content based on boolean props.
**Solution**: Mastered ternary operators and logical AND operators for clean conditional rendering.

### Challenge 3: Component Composition
**Problem**: Passing data from parent to deeply nested components.
**Solution**: Implemented proper prop drilling and destructuring for cleaner code.

### Challenge 4: List Keys
**Problem**: React key prop warnings in dynamic lists.
**Solution**: Used unique IDs from data objects instead of array indices.

### Challenge 5: Vite Configuration
**Problem**: Adjusting from Create React App to Vite.
**Solution**: Understood Vite's different structure (index.html at root, main.jsx entry point).

---

## 💡 Key Learnings

### 1. **JSX Fundamentals**
- JSX is syntactic sugar for `React.createElement()`
- Components must return a single root element
- Use `className` instead of `class`
- Self-closing tags required for void elements

### 2. **Props Deep Dive**
- Props are read-only (immutable)
- Destructuring props improves code readability
- `children` prop enables powerful composition
- Different data types require different handling

### 3. **Component Architecture**
- Break UI into small, reusable pieces
- Single Responsibility Principle applies to components
- Composition over inheritance
- Container vs Presentational components

### 4. **Styling Strategies**
- Component-scoped CSS with dedicated files
- Conditional classes for dynamic styling
- Responsive design with CSS Grid and Flexbox
- CSS transitions for better UX

### 5. **Vite Advantages**
- Faster development server with HMR
- Simpler configuration
- Modern build optimizations
- Better performance than CRA

---

## 🚀 Future Improvements

- [ ] Add React Router for navigation
- [ ] Implement state management with useState
- [ ] Add form handling and validation
- [ ] Integrate with a backend API
- [ ] Add dark mode toggle
- [ ] Implement animations with Framer Motion
- [ ] Add unit tests with Jest and React Testing Library
- [ ] Deploy to Vercel/Netlify
- [ ] Add more interactive features
- [ ] Implement actual toggle functionality from Exercise 3.3

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Test thoroughly

---

## 📞 Contact

**Mohamed Ali Ben Cheikh** - mohamed.ali.bencheikh@horizon-university.tn

**Project Link**: [https://github.com/mohamedalibenchiekh/React-Fundamentals---Building-My-First-Components](https://github.com/mohamedalibenchiekh/React-Fundamentals---Building-My-First-Components)

---

<div align="center">
  
### ⭐ Star this repository if you found it helpful!

**Happy Coding!** 🚀

</div>
