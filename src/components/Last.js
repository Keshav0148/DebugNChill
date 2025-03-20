import React from "react";
import "../styles/Last.css";

const Last = () => {
  return (
    <div className="container">
      {/* How We Work Section */}
      <section className="how-it-works">
        <h2>How we work?</h2>
        <div className="steps">
          <div className="step">
            <div className="icon">🚚</div>
            <div className="step-content">
              <h3>You drop off/pick a schedule</h3>
              <p>We collect your old electronics from homes & businesses.</p>
            </div>
          </div>
          <div className="step">
            <div className="icon">🔍</div>
            <div className="step-content">
              <h3>We assess it</h3>
              <p>
                We check all the parts and figure out how you can make an
                impact.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="icon">♻️</div>
            <div className="step-content">
              <h3>We recycle it</h3>
              <p>
                We partner with schools, NGOs, and tech firms to give gadgets a
                second life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          {/* Left side text */}
          <div className="newsletter-text">
            <h2>Ready to make an impact?</h2>
            <p>
              Sign up to our newsletter - stay updated about the latest news on
              E-waste and exciting opportunities to be a part of our mission!
            </p>
          </div>

          {/* Right side form */}
          <div className="newsletter-form-wrapper">
            <form className="newsletter-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Anything you would like us to know?"></textarea>

              <div className="checkbox">
                <input type="checkbox" id="privacy" />
                <label htmlFor="privacy">
                  I understand and agree to the privacy policy
                </label>
              </div>

              <button type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Last;
