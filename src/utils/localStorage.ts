export const setToken = (token: string) =>
  localStorage.setItem("access_token", token);

export const getToken = () =>
  localStorage.getItem("student-invoice-access_token");

export const removeToken = () =>
  localStorage.removeItem("student-invoice-access_token");

export const setUserByLocalStorage = (user: any) =>
  localStorage.setItem("student-invoice-user", JSON.stringify(user));

export const getUserByLocalStorage = () =>
  localStorage.getItem("student-invoice-user") !== null
    ? JSON.parse(localStorage.getItem("student-invoice-user")!)
    : null;

export const removeUser = () => localStorage.removeItem("student-invoice-user");

export const clearLocalStorage = () => localStorage.clear();
