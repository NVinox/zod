import { InputForm } from "@/shared/ui/inputForm";
import { Button } from "@/shared/ui/button";

import styles from "./index.module.scss";

export const FormsPage = () => {
	return (
		<div className="container">
			<div className={styles.forms__wrapper}>
				<form className={styles.forms__form}>
					<div className={styles.forms__inputs}>
						<InputForm labelProps={{ children: "Email" }} inputProps={{}} />
						<InputForm labelProps={{ children: "Имя" }} />
						<InputForm labelProps={{ children: "Возраст" }} />
					</div>

					<Button style={{ width: "100%" }}>Отправить</Button>
				</form>
			</div>
		</div>
	);
};
