import type { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, className, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export { Button };
