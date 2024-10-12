import tl from '../../../data/work.json';
import sk from '../../../data/skills.json';
import styles from './Experience.module.css';
import {useEffect, useState} from "react";
import axios from "axios";

function getSkill(skill, idx) {
    return (
        <div key={idx} className={styles.skill}>
            <div className={styles.skillImage}>
                <img src={skill.icon} alt={skill.name}/>
            </div>
            <p>{skill.name}</p>
        </div>
    )
}

function getTimeItem(entry, idx) {
    return (
        <li className={styles.timeItem} key={idx}>
            <div className={styles.timeItemDetails}>
                <h3>{`${entry.company} - ${entry.role}`}</h3>
                <h4>{`${entry.city}, ${entry.country}`}</h4>
                <h6>{`${entry.start_date} - ${entry.end_date}`}</h6>
                <p>{entry.summary}</p>
            </div>
        </li>
    );
}

function Experience() {
    const [skills, setSkills] = useState(sk);
    const [timeline, setTimeline] = useState(tl);

    useEffect(() => {
        fetchData();
        }, []);

    const fetchData = () => {
        axios.all([
            axios.get(`${import.meta.env.VITE_API_ENDPOINT}/skills/`),
            axios.get(`${import.meta.env.VITE_API_ENDPOINT}/experience/`)
        ]).then(
            axios.spread((skillsResponse, timelineResponse) => {
                setSkills(skillsResponse.data);
                setTimeline(timelineResponse.data);
            })).catch(error => {
            console.log(error);
        })
    }

    return (
      <section id="experience" className={styles.container}>
          <h2 className={styles.title}>
              Experience
          </h2>
          <div className={styles.content}>
              <div className={styles.skills}>
                  {skills?.map((skill, idx) => {return (getSkill(skill, idx))})}
              </div>
              <ol className={styles.timeLine}>
                  {timeline?.map((entry, idx) => {return (getTimeItem(entry, idx))})}
              </ol>
          </div>
      </section>
  );
}

export default Experience;