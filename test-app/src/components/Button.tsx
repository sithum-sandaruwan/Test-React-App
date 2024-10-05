import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const SelectButton = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-info" onClick={onClick}>
      {children}
    </button>
  );
};

export default SelectButton;
