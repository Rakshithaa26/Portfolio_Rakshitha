import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contactpage">
      <div id="contact">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/mnqkloqe" method="POST">
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="_replyto" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
