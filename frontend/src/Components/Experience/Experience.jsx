import skills from '../../../data/skills.json';
import timeline from '../../../data/work.json';
import styles from './Experience.module.css';

function getSkill(skill, idx) {
    return (
        <div key={idx} className={styles.skill}>
            <div className={styles.skillImage}>
                <img src={skill.path} alt={skill.name}/>
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
                <h4>{`${entry.locationCity}, ${entry.locationCountry}`}</h4>
                <h6>{`${entry.startDate} - ${entry.endDate}`}</h6>
                <p>{entry.summary}</p>
            </div>
        </li>
    );
}

function Experience() {
    return (
      <section id="experience" className={styles.container}>
          <h2 className={styles.title}>
              Experience
          </h2>
          <div className={styles.content}>
              <div className={styles.skills}>
                  {skills.map((skill, idx) => {return (getSkill(skill, idx))})}
              </div>
              <ol className={styles.timeLine}>
                  {timeline.map((entry, idx) => {return (getTimeItem(entry, idx))})}
              </ol>
          </div>
      </section>
  );
}

export default Experience;