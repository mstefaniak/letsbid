type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const apiUrl = 'http://localhost:3001/rest/v1/';

const apiData = async (requestUrl: string, method: Method = 'GET', bodyData = {}) => {
    const url = `${apiUrl}${requestUrl}`;
    const fetchOptions: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method !== 'GET') {
        fetchOptions.body = JSON.stringify(bodyData);
    }

    return fetch(url, fetchOptions)
        .then(data => Promise.all([data.json(), data]))
        .then(response => {
            const [data, httpResponse] = response;
            if (!httpResponse.ok || !data) {
                if (data) {
                    if (
                        typeof data.value === 'object' &&
                        data.value !== null &&
                        data.value.reason
                    ) {
                        throw new Error(`${data.value.reason}`);
                    }
                    if (
                        typeof data.value === 'object' &&
                        data.value !== null &&
                        data.value.error
                    ) {
                        throw new Error(`${data.value.error}`);
                    }
                    if (httpResponse.status === 401) {
                        localStorage.removeItem('token');
                    }

                    throw new Error('HTTP Error');
                }
                throw new Error('HTTP Error');
            }
            if (httpResponse.ok) {
                return data;
            }
            throw new Error('HTTP Error');
        });
};

export default apiData;
