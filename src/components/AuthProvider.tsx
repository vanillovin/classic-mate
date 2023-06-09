'use client'

import supabase from '@/lib/supabase/client';
import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type AuthContextType = {
  session: Session | null;
  user: User | null,
  signOut(): void;
};

const AuthContext = createContext<AuthContextType>({ session: null, user: null, signOut: () => { } });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  
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
      } finally {
        console.log('finally');
      }
    };
    getSession();

    const {
      data: { subscription: authListener }
    } = supabase.auth.onAuthStateChange((_event, session) => {
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
      signOut: () => supabase.auth.signOut()
    }
  }, [session, user]);

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