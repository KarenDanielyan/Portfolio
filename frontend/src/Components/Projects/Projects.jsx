import styles from './Projects.module.css';
import {ProjectContainer} from "./ProjectContainer.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

function Projects() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		axios.get("http://127.0.0.1:8000/api/projects/").then(
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