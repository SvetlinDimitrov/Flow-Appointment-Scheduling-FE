import React, {createContext, ReactNode, useState} from 'react';

interface UserContextType {
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(() => {
    const storedUser = localStorage.getItem('flow/user_id');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <UserContext.Provider value={{userId, setUserId}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
