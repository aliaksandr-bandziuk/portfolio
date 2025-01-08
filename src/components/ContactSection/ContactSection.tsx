import Contact from "../Contact/Contact";
import styles from "./ContactSection.module.scss";
import React from "react";

export const ContactSection = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className="containerCustom">
        <div className={styles.contactInner}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>Contact me</h2>
              <div className={styles.divider}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="117"
                  height="2"
                  viewBox="0 0 117 2"
                  fill="none"
                >
                  <path d="M0 1H116.5" stroke="url(#paint0_linear_16_101)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear_16_101"
                      x1="-1.10394"
                      y1="1.00004"
                      x2="-1.09485"
                      y2="-0.0666686"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#343045" />
                      <stop stopColor="#343045" />
                      <stop offset="0.348958" stopColor="#C0B7E8" />
                      <stop offset="0.6875" stopColor="#8176AF" />
                      <stop offset="1" stopColor="#343045" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.contactSubtitle}>
                Let&apos;s create a cool project for you
              </h3>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};
