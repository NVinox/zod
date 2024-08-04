import styles from "./index.module.scss";

export const LocalStorage = () => {
	return (
		<div className="container">
			<div className={styles.localStorage__wrapper}>
				<ul>
					<li className={styles.localStorage__item}>
						<p className={styles.localStorage__title}>Имя:</p>
						<p className={styles.localStorage__value}>Сергей</p>
					</li>
					<li className={styles.localStorage__item}>
						<p className={styles.localStorage__title}>Фамилия:</p>
						<p className={styles.localStorage__value}>Климов</p>
					</li>
					<li className={styles.localStorage__item}>
						<p className={styles.localStorage__title}>Возраст:</p>
						<p className={styles.localStorage__value}>28</p>
					</li>
					<li className={styles.localStorage__item}>
						<p className={styles.localStorage__title}>Профессия:</p>
						<p className={styles.localStorage__value}>Завхоз</p>
					</li>
					<li className={styles.localStorage__item}>
						<p className={styles.localStorage__title}>Стаж:</p>
						<p className={styles.localStorage__value}>3</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
