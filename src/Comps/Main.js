// Main.js
import React from "react";

function Main() {
  return (
    <main className="container">
      <section className="hero row">
        <div className="col col-8-md">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="col col-4-md">
          <div className="image-placeholder"></div>
        </div>
      </section>

      <section>
        <div className="col-12">
          <h2>Specials</h2>
          <button>View More</button>
        </div>
        <div className="specials row">
          <div className="col col-4-md">
            <div className="special-card">
              <h3>
                Greek Salad <span>$12.5</span>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Order a delivery</button>
            </div>
          </div>
          <div className="col col-4-md">
            <div className="special-card">
              <h3>
                Greek Salad <span>$12.5</span>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Order a delivery</button>
            </div>
          </div>
          <div className="col col-4-md">
            <div className="special-card">
              <h3>
                Greek Salad <span>$12.5</span>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Order a delivery</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials row">
        <div className="col-12-md">
          <h2>Testimonials</h2>
        </div>
        <div className="col col-2-md">
          <div className="testimonial-card">
            <p>Text</p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div className="col col-2-md">
          <div className="testimonial-card">
            <p>Text</p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div className="col col-2-md">
          <div className="testimonial-card">
            <p>Text</p>
            <button>Order a delivery</button>
          </div>
        </div>
        <div className="col col-2-md">
          <div className="testimonial-card">
            <p>Text</p>
            <button>Order a delivery</button>
          </div>
        </div>
      </section>

      <section className="footer row">
        <div className="col col-6-md">
          <h3>Little Lemon</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col col-6-md">
        </div>
      </section>
    </main>
  );
}

export default Main;
