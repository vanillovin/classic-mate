'use client';

import { useRouter } from 'next/navigation';
import { useSupabase } from './supabase-provider';
import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import SignOut from '../SignOut';

type AuthProviderProps = {
  children: React.ReactNode;
  accessToken: Session["access_token"] | null;
};

type AuthContextType = {
  session: Session | null;
  user: User | null,
  signOut(): void;
};

const AuthContext = createContext<AuthContextType>({ session: null, user: null, signOut: () => { } });

export const AuthProvider = ({ children, accessToken }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { supabase } = useSupabase()
  
  useEffect(() => {
    async function getSession()  {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (session) {
          setSession(session)
          setUser(session?.user ?? null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSession();
    
    const {
      data: { subscription: authListener }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
      setSession(session);
      setUser(session?.user ?? null);
    });
    
    return () => {
      authListener?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(() => {
    return {
      session,
      user,
      signOut: async () => {
        const { error } = await supabase.auth.signOut();
          if (error) throw new Error(error.message);
          router.refresh();
        }
      }
  }, [session, user, router, supabase.auth]);
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};