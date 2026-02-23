import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
  const hoverStyles = hoverable || onClick ? 'hover:shadow-lg hover:scale-[1.02] cursor-pointer' : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 transition-all ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
