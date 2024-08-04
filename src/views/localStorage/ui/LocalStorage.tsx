"use client";

import { useEffect, useState } from "react";
import { ZodError } from "zod";

import { Storage } from "@/shared/helpers/Storage";

import { PersonSchema, TPerson } from "../types";

import styles from "./index.module.scss";

export const LocalStorage = () => {
	const [person, setPerson] = useState<TPerson | null>(null);
	const [zodError, setZodError] = useState<ZodError | null>(null);

	useEffect(() => {
		const person = Storage.getItem<TPerson>("person");
		const { error, success } = PersonSchema.safeParse(person);

		if (error) {
			setZodError(error);
		}

		if (person && success) {
			setPerson(person);
		}
	}, []);

	return (
		<div className="container">
			<div className={styles.localStorage__wrapper}>
				<form className={styles.localStorage__form}>
					<div>
						<label htmlFor="name">Имя</label>
						<input id="name" type="text" required />
					</div>

					<div>
						<label htmlFor="surname">Фамилия</label>
						<input id="surname" type="text" required />
					</div>

					<div>
						<label htmlFor="age">Возраст</label>
						<input id="age" type="number" required />
					</div>

					<div>
						<label htmlFor="profession">Профессия</label>
						<input id="profession" type="text" required />
					</div>

					<div>
						<label htmlFor="experience">Стаж</label>
						<input id="experience" type="number" required />
					</div>

					<button type="submit">Сохранить</button>
				</form>

				{person && (
					<ul className={styles.localStorage__list}>
						<li className={styles.localStorage__item}>
							<p className={styles.localStorage__title}>Имя:</p>
							<p className={styles.localStorage__value}>{person?.name}</p>
						</li>
						<li className={styles.localStorage__item}>
							<p className={styles.localStorage__title}>Фамилия:</p>
							<p className={styles.localStorage__value}>{person?.surname}</p>
						</li>
						<li className={styles.localStorage__item}>
							<p className={styles.localStorage__title}>Возраст:</p>
							<p className={styles.localStorage__value}>{person?.age}</p>
						</li>
						<li className={styles.localStorage__item}>
							<p className={styles.localStorage__title}>Профессия:</p>
							<p className={styles.localStorage__value}>{person?.profession}</p>
						</li>
						<li className={styles.localStorage__item}>
							<p className={styles.localStorage__title}>Стаж:</p>
							<p className={styles.localStorage__value}>{person?.experience}</p>
						</li>
					</ul>
				)}

				{zodError && (
					<div className={styles.localStorage__error}>
						<p className={styles.localStorage__errorText}>
							{JSON.stringify(zodError)}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
