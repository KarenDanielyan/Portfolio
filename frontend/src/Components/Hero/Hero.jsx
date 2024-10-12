import styles from './Hero.module.css'
import {useState, useEffect} from "react";
import hero from "../../../data/hero.json";
import axios from "axios";


function Hero() {
    const [{text, image, email}, setData] = useState(hero);

    useEffect(() => {
        fetchData().catch(error => {
            console.log(error);
        });
    }, []);

    const fetchData = async () =>
    {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/bio`)
        setData(await response.data);
    }
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hello I am Karen
                    <img
                        src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                        alt="wave"
                        loading="lazy"
                    />
                </h1>
                <p className={styles.description}>
                    {text}
                </p>
                <a href={`mailto:${email}`} className={styles.contactButton}>
                Contact Me
                </a>
            </div>
            <img
                src={image}
                loading="lazy"
                alt={"hero"}
                className={styles.heroImage}
            />
        </section>
    )
}

export default Hero;