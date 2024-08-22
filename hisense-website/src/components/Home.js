import React from 'react';

function Home() {
  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src={`${process.env.PUBLIC_URL}/images/fridge.jpg`} alt="Smart Fridge" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to the Future of Refrigeration</h1>
          <p>Experience the power of AI with the Hisense Refrigerator. Track your groceries, get personalized recipe suggestions, and reduce food waste.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Our Key Features</h2>
        <div className="feature-list">
          <div className="feature">
            <img src={`${process.env.PUBLIC_URL}/images/feature-icon1.png`} alt="Feature 1" />
            <h3>AI-Powered Food Detection</h3>
            <p>Automatically detect and manage your food inventory with our advanced AI technology.</p>
          </div>
          <div className="feature">
            <img src={`${process.env.PUBLIC_URL}/images/feature-icon2.png`} alt="Feature 2" />
            <h3>Smart Recipe Suggestions</h3>
            <p>Get personalized recipe suggestions based on the ingredients you have at home.</p>
          </div>
          <div className="feature">
            <img src={`${process.env.PUBLIC_URL}/images/feature-icon3.png`} alt="Feature 3" />
            <h3>Real-Time Inventory Tracking</h3>
            <p>Keep track of your groceries and never run out of essentials again.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"The Hisense Refrigerator has completely transformed the way I manage my groceries. The AI features are a game-changer!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"I love how the refrigerator suggests recipes based on what I have at home. It's so convenient and saves me so much time!"</p>
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter-signup">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default Home;
