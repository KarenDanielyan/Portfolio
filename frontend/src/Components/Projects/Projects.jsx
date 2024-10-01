import prj from '../../../data/projects.json';
import styles from './Projects.module.css';
import {ProjectContainer} from "./ProjectContainer.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

function Projects() {
	const [data, setData] = useState(prj);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		axios.get(`${import.meta.env.VITE_API_ENDPOINT}/projects/`).then(
			(response) => {
				setData(response.data);
			}
		).catch(error => {
			console.log(error);
		});
	}
	return (
		<section id="projects" className={styles.container}>
            <div className={styles.projects}>
	            {data?.map((project, idx) => {return (<ProjectContainer key={idx} project={project}/>)})}
            </div>
        </section>
  );
}

export default Projects;