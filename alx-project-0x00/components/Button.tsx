import React from "react";

type ButtonProps = {
  title: string;
  styles?: string;
};

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white font-semibold ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
