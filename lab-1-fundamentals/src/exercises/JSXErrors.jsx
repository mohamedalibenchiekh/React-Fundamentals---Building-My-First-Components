import './JSXErrors.css';

// ERROR 1: Missing wrapper element - can't return multiple elements without a parent
// Corrected version:
function FixedComponent1() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is broken</p>
    </>
  );
}

// ERROR 2: Can't use if statements inside JSX - need ternary operator
// Corrected version:
function FixedComponent2() {
  const isTrue = true;
  return (
    <div>
      <p>Result: {isTrue ? 'Yes' : 'No'}</p>
    </div>
  );
}

// ERROR 3: Using 'class' instead of 'className' and missing self-closing tag for img
// Corrected version:
function FixedComponent3() {
  return (
    <div className="container">
      <img src="cat.jpg" alt="A cute cat" />
      <p>A paragraph</p>
    </div>
  );
}

export default function JSXErrors() {
  return (
    <div className="jsx-errors-demo">
      <h2>Fixed JSX Components</h2>
      <div className="component-grid">
        <div className="component-card">
          <h3>Component 1 - Fixed</h3>
          <FixedComponent1 />
        </div>
        <div className="component-card">
          <h3>Component 2 - Fixed</h3>
          <FixedComponent2 />
        </div>
        <div className="component-card">
          <h3>Component 3 - Fixed</h3>
          <FixedComponent3 />
        </div>
      </div>
    </div>
  );
}