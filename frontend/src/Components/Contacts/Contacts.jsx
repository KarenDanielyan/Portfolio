import styles from './Contacts.module.css';

function Contacts() {
	const mail = 'mail@mail.com';

	return (
		<footer id='contacts' className={styles.container}>
			<div className={styles.text}>
				<h2>Contacts</h2>
				<p>I am happy to answer any of your questions :)</p>
			</div>
			<ol className={styles.links}>
				<li className={styles.link}>
					<img src={'/contacts/mail.svg'} alt={'email'}/>
					<a href={`mailto:${mail}`}>{mail}</a>
				</li>
				<li className={styles.link}>
					<img src={'/contacts/github.svg'} alt={'github'}/>
					<a href={'https://github.com/KarenDanielyan'}>Github</a>
				</li>
				<li className={styles.link}>
					<img src={'/contacts/linkedin.svg'} alt={'linkedin'}/>
					<a href={'https://www.linkedin.com/in/karen-danielyan-723812124'}>LinkedIn</a>
				</li>
			</ol>
		</footer>
	);
}

export default Contacts;
