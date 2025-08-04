import './newsletter.css';
import { useState } from 'react';

const Newsletter = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // You can add your subscription logic here
      console.log(`Subscribed with: ${email}`);
      setEmail('');
    };

  return (
    <section className="newsletter-section">
      <h2 className="newsletter-heading">Subscribe to our Newsletter</h2>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
