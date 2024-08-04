"use client";

import { useEffect, useState } from "react";
import { ZodError } from "zod";

import { Storage } from "@/shared/helpers/Storage";

import { Button } from "@/shared/ui/button";
import { InputForm } from "@/shared/ui/inputForm";

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
					<div className={styles.localStorage__inputs}>
						<InputForm
							labelProps={{ children: "Имя" }}
							inputProps={{ required: true }}
						/>

						<InputForm
							labelProps={{ children: "Фамилия" }}
							inputProps={{ required: true }}
						/>

						<InputForm
							labelProps={{ children: "Возраст" }}
							inputProps={{ type: "number", required: true }}
						/>

						<InputForm
							labelProps={{ children: "Профессия" }}
							inputProps={{ required: true }}
						/>

						<InputForm
							labelProps={{ children: "Стаж" }}
							inputProps={{ type: "number", required: true }}
						/>
					</div>

					<Button>Сохранить</Button>
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
							{zodError.toString()}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
