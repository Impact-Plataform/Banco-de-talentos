import "./stylesBaseSelect.css";

import { SelectHTMLAttributes } from "react";

interface NestedOptionsProps {
  url: string;
  name: string;
}

interface BaseSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  options?: string[];
  nestedOptions?: NestedOptionsProps[];
}

export const BaseSelect = ({
  placeholder,
  options,
  nestedOptions,
  ...rest
}: BaseSelectProps) => {
  return (
    <select className="select__container" {...rest} required defaultValue="">
      <option disabled value="" className="select__option--placeholder">
        {placeholder}
      </option>
      {options?.map((option) => (
        <option className="select__option" key={option} value={option}>
          {option}
        </option>
      ))}
      {nestedOptions?.map((option: { url: string; name: string }) => (
        <option className="select__option" key={option.name} value={option.url}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
