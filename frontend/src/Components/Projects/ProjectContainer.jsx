import styles from './ProjectContainer.module.css';

export function ProjectContainer({project})
{
    return (
        <div className={styles.container}>
            <img
                src={project?.image}
                alt={`Image of ${project?.title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{project?.title}</h3>
            <h6 className={styles.date}>{project?.date}</h6>
            <p className={styles.description}>{project?.description}</p>
            <div className={styles.links}>
                <a href={project?.source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
}