import React from 'react';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
}

export function FormInput({ label, value, onChange, type = 'text', className = '' }: FormInputProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label className="min-w-[120px]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-black px-2 py-1 bg-white"
      />
    </div>
  );
}
