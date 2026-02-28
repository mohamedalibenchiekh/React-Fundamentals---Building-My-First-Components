# Lab 1: React Fundamentals - Building Your First Components

## Practical Exercises for Chapter 1 (VITE Edition)

<div align="center">
  
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=flat-square&logo=vite&logoColor=white)
![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green?style=flat-square)
![Time](https://img.shields.io/badge/Time-2--3%20hours-blue?style=flat-square)

</div>

---

## 📑 Table of Contents

1. [Lab Overview](#lab-overview)
2. [Part 1: JSX and Components Basics](#part-1-jsx-and-components-basics)
   - [Exercise 1.1: Your First Component](#exercise-11-your-first-component)
   - [Exercise 1.2: JSX Rules](#exercise-12-jsx-rules)
   - [Exercise 1.3: Conditional Rendering](#exercise-13-conditional-rendering)
3. [Part 2: Working with Props](#part-2-working-with-props)
   - [Exercise 2.1: Simple Props](#exercise-21-simple-props)
   - [Exercise 2.2: Props with Different Data Types](#exercise-22-props-with-different-data-types)
   - [Exercise 2.3: Props with Children](#exercise-23-props-with-children)
4. [Part 3: Component Composition](#part-3-component-composition)
   - [Exercise 3.1: Building a Blog Post Component](#exercise-31-building-a-blog-post-component)
   - [Exercise 3.2: Building a Movie List](#exercise-32-building-a-movie-list)
   - [Exercise 3.3: State Preview](#exercise-33-state-preview)
5. [Part 4: Project Challenge](#part-4-project-challenge)
   - [Personal Portfolio Preview](#personal-portfolio-preview)
6. [Submission Guidelines](#submission-guidelines)
7. [Common Mistakes](#common-mistakes)
8. [Answer Key](#answer-key)

---

## 🎯 Lab Overview

### Learning Objectives

By completing this lab, you will:

| Objective | Description |
|-----------|-------------|
| ✅ Create functional React components | Build reusable UI pieces with JSX |
| ✅ Understand JSX syntax rules | Learn proper JSX structure and conventions |
| ✅ Work with props | Pass data between components |
| ✅ Compose components | Build complex UIs from simple pieces |
| ✅ Apply CSS styling | Style components professionally |
| ✅ Debug React errors | Identify and fix common issues |

### Prerequisites

- ✅ Node.js installed (v14.0 or higher)
- ✅ VS Code or preferred editor
- ✅ Basic JavaScript knowledge (variables, functions, arrays, objects)
- ✅ Completed reading Chapter 1

---

## 🚀 Setup: Vite - Modern & Fast

### Step 1: Create New React App

```bash
npm create vite@latest lab-1-fundamentals -- --template react
```

### Step 2: Enter Project Directory

```bash
cd lab-1-fundamentals
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

Your browser will open at **http://localhost:5173** (Vite default port).

### 📁 Vite Project Structure

```
lab-1-fundamentals/
├── index.html                 # At ROOT level (not in public/)
├── package.json
├── vite.config.js
├── 📂 src/
│   ├── main.jsx               # Entry point (not src/index.js)
│   ├── App.jsx
│   ├── App.css
│   └── 📂 components/          # Your components here
│       └── *.jsx              # All React files use .jsx extension
```

### ⚠️ Important Notes

- **index.html** is at ROOT level (not in public/)
- **src/main.jsx** is the entry point (not src/index.js)
- Component files use **.jsx extension** (e.g., `Greeting.jsx`, not `Greeting.js`)

---

## 📝 Part 1: JSX and Components Basics

### 📚 Learning Recap

Before starting, remember:

- ✅ Components are JavaScript functions that return JSX
- ✅ JSX looks like HTML but is JavaScript
- ✅ JSX gets compiled to `React.createElement()` calls
- ✅ Components must return a **single root element**
- ✅ Use **.jsx extension** for files that contain React components

---

### Exercise 1.1: Your First Component

#### Task
Create a simple greeting component that displays welcome information.

#### Instructions

1. **Create the component file:**
   ```bash
   src/components/Greeting.jsx
   ```

2. **Write a component that displays:**
   - A greeting message: "Welcome to React!"
   - A subtitle: "This is my first component"
   - A fun fact about React

3. **Requirements:**
   - No props yet (hardcoded text)
   - Export the component
   - Use semantic HTML tags (`h1`, `h2`, `p`)
   - Add basic CSS styling

#### Template

```jsx
// src/components/Greeting.jsx
import './Greeting.css';

export default function Greeting() {
  return (
    <div className="greeting-container">
      {/* Add your JSX here */}
    </div>
  );
}
```

```css
/* src/components/Greeting.css */
.greeting-container {
  /* Add your styles here */
}
```

#### Testing Checklist
- [ ] Does the component render on the page?
- [ ] Can you see all three pieces of information?
- [ ] Is it styled nicely?

#### 💡 Hints
- Component names must start with capital letters
- Use `export default Greeting` to export
- Look at Chapter 1, Section 7 for component syntax

---

### Exercise 1.2: JSX Rules

#### Task
Fix the broken JSX code snippets below.

#### Instructions

1. **Create the file:**
   ```bash
   src/exercises/JSXErrors.jsx
   ```

2. **Identify and fix the errors in each component:**

```jsx
// ERROR 1: What's wrong here?
function BadComponent1() {
  return {
    <h1>Hello</h1>
    <p>This is broken</p>
  }
}

// ERROR 2: What's wrong here?
function BadComponent2() {
  const isTrue = true
  return {
    <div>
      <p>Result: {if (isTrue) { 'Yes' }}</p>
    </div>
  }
}

// ERROR 3: What's wrong here?
function BadComponent3() {
  return {
    <div class="container">
      <img src="cat.jpg">
      <p>A paragraph</p>
    </div>
  }
}
```

#### What You Need to Do

1. Identify the error in each component
2. Write the corrected version
3. Add a comment above each corrected component explaining the error

#### 💡 Hints

| Error | Hint |
|-------|------|
| Error 1 | Think about "single root element" (use `<> </>` or a `<div>`) |
| Error 2 | Think about expressions vs statements (use ternary operator) |
| Error 3 | Think about `className` vs `class` and self-closing tags |

#### Testing Checklist
- [ ] Can you explain why each was broken?
- [ ] Do your fixed versions not throw errors?

---

### Exercise 1.3: Conditional Rendering

#### Task
Create a component that shows/hides content based on a boolean value.

#### Instructions

1. **Create the file:**
   ```bash
   src/components/StatusBadge.jsx
   ```

2. **Create a component that:**
   - Accepts a boolean value: `isOnline`
   - If true: shows "Online" with green styling
   - If false: shows "Offline" with red styling
   - Displays: "User is currently [online/offline]"

3. **For now, use hardcoded values:**
   ```jsx
   // At the top of the component
   const isOnline = true; // Change to test both cases
   ```

#### Template

```jsx
// src/components/StatusBadge.jsx
import './StatusBadge.css';

export default function StatusBadge() {
  const isOnline = true; // Change to test both states
  
  return (
    <div className="status-badge">
      {/* Add your conditional rendering here */}
    </div>
  );
}
```

#### Requirements
- ✅ Use conditional rendering (ternary operator)
- ✅ Different styles for each state
- ✅ Works with both true and false

#### 💡 Hints
- Use ternary operator: `isOnline ? <content if true> : <content if false>`
- Or use logical AND: `isOnline && <content>`
- Style with inline styles or CSS classes

#### Testing Checklist
- [ ] Does it show correct styling for `true`?
- [ ] Does it show correct styling for `false`?
- [ ] Are the colors different for each state?

---

## 🔄 Part 2: Working with Props

### 📚 Learning Recap

Remember:

- ✅ Props are arguments passed to components
- ✅ Props are **immutable** (read-only)
- ✅ Props allow component reusability
- ✅ Destructuring props makes code cleaner

---

### Exercise 2.1: Simple Props

#### Task
Create a reusable User Card component.

#### Instructions

1. **Create the file:**
   ```bash
   src/components/UserCard.jsx
   ```

2. **Accept these props:**
   - `name` (string): User's full name
   - `email` (string): User's email address
   - `role` (string): User's role

3. **Display in a card:**
   ```
   [Name]
   Email: [Email]
   Role: [Role]
   ```

4. **Create 3 user cards in App.jsx:**

| User | Name | Email | Role |
|------|------|-------|------|
| 1 | Alice | alice@example.com | Developer |
| 2 | Bob | bob@example.com | Designer |
| 3 | Charlie | charlie@example.com | Manager |

#### Template

```jsx
// src/components/UserCard.jsx
import './UserCard.css';

export default function UserCard({ name, email, role }) {
  return (
    <div className="user-card">
      {/* Add your JSX here */}
    </div>
  );
}
```

#### Requirements
- ✅ Use destructuring in function parameter
- ✅ Component works with different props
- ✅ Nice styling (card with border/shadow)

#### Testing Checklist
- [ ] Does each card show correct information?
- [ ] Can you change props and see different data?
- [ ] Does it look like a proper card?

---

### Exercise 2.2: Props with Different Data Types

#### Task
Create a Product component that accepts different data types.

#### Instructions

1. **Create the file:**
   ```bash
   src/components/Product.jsx
   ```

2. **Accept these props:**
   - `title` (string): Product name
   - `price` (number): Price in dollars
   - `inStock` (boolean): Is it available?
   - `rating` (number): Star rating (0-5)

3. **Display:**
   - Product title as heading
   - Price formatted as "$XX.XX"
   - Stock status with different colors
   - Star rating as "★★★★★" based on rating

4. **Create 3 products in App.jsx:**

| Product | Price | Stock | Rating |
|---------|-------|-------|--------|
| Laptop | $999 | In Stock | 4.5 |
| Phone | $499 | Out of Stock | 4 |
| Headphones | $99 | In Stock | 5 |

#### Template

```jsx
// src/components/Product.jsx
import './Product.css';

export default function Product({ title, price, inStock, rating }) {
  // Helper function to render stars
  const renderStars = () => {
    // Your star rendering logic here
  };

  return (
    <div className="product-card">
      {/* Add your JSX here */}
    </div>
  );
}
```

#### 💡 Hints
- For price: `price.toFixed(2)`
- For stars: Use a loop or `.map()` with an array
- For stock status: Use conditional rendering

#### Testing Checklist
- [ ] Are prices formatted correctly?
- [ ] Are stock statuses color-coded?
- [ ] Do the stars match the rating?

---

### Exercise 2.3: Props with Children

#### Task
Create a Card wrapper component.

#### Instructions

1. **Create the file:**
   ```bash
   src/components/Card.jsx
   ```

2. **The component should:**
   - Accept a `title` prop
   - Accept `children` (content between tags)
   - Display title as header
   - Display children inside styled card

3. **Use in App.jsx:**
   ```jsx
   <Card title="Card 1">
     <p>This is the content inside Card 1</p>
   </Card>
   ```

#### Template

```jsx
// src/components/Card.jsx
import './Card.css';

export default function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
```

#### Requirements
- ✅ Use the `children` prop
- ✅ Title and content are flexible
- ✅ Card has border/shadow styling

#### Testing Checklist
- [ ] Does the title appear for each card?
- [ ] Does content inside appear correctly?
- [ ] Can you put different content in each card?

---

## 🏗️ Part 3: Component Composition

### 📚 Learning Recap

Component composition means:

- ✅ Breaking UI into small, reusable pieces
- ✅ Combining components to build larger components
- ✅ Parent components pass props to child components

---

### Exercise 3.1: Building a Blog Post Component

#### Task
Create a complete blog post using smaller components.

#### Instructions

1. **Create the file:**
   ```bash
   src/components/BlogPost.jsx
   ```

2. **Combine these elements:**
   - Header with post title
   - UserCard component showing author
   - Post content (text)
   - Footer with date

3. **Structure:**
   ```
   [Post Title - as h1]
   [Author info using UserCard]
   [Post content paragraph]
   [Published date]
   ```

4. **Create 2 blog posts in App.jsx:**

| Post | Title | Author | Date |
|------|-------|--------|------|
| 1 | Learning React | Alice (Developer) | Jan 15 |
| 2 | React Tips | Bob (Designer) | Jan 20 |

#### Template

```jsx
// src/components/BlogPost.jsx
import UserCard from './UserCard';
import './BlogPost.css';

export default function BlogPost({ title, author, content, date }) {
  return (
    <article className="blog-post">
      {/* Add your JSX here */}
    </article>
  );
}
```

#### Requirements
- ✅ Reuse the UserCard component
- ✅ Pass props from BlogPost to UserCard
- ✅ Style nicely (padding, margins, fonts)

#### Testing Checklist
- [ ] Does the post title appear?
- [ ] Does UserCard show author info?
- [ ] Does post content display?
- [ ] Is the date visible?

---

### Exercise 3.2: Building a Movie List

#### Task
Create a movie list using component composition.

#### Instructions

1. **Create Movie component:**
   ```bash
   src/components/Movie.jsx
   ```
   - Accepts: `title`, `director`, `year`, `rating`
   - Displays all movie information

2. **Create MovieList component:**
   ```bash
   src/components/MovieList.jsx
   ```
   - Accepts: `movies` (array of movie objects)
   - Renders multiple Movie components using `.map()`

3. **Movie data structure:**
   ```jsx
   const movies = [
     { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
     { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
     { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
     { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
   ];
   ```

#### Templates

**Movie.jsx:**
```jsx
// src/components/Movie.jsx
import './Movie.css';

export default function Movie({ title, director, year, rating }) {
  return (
    <div className="movie-card">
      {/* Add your JSX here */}
    </div>
  );
}
```

**MovieList.jsx:**
```jsx
// src/components/MovieList.jsx
import Movie from './Movie';
import './MovieList.css';

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h2>Movie Collection</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            director={movie.director}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}
```

#### Requirements
- ✅ Movie component displays individual movie
- ✅ MovieList uses `.map()` to render multiple movies
- ✅ Each movie has consistent styling
- ✅ Each movie has a `key` prop (use the `id`)

#### Testing Checklist
- [ ] Do all movies appear in the list?
- [ ] Does each movie show correct info?
- [ ] Are they styled consistently?

---

### Exercise 3.3: State Preview

#### Task
Create a toggle component without state (prepare the UI).

#### Instructions

1. **Create the file:**
   ```bash
   src/components/ToggleButton.jsx
   ```

2. **Create a component that:**
   - Shows a button with text "Click me!"
   - Has a content area below that shows:
     - "Content is VISIBLE" (green styling)
     - OR "Content is HIDDEN" (gray styling)

3. **For now, create two versions:**
   - One with visible content
   - One with hidden content

#### Template

```jsx
// src/components/ToggleButton.jsx
import './ToggleButton.css';

export default function ToggleButton({ isVisible = true }) {
  return (
    <div className="toggle-container">
      <button className="toggle-button">Click me!</button>
      <div className={`content-area ${isVisible ? 'visible' : 'hidden'}`}>
        {isVisible ? (
          <p className="visible-message">Content is VISIBLE</p>
        ) : (
          <p className="hidden-message">Content is HIDDEN</p>
        )}
      </div>
    </div>
  );
}
```

#### Requirements
- ✅ Button element (doesn't need to work yet)
- ✅ Two different displays based on prop
- ✅ Nice styling for visible/hidden states

#### Testing Checklist
- [ ] Does it show the visible message?
- [ ] Can you change the prop to show hidden?
- [ ] Is styling different for each state?

---

## 🎨 Part 4: Project Challenge

### Personal Portfolio Preview

<div align="center">
  
**Difficulty:** Medium | **Time Estimate:** 2-3 hours

</div>

### Challenge Description

Build a **Personal Portfolio Website Preview** component. This is a single-page preview of what a portfolio might look like. Later chapters will make it interactive!

### Core Features

#### 1. Header Component (`Header.jsx`)

| Prop | Type | Description |
|------|------|-------------|
| `name` | string | Your name as title |
| `tagline` | string | Brief tagline about yourself |

**Navigation links** (display only, no routing):
- Home
- About
- Projects
- Contact

#### 2. About Section Component (`About.jsx`)

| Prop | Type | Description |
|------|------|-------------|
| `profileImage` | string | Image URL (placeholder) |
| `bio` | string | 2-3 sentences about yourself |
| `skills` | array | Skills list (React, JS, HTML, CSS) |

#### 3. Project Components

**ProjectCard.jsx**
| Prop | Type | Description |
|------|------|-------------|
| `name` | string | Project name |
| `description` | string | Project description |
| `technologies` | array | Technologies used |

**ProjectShowcase.jsx**
| Prop | Type | Description |
|------|------|-------------|
| `projects` | array | Array of project objects |

#### 4. Contact Component (`Contact.jsx`)

| Prop | Type | Description |
|------|------|-------------|
| `email` | string | Your email |
| `github` | string | GitHub URL |
| `linkedin` | string | LinkedIn URL |

#### 5. Footer Component (`Footer.jsx`)

| Prop | Type | Description |
|------|------|-------------|
| `name` | string | Your name for copyright |

### 📁 Required File Structure

```
src/
├── 📂 components/
│   ├── 📂 Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── 📂 About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── 📂 ProjectCard/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectCard.css
│   ├── 📂 ProjectShowcase/
│   │   ├── ProjectShowcase.jsx
│   │   └── ProjectShowcase.css
│   ├── 📂 Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   └── 📂 Footer/
│       ├── Footer.jsx
│       └── Footer.css
└── App.jsx
```

### Step-by-Step Guide

#### Step 1: Plan Your Components
- Sketch component relationships
- Identify props needed
- Plan data flow

#### Step 2: Create Header Component
- Display name as h1
- Display tagline as h2
- Add navigation links
- Style with background color

#### Step 3: Create About Component
- Display profile image
- Add bio text
- Render skills list with `.map()`

#### Step 4: Create Project Components
- Build ProjectCard first
- Build ProjectShowcase to render multiple cards
- Pass projects as props, not hardcoded

#### Step 5: Create Contact Component
- Display all contact info
- Format nicely

#### Step 6: Create Footer Component
- Add copyright notice with current year

#### Step 7: Compose in App.jsx
- Import all components
- Arrange in logical order
- Pass required props

#### Step 8: Style Everything
- Use CSS files
- Make it professional
- Consistent colors and spacing

### Challenge Questions

1. **Component Reusability:**
   - Which components could be reused elsewhere? Why?
   - How did props help make components flexible?

2. **Data Flow:**
   - How does data flow from App.jsx to smallest components?
   - Why not hardcode all data in each component?

3. **Composition:**
   - How did breaking portfolio into components help?
   - What would happen if built in one component?

### 🚀 Stretch Goals (Optional)

| Goal | Description |
|------|-------------|
| Avatar | Add circular profile image (border-radius: 50%) |
| Skill Categories | Group skills (Frontend, Tools, etc.) |
| Featured Project | Highlight one project differently |
| Testimonials | Add 2 fake testimonials with quotes |
| Styled Nav | Make navigation links look like buttons |
| Background | Add gradient or image to header |
| Theme Toggle | Add theme button (doesn't need to work) |

---

## 📤 Submission Guidelines

### What to Submit

1. **Your Code** - Entire project folder

2. **README.md** file with:
   - Your Name and Date
   - Lab Summary (2-3 sentences)
   - Components Created (list all components)
   - Setup Instructions
   - Challenges Encountered
   - Key Learnings
   - Vite Notes (if any issues)

3. **Screenshot** - Working portfolio in browser

### Setup Instructions Template

```bash
npm create vite@latest lab-1-fundamentals -- --template react
cd lab-1-fundamentals
npm install
npm run dev
```

### Submission Format

**Option 1: GitHub (Recommended)**
```bash
git init
git add .
git commit -m "Lab 1: React Fundamentals Complete (Vite Edition)"
git branch -M main
git remote add origin https://github.com/yourusername/lab-1-react.git
git push -u origin main
```

**Option 2: Zip and Email**
- Compress entire Lab-1-Submission folder
- Email to instructor

### Self-Assessment Checklist

#### Understanding Level
- [ ] I understand what JSX is
- [ ] I can create functional components
- [ ] I understand how props work
- [ ] I can compose components together
- [ ] I know when to use .jsx vs .js

#### Skills Mastered
- [ ] I can fix JSX syntax errors
- [ ] I can use props to pass data
- [ ] I can use .map() to render lists
- [ ] I can style components with CSS
- [ ] I can set up a Vite React project

#### Confidence Check
- **Easiest part:** ___________
- **Hardest part:** ___________
- **Ready for Chapter 2:** Yes / No
- **Vite vs CRA:** ___________

---

## ❌ Common Mistakes to Avoid

### 1. Forget to Export Components
```jsx
// WRONG
function MyComponent() { ... }

// RIGHT
export default function MyComponent() { ... }
```

### 2. Lowercase Component Names
```jsx
// WRONG
function greeting() { ... }

// RIGHT
function Greeting() { ... }
```

### 3. Wrong File Extension
```jsx
// WRONG
Greeting.js

// RIGHT
Greeting.jsx
```

### 4. Multiple Elements Without Wrapper
```jsx
// WRONG
return <h1>Title</h1> <p>Content</p>

// RIGHT
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
)
```

### 5. Forget to Import Components
```jsx
// WRONG
export default function App() {
  return <UserCard /> // ERROR!
}

// RIGHT
import UserCard from './components/UserCard';

export default function App() {
  return <UserCard />
}
```

### 6. Use `class` Instead of `className`
```jsx
// WRONG
<div class="container">Content</div>

// RIGHT
<div className="container">Content</div>
```

### 7. Forget Key Prop in Lists
```jsx
// Works but not ideal
items.map((item, index) => <Movie key={index} ... />

// BEST - use unique id
items.map((item) => <Movie key={item.id} ... />
```

---

## 🆘 Getting Help

If you get stuck:

1. **Read error messages carefully** - Vite and React give helpful messages
2. **Check file extensions** - Make sure React components use .jsx
3. **Revisit Chapter 1** - Look for similar examples
4. **Check imports** - Most errors are missing imports or wrong paths
5. **Browser DevTools** - Press F12 to check Elements tab
6. **React DevTools** - Inspect components and props
7. **Ask instructor** - Don't struggle alone!

---

## 🔮 Next Steps

After completing this lab:

1. Review your code and ensure you understand every line
2. Show your portfolio to someone for feedback
3. Check your Vite project structure against Chapter 1
4. Read Chapter 2: State & Forms
5. Come back later to refactor with new knowledge

---

<div align="center">

### 🎉 Good luck! You've got this!

*Remember: The goal isn't perfection—it's understanding. Every mistake is a learning opportunity.*

**Welcome to the world of Vite + React!** 🚀

</div>

---

## 🔑 Answer Key (For Instructors Only)

<details>
<summary>Click to expand (Students: Try without this first!)</summary>

### Exercise 1.1 Solution

```jsx
// src/components/Greeting.jsx
import './Greeting.css';

export default function Greeting() {
  return (
    <div className="greeting-container">
      <h1>Welcome to React!</h1>
      <h2>This is my first component</h2>
      <p>
        Fun Fact: React was created by Facebook and is now maintained by Meta and the community! 
        Vite is the modern build tool for React apps!
      </p>
    </div>
  );
}
```

### Exercise 2.1 Usage in App.jsx

```jsx
// src/App.jsx
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="app">
      <UserCard
        name="Alice"
        email="alice@example.com"
        role="Developer"
      />
      <UserCard
        name="Bob"
        email="bob@example.com"
        role="Designer"
      />
      <UserCard
        name="Charlie"
        email="charlie@example.com"
        role="Manager"
      />
    </div>
  );
}

export default App;
```

### Portfolio Challenge - App.jsx Example

```jsx
// src/App.jsx
import Header from './components/Header/Header';
import About from './components/About/About';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      name: 'Todo App',
      description: 'A React task management app',
      technologies: ['React', 'JavaScript', 'CSS']
    },
    {
      id: 2,
      name: 'Weather Dashboard',
      description: 'Real-time weather using API',
      technologies: ['React', 'API', 'Charts']
    },
    {
      id: 3,
      name: 'E-commerce Site',
      description: 'Full shopping experience',
      technologies: ['React', 'Redux', 'Node.js']
    }
  ];

  return (
    <div className="app">
      <Header name="John Doe" tagline="Full Stack Developer" />
      <About 
        profileImage="https://via.placeholder.com/300"
        bio="Passionate developer with 5 years experience..."
        skills={['React', 'JavaScript', 'HTML', 'CSS']}
      />
      <ProjectShowcase projects={projects} />
      <Contact 
        email="john@example.com"
        github="github.com/johndoe"
        linkedin="linkedin.com/in/johndoe"
      />
      <Footer name="John Doe" />
    </div>
  );
}

export default App;
```

</details>

---

<div align="center">

**End of Lab 1**

📚 Happy Coding! 🚀

</div>
