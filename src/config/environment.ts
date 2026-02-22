const DEV = "http://localhost:5173";
const PROD = "http://localhost:4173";
const SERVER_DEV = "https://jsonplaceholder.typicode.com";
const SERVER_PROD = "https://jsonplaceholder.typicode.com";

export const environment = {
  baseOrigin: import.meta.env.MODE === "production" ? PROD : DEV,
  apiOrigin: import.meta.env.MODE === "production" ? SERVER_PROD : SERVER_DEV,
};
