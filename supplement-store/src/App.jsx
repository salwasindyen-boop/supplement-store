import { Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Elite Supplements</h1>
    <h2>Fuel Your Fitness Journey</h2>

    <p>
      Premium supplements designed to help you build muscle,
      improve recovery, and maximize performance.
    </p>

    <button>Shop Now</button>

    <h2 style={{ marginTop: "40px" }}>Why Choose Us?</h2>

    <ul>
      <li>✅ Premium Ingredients</li>
      <li>✅ Fast Shipping</li>
      <li>✅ Trusted By Athletes</li>
      <li>✅ Affordable Prices</li>
    </ul>
  </div>
);

const Products = () => (
  <div>
    <h1>Products</h1>

    <div className="products">
      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d"
          alt="Whey Protein"
        />
        <h2>Whey Protein</h2>
        <p>25g protein per serving</p>
        <p>$49.99</p>
        <button>Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1579722820308-d74e571900a9"
          alt="Creatine"
        />
        <h2>Creatine Monohydrate</h2>
        <p>Boost strength and recovery</p>
        <p>$24.99</p>
        <button>Add to Cart</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Pre Workout"
        />
        <h2>Pre-Workout</h2>
        <p>Energy and focus formula</p>
        <p>$34.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </div>
);

const About = () => (
  <div>
    <h1>About Us</h1>

    <p>
      Elite Supplements is committed to helping athletes,
      bodybuilders, and fitness enthusiasts reach their goals.
    </p>

    <p>
      We provide premium quality supplements with scientifically
      proven ingredients for maximum performance and recovery.
    </p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Us</h1>

    <p>Email: support@elitesupplements.com</p>
    <p>Phone: +961 70 123 456</p>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <span className="cart">🛒 Cart</span>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <hr />

        <h3>Elite Supplements</h3>

        <p>
          Premium nutrition for strength, muscle growth, and recovery.
        </p>

        <p>© 2026 Elite Supplements. All rights reserved.</p>
      </footer>
    </>
  );
}