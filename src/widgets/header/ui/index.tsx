import Link from "next/link";

import styles from "./index.module.scss";

export const Header = () => {
	return (
		<header className={styles.header__wrapper}>
			<div className="container">
				<nav className={styles.header__nav}>
					<ul className={styles.header__list}>
						<li className={styles.header__item}>
							<Link className={styles.header__link} href="/">
								Local storage
							</Link>
						</li>
						<li className={styles.header__item}>
							<Link className={styles.header__link} href="/query">
								Query parameters
							</Link>
						</li>
						<li className={styles.header__item}>
							<Link className={styles.header__link} href="#">
								API
							</Link>
						</li>
						<li className={styles.header__item}>
							<Link className={styles.header__link} href="#">
								Forms
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
