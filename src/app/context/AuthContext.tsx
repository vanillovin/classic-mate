'use client'

import supabase from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type AuthContextType = {
  user: User | null,
  signOut(): void;
};

const AuthContext = createContext<AuthContextType>({ user: null, signOut: () => { } });

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const onAuthStateChange = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('finally');
    }
  };
  
  useEffect(() => {
    onAuthStateChange();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  }

  const value = useMemo(() => {
    return { user, signOut }
  }, [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const { user, signOut } = useContext(AuthContext);
  return { user, signOut };
};