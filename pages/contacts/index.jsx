import React from "react";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import styles from "./contacts.module.css"

const Index = () => {
  return (
    <PageTemplate>
      <main>
        <div className={styles.contactsWrapper}>
          <h1>Contact Us</h1>
          <section>
            <p>
              We`re here to help! Reach out to us through any of the following
              methods:
            </p>
          </section>

          <section>
            <h3>Customer Support</h3>
            <p>Email: support@riddleforum.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Hours: Monday - Friday, 9 AM - 6 PM (EST)</p>
          </section>

          <section>
            <h3>General Inquiries</h3>
            <p>Email: info@riddleforum.com</p>
            <p>Phone: +1 (555) 987-6543</p>
            <p>Hours: Monday - Friday, 9 AM - 5 PM (EST)</p>
          </section>

          <section>
            <h3>Mailing Address</h3>
            <p>Riddle Forum Headquarters</p>
            <p>123 Puzzle Lane</p>
            <p>Enigma City, EC 45678</p>
          </section>

          <section>
            <h3>Follow Us on Social Media</h3>
            <p>
              Twitter:{" "}
              <a href="https://twitter.com/riddleforum">@riddleforum</a>
            </p>
            <p>
              Facebook:{" "}
              <a href="https://facebook.com/riddleforum">
                facebook.com/riddleforum
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a href="https://instagram.com/riddleforum">@riddleforum</a>
            </p>
          </section>
        </div>
      </main>
    </PageTemplate>
  );
};

export default Index;
