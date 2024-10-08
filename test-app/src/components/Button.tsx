import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  // color?: string;
  onClick: () => void;
}

const SelectButton = ({ children, onClick, color = "danger" }: Props) => {
  return (
    <button className={"btn btn" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default SelectButton;
