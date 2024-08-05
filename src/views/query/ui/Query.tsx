import { FC } from "react";

import { TQuery } from "../types";

import styles from "./index.module.scss";

interface IProps {
  data: TQuery | string;
}

export const Query: FC<IProps> = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.query__wrapper}>
        {typeof data !== "string" && (
          <ul className={styles.query__list}>
            <li className={styles.query__item}>
              <p className={styles.query__title}>Заголовок</p>
              <p className={styles.query__value}>{data.title}</p>
            </li>
            <li className={styles.query__item}>
              <p className={styles.query__title}>Номер страницы</p>
              <p className={styles.query__value}>{data.page}</p>
            </li>
          </ul>
        )}

        {typeof data === "string" && (
          <div className={styles.query__error}>
            <p className={styles.query__errorText}>{data}</p>
          </div>
        )}
      </div>
    </div>
  );
};
