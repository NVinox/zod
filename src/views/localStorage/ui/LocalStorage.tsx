"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { ZodError } from "zod";

import { Storage } from "@/shared/helpers/Storage";

import { Button } from "@/shared/ui/button";
import { InputForm } from "@/shared/ui/inputForm";

import { PersonSchema, TPerson } from "../types";

import styles from "./index.module.scss";

export const LocalStorage = () => {
  const [person, setPerson] = useState<TPerson | null>(null);
  const [zodError, setZodError] = useState<ZodError | null>(null);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const onSavePerson: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData: TPerson = { name, surname, age };
    const { success, error } = PersonSchema.safeParse(formData);

    if (error) {
      setZodError(error);
    }

    if (success) {
      Storage.setItem("person", formData);
      setZodError(null);
    }
  };

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
        <form className={styles.localStorage__form} onSubmit={onSavePerson}>
          <div className={styles.localStorage__inputs}>
            <InputForm
              labelProps={{ children: "Имя" }}
              inputProps={{
                name: "name",
                required: true,
                onChange: (e) => setName(e.target.value),
              }}
            />

            <InputForm
              labelProps={{ children: "Фамилия" }}
              inputProps={{
                name: "surname",
                required: true,
                onChange: (e) => setSurname(e.target.value),
              }}
            />

            <InputForm
              labelProps={{ children: "Возраст" }}
              inputProps={{
                type: "number",
                name: "age",
                required: true,
                onChange: (e) => setAge(+e.target.value),
              }}
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
          </ul>
        )}

        {zodError && (
          <div className={styles.localStorage__error}>
            <p className={styles.localStorage__errorText}>
              {JSON.stringify(zodError, null, " ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
