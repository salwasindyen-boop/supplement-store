export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}