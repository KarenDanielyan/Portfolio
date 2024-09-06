import styles from './ProjectContainer.module.css';

export function ProjectContainer({project: { title, description, source}})
{
    return (
        <div className={styles.container}>
            <img
                src={'projectImage.jpg'}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.links}>
                <a href={source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
}