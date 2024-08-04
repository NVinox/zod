class LocalStorage {
	getItem<T>(key: string): T | null {
		const object = localStorage.getItem(key);

		if (object) {
			return JSON.parse(object);
		}

		return null;
	}

	setItem<T>(key: string, data: T): void {
		const objectToJSON = JSON.stringify(data);

		localStorage.setItem(key, objectToJSON);
	}

	removeItem(key: string) {
		localStorage.removeItem(key);
	}
}

export const Storage = new LocalStorage();
