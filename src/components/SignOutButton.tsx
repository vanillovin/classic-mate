'use client';

import React from 'react';

import { useAuth } from './providers/auth-provider';

type SignOutButtonProps = {
  className?: string;
  children: React.ReactNode;
};

function SignOutButton({ className, children }: SignOutButtonProps) {
  const { signOut } = useAuth();

  return (
    <button className={className} onClick={signOut}>
      {children}
    </button>
  );
}

export default SignOutButton;