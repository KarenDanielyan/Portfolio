import styles from './Hero.module.css'
import {getAssetURL} from "../../utils.js";

function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hello I am Karen
                    <img
                        src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                        alt="wave"
                        className={styles.wave}
                    />
                </h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In hac habitasse platea dictumst. Nullam nec fermentum dolor.
                </p>
                <a href="mailto:myemail@email.com" className={styles.contactButton}>
                Contact Me
                </a>
            </div>
            <img
                src={"hero/kdaniely.jpg"}
                alt={"hero"}
                className={styles.heroImage}
            />
        </section>
    )
}

export default Hero;