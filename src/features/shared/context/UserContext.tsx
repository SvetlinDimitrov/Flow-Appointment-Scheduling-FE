import {createContext, ReactNode, useState} from 'react';

interface UserContextType {
  userId: number | null;
  setUserIdInLocalStorage: (id: number) => void;
  removeUserIdFromLocalStorage: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(() => {
    const storedUser = localStorage.getItem('flow/user_id');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const setUserIdInLocalStorage = (id: number) => {
    localStorage.setItem('flow/user_id', JSON.stringify(id));
    setUserId(id);
  };

  const removeUserIdFromLocalStorage = () => {
    localStorage.removeItem('flow/user_id');
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{userId, setUserIdInLocalStorage, removeUserIdFromLocalStorage}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
