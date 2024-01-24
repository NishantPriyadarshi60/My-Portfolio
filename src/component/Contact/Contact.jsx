import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:nishantpriyadarshi60@gmail.com">nishantpriyadarshi60.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn "
                    />
                    <a href="https://www.linkedin.com/in/nishant-priyadarshi-a99ab7283/">Linkedin</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/NishantPriyadarshi60?tab=repositories">Github</a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact;