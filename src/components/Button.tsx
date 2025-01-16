// src/components/Button.tsx
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      style={{
        padding: '8px 16px',
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
