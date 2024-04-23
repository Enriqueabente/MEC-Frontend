/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // reemplaza con la URL de tu API
});

// Función para establecer el token de autorización
export const setAuthToken = (token: string | null) => {
  if (token) {
    // Aplica el token de autorización a cada solicitud si está logueado
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


  } else {
    // Elimina el encabezado de autorización
    delete api.defaults.headers.common['Authorization'];
  }
};

export const get = async (endpoint: string) => {
  let response;
  try {
    response = await api.get(endpoint);
  } catch (error) {
    response = error.response
  }

  return response;
};

export const post = async (endpoint: string, data: any) => {
  let response;
  try {
    response = await api.post(endpoint, data);
  } catch (error) {
    response = error.response
  }
  console.log(response)
  return response;
};

export const put = async (endpoint: string, data: any) => {
  const response = await api.put(endpoint, data);
  return response;
};

export const del = async (endpoint: string) => {
  const response = await api.delete(endpoint);
  return response;
};
