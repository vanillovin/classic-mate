'use client';

import { useRouter } from 'next/navigation';
import { Session } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import supabase from '@/lib/supabase/client';

type AuthProviderProps = {
  session: Session | null;
  children: React.ReactNode;
};

type AuthContextType = {
  profile: Profile | null,
  signOut(): void;
};

const AuthContext = createContext<AuthContextType>({ profile: null, signOut: () => {} });

async function getProfile(session: Session): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id);
  
  if (!error && data) {
    return data[0];
  } else {
    return null;
  }
}

export const AuthProvider = ({ session, children }: AuthProviderProps) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    if (session) {
      getProfile(session).then(data => {
        setProfile(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(() => {
    return {
      profile,
      signOut: async () => {
        const { error } = await supabase.auth.signOut();
          if (error) throw new Error(error.message);
          router.refresh();
        }
      }
  }, [profile, router]);
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};