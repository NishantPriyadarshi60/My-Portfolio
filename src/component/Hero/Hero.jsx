import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Nishant</h1>
                <p className={styles.description}>
                    I am 21 years old and I am software developer who loves to learn new technologies.I started to learn code in mid of 2022. I started with JavaScript and Mastered it then i started web development
                </p>
                <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};


export default Hero;