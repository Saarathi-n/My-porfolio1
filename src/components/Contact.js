import React from 'react';

const Contact = () => {
  return (
    <section className="section">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email id" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;