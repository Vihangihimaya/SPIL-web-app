import React from 'react';

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  rows?: number;
}

export function FormTextarea({ label, value, onChange, className = '', rows = 4 }: FormTextareaProps) {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <label className="min-w-[120px] pt-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="flex-1 border border-black px-2 py-1 bg-white resize-none"
      />
    </div>
  );
}
