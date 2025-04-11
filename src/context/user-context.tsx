import type { User } from '@/types/types';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface UserContextType {
  selectedUser: User | null;
  selectUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedUser, setselectedUser] = useState<User | null>(null);

  const selectUser = useCallback((user: User) => {
    setselectedUser(user);
  }, []);

  const value = useMemo(
    () => ({
      selectedUser,
      selectUser,
    }),
    [selectedUser, selectUser],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
