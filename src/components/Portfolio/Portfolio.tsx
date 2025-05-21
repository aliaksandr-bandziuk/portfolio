import React from "react";
import styles from "./Portfolio.module.scss";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className="containerCustom">
        <div className={styles.portfolioInner}>
          <h2 className={styles.title}>Portfolio</h2>
          <div className={styles.portfolioItems}>
            <Link
              href="https://academgo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioItem}
            >
              Education
            </Link>
            <Link
              href="https://cyprusvipestates.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioItem}
            >
              Real Estate
            </Link>
            <Link
              href="https://peakprofit.bandziuk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioItem}
            >
              Blockchain
            </Link>
            <Link
              href="https://proscore.agency"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioItem}
            >
              Marketing
            </Link>
            <Link
              href="https://www.sashadith.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioItem}
            >
              DJ&apos;s website
            </Link>
            <Link
              href="https://scanm2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolioItem}
            >
              Architecture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
