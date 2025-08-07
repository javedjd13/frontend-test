import React from "react";

interface InputFieldProps {
  type?: "text" | "email" | "textarea";
  name: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  touched?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
 const baseClasses =
  "w-full p-3 border border-[grey] rounded-md focus:outline-none transition-all duration-200 text-black placeholder:text-gray-400";


  return (
    <div className="flex flex-col gap-1">
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={baseClasses}
          rows={5}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={baseClasses}
        />
      )}
      {touched && error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
};

export default InputField;
