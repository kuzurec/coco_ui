import React, { ButtonHTMLAttributes, AnchorHTMLAttributes }from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface IButtonProps {
  className?: string;
  btnType?: ButtonType;
  btnSize?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
  href?: string
}

type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = IButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

function Button(props: ButtonProps) {
  const {
    btnType,
    btnSize,
    disabled,
    children,
    href,
    ...restProps
  } = props
  
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${btnSize}`]: btnSize,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  if((btnType === ButtonType.Link) && href) {
    return (
      <a 
        href={href}
        className={classes}
        {...restProps}
      >
        {children}
      </a>
      )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
      )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button