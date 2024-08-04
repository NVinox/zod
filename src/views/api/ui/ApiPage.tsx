import { FC } from "react";

import { TApi } from "../types";

import styles from "./index.module.scss";

interface IProps {
	data: TApi[] | string;
}

export const ApiPage: FC<IProps> = ({ data }) => {
	return (
		<div className="container">
			<div className={styles.api__wrapper}>
				{typeof data !== "string" && (
					<ul className={styles.api__list}>
						{data.map(({ title, description, selected }, index) => (
							<li
								className={
									selected
										? `${styles.api__item} ${styles.api__item_selected}`
										: styles.api__item
								}
								key={Date.now() + index}
							>
								<p className={styles.api__title}>{title}</p>
								<p className={styles.api__description}>{description}</p>
							</li>
						))}
					</ul>
				)}

				{typeof data === "string" && (
					<div className={styles.api__error}>
						<p className={styles.api__errorText}>{data}</p>
					</div>
				)}
			</div>
		</div>
	);
};
