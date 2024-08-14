export const setUserIdInLocalStorage = (id: number) => {
  localStorage.setItem('flow/user_id', JSON.stringify(id));
};

export const getUserIdFromLocalStorage = (): number | null => {
  const storedUser = localStorage.getItem('flow/user_id');
  return storedUser ? JSON.parse(storedUser) : null;
};

export const removeUserIdFromLocalStorage = () => {
  localStorage.removeItem('flow/user_id');
};
