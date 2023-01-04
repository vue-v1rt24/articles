class LocalStorageUtils {
    static localStorageGet(key: string): any {
        if (!key) return;

        return JSON.parse(localStorage.getItem(key)!);
    }

    static localStorageSet(key: string, data: any): void {
        if (!key && !data) return;

        localStorage.setItem(key, JSON.stringify(data));
    }

    static localStorageRemove(key: string): void {
        if (!key) return;

        localStorage.removeItem(key);
    }
}

export default LocalStorageUtils;