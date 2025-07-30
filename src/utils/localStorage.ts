export const setToken = (token: string) =>
  localStorage.setItem("access_token", token);

export const getToken = () => localStorage.getItem("access_token");

export const removeToken = () => localStorage.removeItem("access_token");

export const setUser = (user: any) => localStorage.setItem("user", user);

export const getUser = () => localStorage.getItem("user");

export const removeUser = () => localStorage.removeItem("user");

export const clearLocalStorage = () => localStorage.clear();
