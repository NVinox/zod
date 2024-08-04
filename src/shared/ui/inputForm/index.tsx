"use client";

import {
	FC,
	useId,
	MutableRefObject,
	DetailedHTMLProps,
	InputHTMLAttributes,
	LabelHTMLAttributes,
} from "react";

import styles from "./index.module.scss";

interface IProps {
	inputref?: MutableRefObject<HTMLInputElement | null>;
	inputProps?: DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> &
		IProps;
	labelProps?: DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>;
}

export const InputForm: FC<IProps> = ({ inputProps, labelProps }) => {
	const id = useId();

	return (
		<div>
			<label className={styles.inputForm__label} htmlFor={id} {...labelProps}>
				{labelProps?.children}
			</label>

			<input
				id={id}
				className={styles.inputForm__input}
				ref={inputProps?.inputref}
				{...inputProps}
			/>
		</div>
	);
};
