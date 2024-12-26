import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`font-black text-2xl tracking-tight ${className}`}>
      <span className="inline-block">
        <span className="text-gray-900">ConnecX</span>
        <span className="block text-3xl -mt-1 text-gray-800" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          DealZ
        </span>
      </span>
    </div>
  );
}