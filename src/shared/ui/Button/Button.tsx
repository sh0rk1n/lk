import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "CLEAR",
  RED = "RED",
  BLUE = "BLUE",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, theme, size, disabled, children, ...otherProps } = props;

  const buttonClasses = [styles.button];
  className && buttonClasses.push(className);
  theme && buttonClasses.push(styles[theme]);
  size && buttonClasses.push(styles[size]);
  disabled && buttonClasses.push(styles.disabled);

  return (
    <button
      type="button"
      disabled={disabled}
      className={buttonClasses.join(" ")}
      {...otherProps}
    >
      {children}
    </button>
  );
});
