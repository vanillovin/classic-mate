"use client";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export type ToastifyProviderProps = {
  children: React.ReactNode;
};

export const ToastifyProvider = ({ children }: ToastifyProviderProps) => {
  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={4000}
      />
      {children}
    </>
  );
}
