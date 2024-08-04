import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import styles from "./index.module.scss";

export const Button: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
	return (
		<button className={styles.button} {...props}>
			{props.children}
		</button>
	);
};
