import styles from './About.module.css';
import {useState, useEffect} from "react";
import axios from "axios";

function Bullet({bullet}) {
    return (
        <li className={styles.aboutItem}>
            <img src={bullet?.icon} alt={""}/>
            <div>
                <h3>{bullet?.header}</h3>
                <p>{bullet?.text}</p>
            </div>
        </li>
    );
}

function About() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_API_ENDPOINT}/bullets`).then(
            (response) => {
                setData(response.data);
            }
        ).catch(error => {
            console.log(error);
        });
    }

    return (
        <section id='about' className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <video className={styles.aboutVideo} controls>
                    <source src="about/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag!
                </video>
                <ul className={styles.aboutItems}>
                    {data?.map((bullet, idx) => {return (<Bullet key={idx} bullet={bullet}/>)})}
               </ul>
            </div>
        </section>
    )
}

export default About;