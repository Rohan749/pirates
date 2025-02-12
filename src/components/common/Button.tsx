import React, { ReactNode } from 'react'

interface ButtonInterface {
    children: ReactNode;
    variant?: string;
    className?: string
}

const Button = ({children, variant, className, ...otherProps}:ButtonInterface) => {
  return (
    <button {...otherProps} className={`px-5 py-2 w-[9rem] text-sm ${className} ${variant === "full" && "golden text-black"}`}>
        {children}
    </button>
  )
}

export default Button