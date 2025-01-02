export const setValue = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getValue = (key: string) => {
  return localStorage.getItem(key);
};

export const removeValue = (key: string) => {
  localStorage.removeItem(key);
};
