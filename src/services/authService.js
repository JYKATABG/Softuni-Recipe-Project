import { requestFactory } from './requester.js';

let baseUrl = 'http://localhost:3030/users'

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: async (loginData) => request.post(`${baseUrl}/login`, loginData),
        register: async (registerData) => request.post(`${baseUrl}/register`, registerData),
        logout: async () => request.get(`${baseUrl}/logout`),
    }
}