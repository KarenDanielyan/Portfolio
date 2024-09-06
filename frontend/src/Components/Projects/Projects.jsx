import styles from './Projects.module.css';
import projects from '../../../data/projects.json';
import { ProjectContainer} from "./ProjectContainer.jsx";

function Projects() {
	return (
		<section id="projects" className={styles.container}>
			<h2 className={styles.title}>
				Projects
			</h2>
            <div className={styles.projects}>
	            {projects.map((project, idx) => {return (<ProjectContainer key={idx} project={project}/>)})}
            </div>
        </section>
  );
}

export default Projects;