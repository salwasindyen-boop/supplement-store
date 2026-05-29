import { Routes, Route, Link } from "react-router-dom";

const H = () => (
  <div>
    <h1>Elite Supplements</h1>
    <p>Premium gym nutrition.</p>
  </div>
);

const P = () => (
  <div>
    <h1>Products</h1>

    <h3>Whey Protein</h3>
    <p>25g protein per serving - $49.99</p>

    <h3>Creatine Monohydrate</h3>
    <p>Boost strength and performance - $24.99</p>

    <h3>Pre-Workout</h3>
    <p>Energy and focus formula - $34.99</p>
  </div>
);

const A = () => (
  <div>
    <h1>About Us</h1>
    <p>
      Elite Supplements provides high-quality sports nutrition products for
      athletes, bodybuilders, and fitness enthusiasts.
    </p>
  </div>
);

const C = () => (
  <div>
    <h1>Contact Us</h1>
    <p>Email: info@elitesupplements.com</p>
    <p>Phone: +961 70 123 456</p>
  </div>
);

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/products">Products</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<H />} />
        <Route path="/products" element={<P />} />
        <Route path="/about" element={<A />} />
        <Route path="/contact" element={<C />} />
      </Routes>
    </>
  );
}