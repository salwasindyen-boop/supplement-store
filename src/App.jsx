import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div>

    <section className="hero">

      <div className="hero-text">

        <h1>UNLOCK YOUR PEAK PERFORMANCE</h1>

        <p>
          Premium supplements for muscle growth,
          strength, and recovery.
        </p>

        <button>Shop Now</button>

      </div>

      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
        alt="Fitness"
      />

    </section>
<section style={{padding:"50px"}}>

<h2>Customer Reviews</h2>

<div className="product-card">
⭐⭐⭐⭐⭐
<p>Best protein I've ever used.</p>
</div>

<div className="product-card">
⭐⭐⭐⭐⭐
<p>Amazing quality and fast delivery.</p>
</div>

</section>
  </div>
);
  

const Products = ({ addToCart}) => (
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
        <button onClick={() => addToCart("Whey Protein")}>
  Add to Cart
</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1579722820308-d74e571900a9"
          alt="Creatine"
        />
        <h2>Creatine Monohydrate</h2>
        <p>Boost strength and recovery</p>
        <p>$24.99</p>
        <button onClick={() => addToCart("Creatine Monohydrate")}>
  Add to Cart
</button>
      </div>

      <div className="product-card">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
          alt="Pre Workout"
        />
        <h2>Pre-Workout</h2>
        <p>Energy and focus formula</p>
        <p>$34.99</p>
        <button onClick={() => addToCart("Pre-Workout")}>
  Add to Cart
</button>
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
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
  setCart([...cart, product]);
};
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <span className="cart">
  🛒 Cart ({cart.length})
</span>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
         path="/products"
         element={<Products addToCart={addToCart} />}
/>
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
        <p>Done by Hasan&Sami.</p>
      </footer>
    </>
  );
}