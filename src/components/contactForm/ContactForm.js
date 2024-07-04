import React from 'react';

const ContactForm = () => {
  return (
    <div className="contactForm">
      
      <div className="formMessage">
        <h2 className="">Got a project in mind?</h2>
        <p className="">
          Send us a message or fill out the form below and we'll be in touch. We're always looking forward to working with you!
        </p>
      </div>

      <form>
        
        <div className="form-labels">
          <label>
            Your name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Your email
            <input type="text" name="email" placeholder="Your email" required />
          </label>
        </div>

          <label>
            Your message
          </label>
          <textarea name="message" placeholder="Your message" required />

      <div className="form-labels">
        <label>
          Your budget
          <input type="text" name="bdget" placeholder="Your budget" required />
        </label>

        <label>
          Your timeline
          <input type="text" name="budget" placeholder="Your timeline" required />
        </label>
      </div>
        <button className="contact-button" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default ContactForm