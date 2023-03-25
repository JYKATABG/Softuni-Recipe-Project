import * as request from './requester.js';

let baseUrl = 'http://localhost:3030/users'

export const login = async (loginData) => request.post(`${baseUrl}/login`, loginData);

export const register = async (registerData) => request.post(`${baseUrl}/register`, registerData);

export const logout = async () => request.get(`${baseUrl}/logout`);

