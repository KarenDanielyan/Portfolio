import styles from './Hero.module.css'
import {useState, useEffect} from "react";
import axios from "axios";


function Hero() {
    const [{image, text, email}, setData] = useState({name: "", description: ""});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () =>
    {
        axios.get("http://localhost:8000/api/bio").then((response) => {
            setData(response.data);}).catch(error =>
            {
                console.log(error);
            });
    }
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hello I am Karen
                    <img
                        src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                        alt="wave"
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
                alt={"hero"}
                className={styles.heroImage}
            />
        </section>
    )
}

export default Hero;