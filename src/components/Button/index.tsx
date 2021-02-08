import React, { ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from "./style";

type ButtonComponent = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonComponent> = ({ children, ...settins }) => (
  <ButtonStyle type="button" {...settins}>
    {children}
  </ButtonStyle>
);

export default Button;
