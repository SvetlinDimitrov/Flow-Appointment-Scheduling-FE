import {createContext, ReactNode, useState} from 'react';
import {
  getUserIdFromLocalStorage,
  removeUserIdFromLocalStorage,
  setUserIdInLocalStorage
} from "../../../utils/local_storage/userToken.ts";

interface UserContextType {
  userId: number | null;
  setUserIdFun: (id: number) => void;
  removeUserIdFun: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(getUserIdFromLocalStorage());

  const setUserIdFun = (id: number) => {
    setUserIdInLocalStorage(id);
    setUserId(id);
  };

  const removeUserIdFun = () => {
    removeUserIdFromLocalStorage();
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{userId, setUserIdFun, removeUserIdFun}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
