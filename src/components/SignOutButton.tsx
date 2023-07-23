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
    <button
      data-tip="로그아웃"
      onClick={signOut}
      className={`${className}`}
    >
      {children}
    </button>
  );
}

export default SignOutButton;