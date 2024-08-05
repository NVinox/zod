"use client";

import { ZodError } from "zod";
import { FormEventHandler, useState } from "react";

import { InputForm } from "@/shared/ui/inputForm";
import { Button } from "@/shared/ui/button";

import { TForms, FormsSchema } from "../types";

import styles from "./index.module.scss";

export const FormsPage = () => {
  const [zodError, setZodError] = useState<ZodError | null>(null);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data: TForms = { email, name, age };
    const { success, error } = FormsSchema.safeParse(data);

    if (error) {
      setZodError(error);
    }

    if (success) {
      setZodError(null);
    }
  };

  return (
    <div className="container">
      <div className={styles.forms__wrapper}>
        <form className={styles.forms__form} onSubmit={onSubmit}>
          <div className={styles.forms__inputs}>
            <InputForm
              labelProps={{ children: "Email" }}
              inputProps={{ onChange: (e) => setEmail(e.target.value) }}
            />
            <InputForm
              labelProps={{ children: "Имя" }}
              inputProps={{ onChange: (e) => setName(e.target.value) }}
            />
            <InputForm
              labelProps={{ children: "Возраст" }}
              inputProps={{ onChange: (e) => setAge(+e.target.value) }}
            />
          </div>

          <Button style={{ width: "100%" }}>Отправить</Button>
        </form>
      </div>

      {zodError && (
        <div className={styles.forms__error}>
          <p className={styles.forms__errorText}>
            {JSON.stringify(zodError, null, " ")}
          </p>
        </div>
      )}
    </div>
  );
};
