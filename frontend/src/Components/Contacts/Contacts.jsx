import styles from './Contacts.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Contacts() {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		axios.get("http://localhost:8000/api/contacts/").then(
			(response) => {
			setData(response.data);
			}
		).catch(error => {
			console.log(error);
		});
	}

	return (
		<footer id='contacts' className={styles.container}>
			<div className={styles.text}>
				<h2>Contacts</h2>
				<p>I am happy to answer any of your questions :)</p>
			</div>
			<ol className={styles.links}>
				<li className={styles.link}>
					<img src={'/contacts/mail.svg'} alt={'email'}/>
					<a href={`mailto:${data?.email}`}>{data?.email}</a>
				</li>
				<li className={styles.link}>
					<img src={'/contacts/github.svg'} alt={'github'}/>
					<a href={data?.github}>Github</a>
				</li>
				<li className={styles.link}>
					<img src={'/contacts/linkedin.svg'} alt={'linkedin'}/>
					<a href={data?.linkedin}>LinkedIn</a>
				</li>
			</ol>
		</footer>
	);
}

export default Contacts;
