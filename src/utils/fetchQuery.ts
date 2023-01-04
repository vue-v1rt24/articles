export const fetchQuery = async (url: string, method: string = 'GET', data: any = null) => {
    const settings: any = {};

    if (data) {
        settings.headers = {'Content-Type': 'application/json'};
        settings.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(url, {
            method,
            ...settings,
        });

        if (!res.ok) {
            throw res.status;
        }

        return await res.json();
    } catch (error) {
        throw error;
    }
};