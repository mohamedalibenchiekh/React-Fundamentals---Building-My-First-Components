import './App.css';
import Greeting from './components/Greeting';
import JSXErrors from './exercises/JSXErrors';
import StatusBadge from './components/StatusBadge';
import UserCard from './components/UserCard';
import Product from './components/Product';
import Card from './components/Card';
import BlogPost from './components/BlogPost';
import MovieList from './components/MovieList';
import ToggleButton from './components/ToggleButton';
import Header from './components/Header/Header';
import About from './components/About/About';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // Data for MovieList
  const movies = [
    { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
    { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
    { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
    { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
  ];

  // Data for Portfolio Challenge
  const projects = [
    {
      id: 1,
      name: 'Todo App',
      description: 'A React task management app with local storage support',
      technologies: ['React', 'JavaScript', 'CSS']
    },
    {
      id: 2,
      name: 'Weather Dashboard',
      description: 'Real-time weather using OpenWeatherMap API',
      technologies: ['React', 'API', 'Charts']
    },
    {
      id: 3,
      name: 'E-commerce Site',
      description: 'Full shopping experience with cart and checkout',
      technologies: ['React', 'Redux', 'Node.js']
    }
  ];

  return (
    <div className="app">
      {/* Part 1: JSX and Components Basics */}
      <section className="lab-section">
        <h2>Part 1: JSX and Components Basics</h2>
        <Greeting />
        <JSXErrors />
        <StatusBadge />
      </section>

      {/* Part 2: Working with Props */}
      <section className="lab-section">
        <h2>Part 2: Working with Props</h2>
        <div className="cards-container">
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

        <div className="products-container">
          <Product 
            title="Laptop" 
            price={999} 
            inStock={true} 
            rating={4.5} 
          />
          <Product 
            title="Phone" 
            price={499} 
            inStock={false} 
            rating={4} 
          />
          <Product 
            title="Headphones" 
            price={99} 
            inStock={true} 
            rating={5} 
          />
        </div>

        <div className="cards-demo">
          <Card title="Card 1">
            <p>This is the content inside Card 1</p>
          </Card>
          <Card title="Card 2">
            <p>This is the content inside Card 2</p>
          </Card>
          <Card title="Card 3">
            <p>This is the content inside Card 3</p>
          </Card>
        </div>
      </section>

      {/* Part 3: Component Composition */}
      <section className="lab-section">
        <h2>Part 3: Component Composition</h2>
        
        <BlogPost 
          title="Learning React"
          author={{ name: "Alice", email: "alice@example.com", role: "Developer" }}
          content="React is amazing! Today I learned about components, props, and JSX. The component-based architecture makes building UIs so intuitive and reusable."
          date="Jan 15, 2024"
        />
        
        <BlogPost 
          title="React Tips"
          author={{ name: "Bob", email: "bob@example.com", role: "Designer" }}
          content="Here are my top React tips: Always use keys in lists, keep components small and focused, and leverage props for reusability!"
          date="Jan 20, 2024"
        />

        <MovieList movies={movies} />

        <div className="toggle-demo">
          <ToggleButton isVisible={true} />
          <ToggleButton isVisible={false} />
        </div>
      </section>

      {/* Part 4: Portfolio Challenge */}
      <section className="lab-section portfolio-challenge">
        <h2>Part 4: Portfolio Challenge</h2>
        <Header 
          name="Mohamed Ali Ben Cheikh" 
          tagline="Full Stack Developer & React Enthusiast" 
        />
        <About 
          profileImage="https://imgs.search.brave.com/c7KGb0FkFv6yLhMtglHUH-OxPY36ZtEVDkLe--DhVb8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mcm9udGVuZC1k/ZXZlbG9wZXItaW50/ZWdyYXRpbmctdGhp/cmRwYXJ0eS1qYXZh/c2NyaXB0LWxpYnJh/cmllcy1lbmhhbmNl/ZC11c2VyLWV4cGVy/aWVuY2VzXzEzMTQ0/NjctMjEzMDcyLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA"
          bio="I'm a passionate developer with 5 years of experience building web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies."
          skills={['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Python']}
        />
        <ProjectShowcase projects={projects} />
        <Contact 
          email="mohamed.ali.bencheikh@horizon-university.tn"
          github="github.com/mohamedalibenchiekh"
          linkedin="linkedin.com/in/mohamed-ali-ben-cheikh-589b9b235/"
        />
        <Footer name="Mohamed Ali Ben Cheikh" />
      </section>
    </div>
  );
}

export default App;