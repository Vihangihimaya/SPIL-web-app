import React from 'react';

interface FormSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options?: string[];
  className?: string;
}

export function FormSelect({ label, value, onChange, options = [], className = '' }: FormSelectProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label className="min-w-[120px]">{label}</label>
      <div className="flex-1 relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-black px-2 py-1 bg-white appearance-none pr-8"
        >
          <option value=""></option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">▼</div>
      </div>
    </div>
  );
}
