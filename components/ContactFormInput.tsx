"use client";

import React from "react";
import { FormData } from "@/lib/types/contact";

interface ContactFormInputProps {
label: string;
name: keyof FormData;
type?: string;
placeholder?: string;
value: string;
error?: string;
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export default function ContactFormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  }: ContactFormInputProps) {
  return (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-xs uppercase tracking-widest text-foreground font-mono">
      {label}
    </label>
    <input id={name} name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}
      className="w-full bg-secondary border border-border text-foreground placeholder:text-foreground focus:outline-none focus:border-accent transition-colors duration-200 px-4 py-3 text-sm" />
    {error && <span className="text-xs text-red-500 font-mono">{error}</span>}
  </div>
  );
  }
