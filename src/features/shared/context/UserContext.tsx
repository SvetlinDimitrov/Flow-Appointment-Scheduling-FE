import {createContext, ReactNode, useState} from 'react';
import {
  getUserIdFromLocalStorage,
  removeUserIdFromLocalStorage,
  setUserIdInLocalStorage
} from "../../../utils/local_storage/userToken.ts";

interface UserContextType {
  userId: number | null;
  setUserId: (id: number) => void;
  removeUserId: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: { children: ReactNode }) => {
  const [userId, setUser] = useState<number | null>(getUserIdFromLocalStorage);

  const setUserId = (id: number) => {
    setUserIdInLocalStorage(id);
    setUser(id);
  };

  const removeUserId = () => {
    removeUserIdFromLocalStorage();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{userId, setUserId, removeUserId}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
