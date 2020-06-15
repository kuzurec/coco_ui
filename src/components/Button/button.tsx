import React from 'react';
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

function Button(props: IButtonProps) {
  const {
    btnType,
    btnSize,
    disabled,
    children,
    href
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
      >
        {children}
      </a>
      )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
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