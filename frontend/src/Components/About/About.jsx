import styles from './About.module.css';

function About() {
    return (
        <section id='about' className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <video className={styles.aboutVideo} controls>
                    <source src="about/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag!
                </video>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="about/info1.png" alt="About 1"/>
                        <div>
                            <h3>Dummy Header</h3>
                            <p>Dummy Text</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="about/info2.png" alt="About 2"/>
                        <div>
                            <h3>Education</h3>
                            <p>Put your education here.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="about/info3.png" alt="About 3"/>
                        <div>
                            <h3>Work in Progress</h3>
                            <p>Write some fancy LinkedIn style text.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;