export async function requester(method, token, url, data) {

    const options = {}

    if (method !== "GET") {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            }

            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token,
        }
    }
    const response = await fetch(url, options)

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw alert(result.message);
    }

    return result;
}

export const requestFactory = (token) => {

    return {
        get: requester.bind(null, 'GET', token),
        post: requester.bind(null, 'POST', token),
        put: requester.bind(null, 'PUT', token),
        delete: requester.bind(null, 'DELETE', token),
    }
}